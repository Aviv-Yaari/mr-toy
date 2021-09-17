import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatIcon from '@material-ui/icons/Chat';

import { getToyById, removeToy } from '../store/actions/toy.actions';
import { addReview, loadReviews } from '../store/actions/review.actions';
import { showUserMsg } from '../store/actions/general.actions';
import { ToyActions } from '../cmps/toy-actions';
import { ToyLabelList } from '../cmps/toy-label-list';
import { ToyReviewList } from '../cmps/toy-review-list';
import { Popup } from '../cmps/popup';
import { ChatApp } from '../cmps/chat-app';
import { ToyReviewAdd } from '../cmps/toy-review-add';

class _ToyDetails extends Component {
  state = { isEditMode: false };

  componentDidMount() {
    this.loadToy();
  }

  loadToy = () => {
    const { id } = this.props.match.params;
    this.props.getToyById(id);
  };

  onRemoveToy = toy => {
    this.props.removeToy(toy);
    this.props.showUserMsg('Toy removed');
    this.props.history.push('/toy');
  };

  onToyEdit = toy => {
    const { _id } = toy;
    this.props.history.push(`/toy/${_id}/edit`);
  };

  onReviewAdd = async review => {
    try {
      const newReview = { ...review, toy: this.props.toy._id };
      await this.props.addReview(newReview);
      await this.loadToy();
      this.props.showUserMsg('Review added');
    } catch (err) {
      this.props.showUserMsg('Could not add review', true);
    }
  };

  render() {
    const { toy } = this.props;
    if (!toy) return <CircularProgress />;
    const { name, description, price, labels, inStock, reviews } = toy;

    return (
      <>
        <main>
          <section className="toy-details container">
            <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
              {name} {!inStock && ' - Out of Stock!'}
            </Typography>
            <ToyLabelList labels={labels} />
            <div className="toy-img-container">
              <img
                className="toy-img"
                src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                alt=""
              />
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
            {reviews && <ToyReviewList reviews={reviews} />}
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
  loadReviews,
  showUserMsg,
};

export const ToyDetails = connect(mapStateToProps, mapDispatchToProps)(_ToyDetails);
