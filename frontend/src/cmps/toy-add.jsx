import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

export class ToyAdd extends Component {
  state = { toy: { name: '' } };

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState(prevState => ({ toy: { ...prevState.toy, [name]: value } }));
  };

  onAddToy = async ev => {
    ev.preventDefault();
    await this.props.onAddToy(this.state.toy);
    this.setState({ toy: { name: '' } });
  };

  render() {
    const { name } = this.state.toy;
    return (
      <form className="toy-add" onSubmit={this.onAddToy}>
        <TextField
          variant="outlined"
          name="name"
          onChange={this.handleChange}
          value={name}
          placeholder="Enter toy name"
        />
        <Button type="submit" className="add" variant="outlined">
          Add
        </Button>
      </form>
    );
  }
}
