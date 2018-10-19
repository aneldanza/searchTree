
import { RECEIVE_COMMENTS_ERRORS, CLEAR_COMMENTS_ERRORS } from '../actions/comments_actions';

const CommentsErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS_ERRORS:
      return action.errors;
    case CLEAR_COMMENTS_ERRORS:
      return [];
    default:
      return state;
  }
};

export default CommentsErrorsReducer;
