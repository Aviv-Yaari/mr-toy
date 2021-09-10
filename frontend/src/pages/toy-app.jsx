import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToyAdd } from '../cmps/toy-add';
import { ToyFilter } from '../cmps/toy-filter';
import { ToyList } from '../cmps/toy-list';
import {
  loadToys,
  addToy,
  removeToy,
  updateToy,
  setFilter,
  clearFilter,
} from '../store/actions/toy.actions';
import { showUserMsg } from '../store/actions/general.actions';

class _ToyApp extends Component {
  async componentDidMount() {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.props.loadToys();
  }

  onAddToy = toy => {
    this.props.addToy(toy);
    this.props.showUserMsg('Toy added');
  };

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

  render() {
    const { toys, filter } = this.props;
    return (
      <main className="toy-app">
        <ToyAdd onAddToy={this.onAddToy} />
        <ToyFilter
          filter={filter}
          onSetFilter={this.onSetFilter}
          onClearFilters={this.onClearFilters}
        />
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
  const { toys, filter } = state.toyModule;
  return { toys, filter };
};

const mapDispatchToProps = {
  loadToys,
  addToy,
  removeToy,
  updateToy,
  setFilter,
  clearFilter,
  showUserMsg,
};

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp);
