import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToyAdd } from '../cmps/toy-add';
import { ToyFilter } from '../cmps/toy-filter';
import { ToyList } from '../cmps/toy-list';
import { loadToys, addToy, removeToy, updateToy, setFilter } from '../store/actions/toy.actions';
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

  onSetFilter = filter => {
    this.props.setFilter();
    this.props.loadToys(filter);
  };

  render() {
    const { toys } = this.props;
    return (
      <main className="toy-app">
        <ToyAdd onAddToy={this.onAddToy} />
        <ToyFilter onSetFilter={this.onSetFilter} />
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
  showUserMsg,
};

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp);
