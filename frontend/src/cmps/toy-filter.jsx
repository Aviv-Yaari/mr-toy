import React, { Component } from 'react';
import { Button, InputBase, MenuItem, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Select from 'react-select';

import '../css/toy-filter.css';
import { toyService } from '../services/toy.service';

export class ToyFilter extends Component {
  async componentDidMount() {
    this.allLabels = (await toyService.getLabels()).map(label => ({ label, value: label }));
  }

  handleChange = ev => {
    const { name, value } = ev.target;
    this.props.onSetFilter({ [name]: value });
  };

  handleLabelChange = ev => {
    const labels = ev.map(label => label.value);
    this.props.onSetFilter({ labels });
  };

  render() {
    const { name, inStock } = this.props.filter;
    const { onClearFilters } = this.props;
    return (
      <section className="toy-filter flex">
        <div className="search flex align-center">
          <SearchIcon />
          <InputBase
            onChange={this.handleChange}
            placeholder="Search…"
            name="name"
            value={name}
            fullWidth
          />
        </div>
        <div className="in-stock">
          <TextField
            variant="outlined"
            size="small"
            select
            name="inStock"
            value={inStock}
            onChange={this.handleChange}>
            <MenuItem value={true}>In stock</MenuItem>
            <MenuItem value={false}>Out of stock</MenuItem>
            <MenuItem value={'all'}>Stock</MenuItem>
          </TextField>
        </div>
        <div className="labels">
          <Select options={this.allLabels} isMulti onChange={this.handleLabelChange} />
        </div>
        <Button onClick={onClearFilters}>Clear</Button>
      </section>
    );
  }
}
