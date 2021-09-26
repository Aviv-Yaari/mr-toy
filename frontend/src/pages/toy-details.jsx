import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatIcon from '@material-ui/icons/Chat';

import { getToyById, removeToy } from '../store/actions/toy.actions';
import { addReview, removeReview } from '../store/actions/review.actions';
import { showUserMsg } from '../store/actions/general.actions';
import { ToyActions } from '../cmps/toy-actions';
import { ToyLabelList } from '../cmps/toy-label-list';
import { ToyReviewList } from '../cmps/toy-review-list';
import { Popup } from '../cmps/popup';
import { ChatApp } from '../cmps/chat-app';
import { ToyReviewAdd } from '../cmps/toy-review-add';
import { reviewService } from '../services/review.service';
import { socketService } from '../services/socket.service';

class _ToyDetails extends Component {
  state = { isEditMode: false, chat: { messages: [], typingUsers: [] } };

  async componentDidMount() {
    await this.loadToy();
    this.startChat();
  }
  componentWillUnmount() {
    this.terminateChat();
  }

  loadToy = async () => {
    try {
      const { id } = this.props.match.params;
      await this.props.getToyById(id);
    } catch (err) {
      window.location = '/toy';
    }
  };

  onRemoveToy = async toy => {
    try {
      this.props.showUserMsg('Removing Toy...');
      await this.props.removeToy(toy);
      this.props.showUserMsg('Toy removed');
      this.props.history.push('/toy');
    } catch (err) {
      this.props.showUserMsg(err, true);
    }
  };

  onToyEdit = toy => {
    const { _id } = toy;
    this.props.history.push(`/toy/${_id}/edit`);
  };

  onReviewAdd = async review => {
    try {
      await reviewService.create({ ...review, toy: this.props.toy._id });
      await this.loadToy();
      this.props.showUserMsg('Review added');
    } catch (err) {
      this.props.showUserMsg(err, true);
    }
  };

  onRemoveReview = async review => {
    try {
      this.props.showUserMsg('Deleting review...');
      await reviewService.remove(review._id);
      await this.loadToy();
      this.props.showUserMsg('Review deleted');
    } catch (err) {
      console.error(err);
      this.props.showUserMsg(err, true);
    }
  };

  // Chat:

  startChat = () => {
    socketService.emit('toy chat', this.props.toy._id);
    socketService.on('chat addMsg', this.addMessage);
    socketService.on('chat addTyping', this.addTyping);
  };

  terminateChat = () => {
    // socketService.emit('unset-user-socket', this.props.user._id);
    socketService.off('chat addMsg', this.addMessage);
    socketService.off('chat addTyping', this.addTyping);
  };

  addMessage = message => {
    this.setState(prevState => ({
      chat: { ...prevState.chat, messages: [...prevState.chat.messages, message], isTyping: false },
    }));
  };

  addTyping = typingUser => {
    this.setState(prevState => {
      const { typingUsers } = prevState.chat;
      const updatedTypingUsers = [...typingUsers];
      const userIdx = typingUsers.findIndex(user => user === typingUser.userId);
      if (userIdx === -1) {
        typingUser.isTyping && updatedTypingUsers.push(typingUser.userId);
      } else {
        !typingUser.isTyping && updatedTypingUsers.splice(userIdx, 1);
      }
      return {
        chat: { ...prevState.chat, typingUsers: updatedTypingUsers },
      };
    });
  };

  sendMessage = message => {
    socketService.emit('chat newMsg', message);
  };

  onSend = ev => {
    ev.preventDefault();
    const { user } = this.props;
    const text = ev.target.text.value;
    const from = user.firstName;
    const message = { text, from };
    this.sendMessage(message);
    ev.target.reset();
    socketService.emit('chat newTyping', false);
  };

  onTyping = ev => {
    const message = ev.target.value;
    socketService.emit('chat newTyping', message ? true : false);
  };

  render() {
    const { toy, user } = this.props;
    if (!toy) return <CircularProgress />;
    const { name, description, price, labels, inStock, reviews, img } = toy;
    const { chat } = this.state;

    return (
      <>
        <main>
          <section className="toy-details container flex column align-center justify-center">
            <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
              {name} {!inStock && ' - Out of Stock!'}
            </Typography>
            <ToyLabelList labels={labels} />
            <div className="toy-img-container">
              <img className="toy-img" src={img || this.DEFAULT_IMG} alt="" />
            </div>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Typography variant="h6">Price: {price}$</Typography>
            <section className="toy-actions">
              <ToyActions toy={toy} onToyEdit={this.onToyEdit} onRemoveToy={this.onRemoveToy} />
            </section>
          </section>

          <section className="toy-reviews">
            <ToyReviewAdd onSubmit={this.onReviewAdd} />
            {reviews && <ToyReviewList reviews={reviews} onRemoveReview={this.onRemoveReview} />}
          </section>
        </main>
        {user && (
          <Popup icon={<ChatIcon />}>
            <ChatApp
              onSend={this.onSend}
              onTyping={this.onTyping}
              messages={chat.messages}
              typingUsers={chat.typingUsers}
            />
          </Popup>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { currToy: toy } = state.toyModule;
  const { reviews } = state.reviewModule;
  const { user } = state.userModule;
  return { toy, reviews, user };
};

const mapDispatchToProps = {
  getToyById,
  removeToy,
  addReview,
  removeReview,
  showUserMsg,
};

export const ToyDetails = connect(mapStateToProps, mapDispatchToProps)(_ToyDetails);
