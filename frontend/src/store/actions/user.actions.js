import { authService } from '../../services/auth.service';

export const login = (email, password) => {
  return async dispatch => {
    const user = await authService.login(email, password);
    dispatch({ type: 'SET_USER', user });
  };
};

export const logout = () => {
  return async dispatch => {
    await authService.logout();
    dispatch({ type: 'SET_USER', user: null });
  };
};

export const setUser = user => {
  return dispatch => dispatch({ type: 'SET_USER', user });
};

export const loadUserFromStorage = () => {
  return async dispatch => {
    const user = authService.loadFromStorage();
    if (user) dispatch({ type: 'SET_USER', user });
  };
};
