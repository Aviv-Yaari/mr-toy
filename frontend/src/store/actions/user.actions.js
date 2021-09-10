import { userService } from '../../services/user.service';

export const loadUser = () => {
  return async dispatch => {
    const user = await userService.getUser();
    dispatch({ type: 'UPDATE_USER', user });
  };
};

export const updateUser = (user, fullName, prefs) => {
  return dispatch => {
    dispatch({ type: 'UPDATE_USER', user: { ...user, fullName, prefs } });
  };
};
