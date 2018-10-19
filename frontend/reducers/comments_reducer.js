import { RECEIVE_ANSWER } from '../actions/answer_actions';
import merge from 'lodash/merge';
import { RECEIVE_QUESTION } from '../actions/questions_actions';


export const commentsReducer = (state= {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTION:
      return merge({},state, {[action.question.id]: action.comments})
    case RECEIVE_ANSWER: 
      return merge({},state, {[action.answer.id]: action.comments});
    default: 
      return state;
  }
}