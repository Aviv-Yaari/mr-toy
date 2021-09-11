import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatIcon from '@material-ui/icons/Chat';

import { getToyById, removeToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import classes from '../css/toy-details.module.css';
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
        <main className={classes['main-container']}>
          <Container className={classes['toy-details']} maxWidth="md">
            <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold' }}>
              {name} {!inStock && ' - Out of Stock!'}
            </Typography>
            <ToyLabelList labels={labels} />
            <img
              className={classes['toy-img']}
              src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              alt=""
              width="100%"
            />
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Typography variant="h6">Price: {price}$</Typography>
            <section className={classes['toy-actions']}>
              <ToyActions toy={toy} onToyEdit={this.onToyEdit} onRemoveToy={this.onRemoveToy} />
            </section>
          </Container>

          <Container className={classes['toy-reviews']} maxWidth="md">
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
              Reviews
            </Typography>
            <ToyReviewList reviews={reviews} />
          </Container>
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
