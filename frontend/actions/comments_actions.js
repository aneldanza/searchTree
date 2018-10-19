import * as CommentAPIUtil from '../util/comments_api_util';
import { receiveQuestion } from '../actions/questions_actions'
import { receiveAnswer } from '../actions/answer_actions';


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
      dispatch(receiveErrors(errors.responseJSON));
    })
  }
}