import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => {
  return dispatch => {
    return APIUtil.login(user)
    .then(user => {
      dispatch({type: RECEIVE_CURRENT_USER, user: user});
    });
  };
};

export const logout = () => {
  return dispatch => {
    return APIUtil.logout()
    .then(() => {
      dispatch({type: LOGOUT_CURRENT_USER});
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return APIUtil.signup(user)
    .then((user) => {
      dispatch({type: RECEIVE_CURRENT_USER, user: user});
    });
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};
