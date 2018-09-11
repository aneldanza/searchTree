import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errros;
    case RECEIVE_CURRENT_USER:
      return state;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
