import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToyFilter } from '../cmps/toy-filter';
import { ToyList } from '../cmps/toy-list';
import {
  loadToys,
  addToy,
  removeToy,
  updateToy,
  setFilter,
  clearFilter,
  sortField,
} from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';
import { ToySort } from '../cmps/toy-sort';

class _ToyApp extends Component {
  async componentDidMount() {
    this.props.loadToys();
  }

  onRemoveToy = toy => {
    this.props.removeToy(toy);
    this.props.showUserMsg('Toy removed');
  };

  onToyClick = toy => {
    const { _id } = toy;
    this.props.history.push('/toy/' + _id);
  };

  onToyEdit = toy => {
    const { _id } = toy;
    this.props.history.push(`/toy/${_id}/edit`);
  };

  onSetFilter = async filter => {
    await this.props.setFilter(filter);
    this.props.loadToys(this.props.filter);
  };

  onClearFilters = () => {
    this.props.clearFilter();
    this.props.loadToys();
  };

  onSortField = async field => {
    await this.props.sortField(field);
    this.props.loadToys(undefined, this.props.sort);
  };

  render() {
    const { toys, filter, sort } = this.props;
    return (
      <main className="toy-app">
        <ToyFilter
          filter={filter}
          onSetFilter={this.onSetFilter}
          onClearFilters={this.onClearFilters}
        />
        <ToySort onSortField={this.onSortField} sort={sort} />
        <ToyList
          toys={toys}
          onRemoveToy={this.onRemoveToy}
          onToyClick={this.onToyClick}
          onToyEdit={this.onToyEdit}
        />
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { toys, filter, sort } = state.toyModule;
  return { toys, filter, sort };
};

const mapDispatchToProps = {
  loadToys,
  addToy,
  removeToy,
  updateToy,
  setFilter,
  clearFilter,
  showUserMsg,
  sortField,
};

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp);
