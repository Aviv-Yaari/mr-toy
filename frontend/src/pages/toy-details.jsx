import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatIcon from '@material-ui/icons/Chat';

import { getToyById, removeToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import { ToyActions } from '../cmps/toy-actions';
import { ToyLabelList } from '../cmps/toy-label-list';
import { ToyReviewList } from '../cmps/toy-review-list';
import { Popup } from '../cmps/popup';
import { ChatApp } from '../cmps/chat-app';

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

  render() {
    if (!this.props.toys || !this.props.toys.length) return <CircularProgress />;
    const toy = this.props.toys[0];
    const { name, description, price, labels, inStock, reviews } = toy;

    return (
      <>
        <main>
          <section className="toy-details container">
            <Typography variant="h3" gutterBottom style={{ fontWeight: '500' }}>
              {name} {!inStock && ' - Out of Stock!'}
            </Typography>
            <ToyLabelList labels={labels} />
            <img
              className="toy-img"
              src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              alt=""
              width="100%"
            />
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Typography variant="h6">Price: {price}$</Typography>
            <section className="toy-actions">
              <ToyActions toy={toy} onToyEdit={this.onToyEdit} onRemoveToy={this.onRemoveToy} />
            </section>
          </section>

          <section className="toy-reviews">
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
              Reviews
            </Typography>
            <ToyReviewList reviews={reviews} />
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
  const { toys } = state.toyModule;
  return { toys };
};

const mapDispatchToProps = {
  getToyById,
  removeToy,
  showUserMsg,
};

export const ToyDetails = connect(mapStateToProps, mapDispatchToProps)(_ToyDetails);
