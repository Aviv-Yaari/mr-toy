export const showUserMsg = (msg, isError) => {
  return dispatch => {
    dispatch({ type: 'SHOW_USER_MSG', msg, isError });
  };
};

export const hideUserMsg = () => {
  return dispatch => {
    dispatch({ type: 'HIDE_USER_MSG' });
  };
};
