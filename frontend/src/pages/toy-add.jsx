import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Button, Container, MenuItem, TextField, Typography } from '@material-ui/core';

import { addToy } from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import '../css/toy-add.css';
import { toyService } from '../services/toy.service';

class _ToyAdd extends Component {
  state = {
    form: {
      name: 'The cool doll',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere iusto sapiente ad, est animi quidem ex numquam? Quis quibusdam ratione qui provident sequi quasi voluptate, velit commodi illo minima?',
      price: 156,
      inStock: true,
      labels: [],
    },
  };

  async componentDidMount() {
    const allLabels = (await toyService.getLabels()).map(label => ({ label, value: label }));
    this.setState({ allLabels });
  }

  handleChange = ev => {
    let { name, value } = ev.target;
    if (name === 'price') value = +value;
    this.setState(prevState => ({ form: { ...prevState.form, [name]: value } }));
  };

  handleLabelChange = ev => {
    const labels = ev.map(label => label.value);
    this.setState(prevState => ({ form: { ...prevState.form, labels } }));
  };

  onAddToy = async ev => {
    ev.preventDefault();
    const toy = { ...this.state.form };
    this.props.showUserMsg('Adding..');
    await this.props.addToy(toy);
    this.props.showUserMsg('Toy Added');
    setTimeout(() => this.props.history.push('/toy'), 500); // simulate delay
  };

  render() {
    const { allLabels } = this.state;
    const { name, description, price, inStock } = this.state.form;
    return (
      <>
        <Container className="toy-add" maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Add Toy
          </Typography>
          <form onSubmit={this.onAddToy}>
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
              {allLabels && (
                <Select
                  placeholder="Labels"
                  options={allLabels}
                  isMulti
                  onChange={this.handleLabelChange}
                />
              )}
            </div>
            <Button type="submit">Add Toy</Button>
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
  addToy,
  showUserMsg,
};

export const ToyAdd = connect(mapStateToProps, mapDispatchToProps)(_ToyAdd);
