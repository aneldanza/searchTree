import {RECEIVE_ANSWER, RECEIVE_ALL_ANSWERS} from '../actions/answer_actions';
import merge from 'lodash/merge';

export const answersReducer = (state= {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANSWER: 
      return merge({},state, {[action.answer.id]: action.answer});
    case RECEIVE_ALL_ANSWERS:
      return merge({}, action.answers);
    default: 
      return state;
  }
}