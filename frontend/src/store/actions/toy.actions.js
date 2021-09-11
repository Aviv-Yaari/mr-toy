import { toyService } from '../../services/toy.service';
import { initialState } from '../reducers/toy.reducer';

export const loadToys = (filter = initialState.filter, sort) => {
  return async dispatch => {
    const toys = await toyService.getToys(filter, sort);
    dispatch({ type: 'SET_TOYS', toys });
  };
};

export const getToyById = id => {
  return async dispatch => {
    const toy = await toyService.getToyById(id);
    dispatch({ type: 'SET_TOYS', toys: [toy] });
  };
};

export const addToy = toy => {
  return async dispatch => {
    await toyService.create(toy);
  };
};

export const removeToy = toy => {
  return async dispatch => {
    await toyService.remove(toy._id);
    dispatch({ type: 'REMOVE_TOY', id: toy._id });
  };
};

export const updateToy = toy => {
  return async dispatch => {
    await toyService.update(toy);
    dispatch({ type: 'UPDATE_TOY', toy });
  };
};

export const setFilter = filter => {
  return async dispatch => {
    dispatch({ type: 'SET_FILTER', filter });
  };
};

export const clearFilter = () => {
  return dispatch => {
    dispatch({ type: 'SET_FILTER', filter: initialState.filter });
  };
};

export const sortField = field => {
  return async dispatch => {
    dispatch({ type: 'SORT_FIELD', field });
  };
};
