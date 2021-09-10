import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, CircularProgress, Container, TextField } from '@material-ui/core';

import { loadToys, updateToy, removeToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import { ToyLabelList } from '../cmps/toy-label-list';
import '../css/toy-edit.css';

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

  onSaveChanges = ev => {
    const toy = this.props.toys[0];
    ev.preventDefault();
    this.props.updateToy(toy, { ...this.state.form });
    this.props.showUserMsg('Toy details updated');
    setTimeout(() => this.props.history.push(`/toy/${toy._id}`), 500); // simulate delay
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
          <form onSubmit={this.onSaveChanges}>
            <TextField
              fullWidth
              variant="outlined"
              label="Toy Name"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Toy Description"
              multiline
              value={description}
              name="description"
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Price"
              value={price}
              name="price"
              onChange={this.handleChange}
            />
            <Button type="submit">Save Changes</Button>
          </form>
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
  updateToy,
  removeToy,
  showUserMsg,
};

export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit);
