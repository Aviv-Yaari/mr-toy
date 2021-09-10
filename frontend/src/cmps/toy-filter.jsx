import React, { Component } from 'react';
import { Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export class ToyFilter extends Component {
  state = { filter: { text: '', status: 'all' } };

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState(
      prevState => ({ filter: { ...prevState.filter, [name]: value } }),
      () => this.props.onSetFilter(this.state.filter)
    );
  };

  render() {
    const { text, status } = this.state.filter;
    return (
      <section className="toy-filter flex">
        <div className="search flex">
          <SearchIcon />
          <InputBase
            onChange={this.handleChange}
            placeholder="Search…"
            name="text"
            value={text}
            fullWidth
          />
        </div>
      </section>
    );
  }
}
