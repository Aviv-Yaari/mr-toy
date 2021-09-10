import _ from 'lodash';

export const initialState = {
  toys: null,
  filter: { name: '', inStock: 'all', labels: [] },
};

export function toyReducer(state = initialState, action) {
  const stateCopy = _.cloneDeep(state);
  let idx;
  switch (action.type) {
    case 'SET_TOYS':
      stateCopy.toys = action.toys;
      break;
    case 'ADD_TOY':
      stateCopy.toys.push(action.toy);
      break;
    case 'REMOVE_TOY':
      idx = stateCopy.toys.findIndex(toy => toy._id === action.id);
      if (idx !== -1) stateCopy.toys.splice(idx, 1);
      break;
    case 'UPDATE_TOY':
      idx = stateCopy.toys.findIndex(toy => toy._id === action.id);
      if (idx !== -1) stateCopy.toys[idx] = { ...stateCopy.toys[idx], ...action.data };
      break;
    case 'SET_FILTER':
      return { ...state, filter: { ...state.filter, ...action.filter } };
    default:
      break;
  }
  return stateCopy;
}
