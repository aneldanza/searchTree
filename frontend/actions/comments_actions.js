import * as CommentAPIUtil from '../util/comments_api_util';
import { receiveQuestion } from '../actions/questions_actions'
import { receiveAnswer } from '../actions/answer_actions';
export const RECEIVE_COMMENTS_ERRORS = 'RECEIVE_COMMENTS_ERRORS';
export const CLEAR_COMMENTS_ERRORS = 'CLEAR_COMMENTS_ERRORS';

export const clearCommentsErrors = () => {
  return {
    type: CLEAR_COMMENTS_ERRORS,
  };
};

export const receiveCommentsErrors = (errors) => {
  return {
    type: RECEIVE_COMMENTS_ERRORS,
    errors: errors
  };
};

export const createComment = (comment) => {
  return dispatch => {
    CommentAPIUtil.createComment(comment) 
    .then( (post) => {
      if (comment.post_type === 'Question') {
        return dispatch(receiveQuestion(post));
      } else {
        return dispatch(receiveAnswer(post));
      }
    }, errors => {
      dispatch(receiveCommentsErrors(errors.responseJSON));
    })
  }
}