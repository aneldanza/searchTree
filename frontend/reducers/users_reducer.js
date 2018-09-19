import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/users_actions';

import merge from 'lodash/merge';
import { RECEIVE_QUESTION } from '../actions/questions_actions';

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return merge({}, state, action.users)
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default UsersReducer;
