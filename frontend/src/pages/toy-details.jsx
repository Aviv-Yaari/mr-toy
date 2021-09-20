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

class _ToyDetails extends Component {
  state = { isEditMode: false };
  DEFAULT_IMG = 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg';

  componentDidMount() {
    this.loadToy();
  }

  loadToy = () => {
    const { id } = this.props.match.params;
    this.props.getToyById(id);
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

  render() {
    const { toy } = this.props;
    if (!toy) return <CircularProgress />;
    const { name, description, price, labels, inStock, reviews, img } = toy;

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
        <Popup icon={<ChatIcon />}>
          <ChatApp />
        </Popup>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { currToy: toy } = state.toyModule;
  const { reviews } = state.reviewModule;
  return { toy, reviews };
};

const mapDispatchToProps = {
  getToyById,
  removeToy,
  addReview,
  removeReview,
  showUserMsg,
};

export const ToyDetails = connect(mapStateToProps, mapDispatchToProps)(_ToyDetails);
