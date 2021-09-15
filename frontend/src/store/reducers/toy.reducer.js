import _ from 'lodash';

export const initialState = {
  toys: null,
  currToy: null,
  filter: {},
  sort: { field: 'createdAt', type: 1 },
};

export function toyReducer(state = initialState, action) {
  const stateCopy = _.cloneDeep(state);
  let idx;
  switch (action.type) {
    case 'SET_TOY':
      return { ...state, currToy: action.toy };
    case 'SET_TOYS':
      stateCopy.toys = action.toys;
      break;
    case 'REMOVE_TOY':
      idx = stateCopy.toys.findIndex(toy => toy._id === action.id);
      if (idx !== -1) stateCopy.toys.splice(idx, 1);
      break;
    case 'UPDATE_TOY':
      idx = stateCopy.toys.findIndex(toy => toy._id === action.toy._id);
      if (idx !== -1) stateCopy.toys[idx] = action.toy;
      break;
    case 'SET_FILTER':
      const filter = { ...state.filter, ...action.filter };
      if (filter.name === '') delete filter.name;
      if (filter.inStock === 'all') delete filter.inStock;
      if (_.isEmpty(filter.labels)) delete filter.labels;

      return { ...state, filter };
    case 'SORT_FIELD':
      const newSortType = Object.values(state.sort)[0] === 1 ? -1 : 1;
      return { ...state, sort: { [action.field]: newSortType } };
    default:
      break;
  }
  return stateCopy;
}
