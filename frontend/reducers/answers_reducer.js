import {RECEIVE_ANSWER, RECEIVE_ALL_ANSWERS} from '../actions/answer_actions';
import merge from 'lodash/merge';
import { RECEIVE_QUESTION } from '../actions/questions_actions';


export const answersReducer = (state= {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTION:
      return merge({}, state, action.answers)
    case RECEIVE_ANSWER: 
      return merge({},state, {[action.answer.id]: action.answer});
    case RECEIVE_ALL_ANSWERS:
      return merge({}, action.answers);
    default: 
      return state;
  }
}