import * as VoteAPIUtil from '../util/votes_api_util';
import { receiveQuestion } from '../actions/questions_actions'
import { receiveAnswer } from '../actions/answer_actions';
import { receiveErrors } from '../actions/session_actions';

export const createVote = (vote) => {
  return dispatch => {
    VoteAPIUtil.createVote(vote) 
    .then( (post) => {
      if (vote.post_type === 'Question') {
        return dispatch(receiveQuestion(post));
      } else {
        return dispatch(receiveAnswer(post));
      }
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    })
  }
}