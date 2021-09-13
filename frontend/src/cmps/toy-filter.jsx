import React, { Component } from 'react';
import { Button, InputBase, MenuItem, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Select from 'react-select';
import FilterListIcon from '@material-ui/icons/FilterList';

import { ToySort } from '../cmps/toy-sort';
import { toyService } from '../services/toy.service';

export class ToyFilter extends Component {
  state = { isExpanded: false };

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

  onToggleFilter = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { name, inStock } = this.props.filter;
    const { onSortField, sort } = this.props;
    const { isExpanded } = this.state;
    return (
      <>
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
        <section className="toy-filter">
          <div className="btns flex flex space-between">
            <Button startIcon={<FilterListIcon />} onClick={this.onToggleFilter}>
              Filter
            </Button>
            <ToySort onSortField={onSortField} sort={sort} />
          </div>
          <section className="filters flex wrap grow">
            {isExpanded && (
              <>
                <div className="in-stock">
                  <TextField
                    variant="outlined"
                    fullWidth
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
                  <Select
                    placeholder="Labels"
                    options={this.allLabels}
                    isMulti
                    onChange={this.handleLabelChange}
                  />
                </div>
              </>
            )}
          </section>
        </section>
      </>
    );
  }
}
