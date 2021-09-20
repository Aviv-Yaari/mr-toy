const initialState = {
  userMsg: { isOpen: false, isError: false, msg: '' },
};

export function generalReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_USER_MSG':
      let { isError, msg } = action;
      msg = isError ? msg.response.data.err || 'Could not perform action' : msg;
      return { ...state, userMsg: { isOpen: true, isError, msg } };
    case 'HIDE_USER_MSG':
      return initialState;
    default:
      return state;
  }
}
