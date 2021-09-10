import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadToys, removeToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import { CircularProgress, Container, TextField } from '@material-ui/core';
import { ToyLabelList } from '../cmps/toy-label-list';

class _ToyEdit extends Component {
  state = {
    form: {
      name: '',
      description: '',
      price: '',
    },
  };

  async componentDidMount() {
    await this.loadToy();
    const { name, description, price } = this.props.toys[0];
    this.setState({ form: { name, description, price } });
  }

  loadToy = async () => {
    const { id } = this.props.match.params;
    this.props.loadToys({ id });
  };

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState(prevState => ({ form: { ...prevState.form, [name]: value } }));
  };

  render() {
    if (!this.props.toys || !this.props.toys.length) return <CircularProgress />;
    const toy = this.props.toys[0];
    const { labels } = toy;
    const { name, description, price } = this.state.form;
    return (
      <>
        <Container className="toy-edit" maxWidth="md">
          <img
            src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            alt=""
            width="100%"
          />
          <ToyLabelList labels={labels} />
          <TextField
            fullWidth
            label="Toy Name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <TextField
            fullWidth
            label="Toy Description"
            value={description}
            name="description"
            onChange={this.handleChange}
          />
          <TextField
            fullWidth
            label="Price"
            value={price}
            name="price"
            onChange={this.handleChange}
          />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  const { toys } = state.toyModule;
  return { toys };
};

const mapDispatchToProps = {
  loadToys,
  removeToy,
  showUserMsg,
};

export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit);
