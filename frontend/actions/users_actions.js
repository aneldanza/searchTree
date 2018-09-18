import * as APIUsers from '../util/users_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveAllUsers = () => {
  return dispatch => {
    return APIUsers.fetchAllUsers() 
    .then( users => {
      return dispatch({type: RECEIVE_ALL_USERS, users: users});
    });
  };
};

export const receiveUser = (id) => {
  return dispatch => {
    return APIUsers.fetchUser(id) 
    .then( user => {
      return dispatch({type: RECEIVE_USER, user: user});
    });
  };
};

