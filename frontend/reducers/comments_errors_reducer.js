import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const CommentsErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default CommentsErrorsReducer;
