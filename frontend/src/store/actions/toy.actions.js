import { toyService } from '../../services/toy.service';
import { initialState } from '../reducers/toy.reducer';

export const loadToys = (filter = initialState.filter) => {
  return async dispatch => {
    const toys = await toyService.getToys(filter);
    dispatch({ type: 'SET_TOYS', toys });
  };
};

export const addToy = inputToy => {
  return async dispatch => {
    const toy = await toyService.create(inputToy);
    dispatch({ type: 'ADD_TOY', toy });
  };
};

export const removeToy = toy => {
  return async dispatch => {
    await toyService.remove(toy._id);
    dispatch({ type: 'REMOVE_TOY', id: toy._id });
  };
};

export const updateToy = (toy, data) => {
  return async dispatch => {
    await toyService.update(toy._id, data);
    dispatch({ type: 'UPDATE_TOY', id: toy._id, data });
  };
};

export const setFilter = filter => {
  return dispatch => {
    dispatch({ type: 'SET_FILTER', filter });
  };
};
