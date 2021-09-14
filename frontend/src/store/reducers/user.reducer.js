import _ from 'lodash';

const initialState = {
  user: null,
};

export function userReducer(state = initialState, action) {
  const stateCopy = _.cloneDeep(state);
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'UPDATE_USER':
      stateCopy.user = action.user;
      break;
    default:
      break;
  }
  return stateCopy;
}
