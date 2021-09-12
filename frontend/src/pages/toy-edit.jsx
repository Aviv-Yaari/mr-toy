import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, CircularProgress, Container, MenuItem, TextField } from '@material-ui/core';
import Select from 'react-select';

import { getToyById, updateToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import '../css/toy-edit.css';
import { toyService } from '../services/toy.service';

class _ToyEdit extends Component {
  state = {
    form: {
      name: '',
      description: '',
      price: '',
      inStock: true,
      labels: [],
    },
  };

  componentDidMount() {
    this.loadToy();
    this.loadLabels();
  }

  loadToy = async () => {
    const { id } = this.props.match.params;
    await this.props.getToyById(id);
    const { name, description, price, inStock, labels } = this.props.toys[0];
    this.setState({ form: { name, description, price, inStock, labels } });
  };

  loadLabels = async () => {
    const allLabels = (await toyService.getLabels()).map(label => ({ label, value: label }));
    this.setState({ allLabels });
  };

  handleChange = ev => {
    let { name, value } = ev.target;
    if (name === 'price') value = +value;
    this.setState(prevState => ({ form: { ...prevState.form, [name]: value } }));
  };

  handleLabelChange = ev => {
    const labels = ev.map(label => label.value);
    this.setState(prevState => ({ form: { ...prevState.form, labels } }));
  };

  onSaveChanges = ev => {
    ev.preventDefault();
    let toy = this.props.toys[0];
    toy = { ...toy, ...this.state.form };
    this.props.updateToy(toy);
    this.props.showUserMsg('Toy details updated');
    setTimeout(() => this.props.history.push(`/toy/${toy._id}`), 500); // simulate delay
  };

  render() {
    if (!this.props.toys || !this.props.toys.length) return <CircularProgress />;
    const { allLabels } = this.state;
    const { name, description, price, inStock, labels } = this.state.form;
    return (
      <>
        <Container className="toy-edit" maxWidth="md">
          <img
            src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            alt=""
            width="100%"
          />
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
              type="number"
              value={price}
              name="price"
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              select
              variant="outlined"
              label="Availability"
              value={inStock}
              name="inStock"
              onChange={this.handleChange}>
              <MenuItem value={true}>In stock</MenuItem>
              <MenuItem value={false}>Out of stock</MenuItem>
            </TextField>
            <div className="labels">
              {allLabels && labels.length && (
                <Select
                  placeholder="Labels"
                  options={allLabels}
                  isMulti
                  onChange={this.handleLabelChange}
                  defaultValue={labels.map(label => ({ label, value: label }))}
                />
              )}
            </div>
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
  getToyById,
  updateToy,
  showUserMsg,
};

export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit);
