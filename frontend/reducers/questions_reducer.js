import {RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION, DELETE_QUESTION} from '../actions/questions_actions';
import merge from 'lodash/merge';

export const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION: 
      return merge({}, state, { [action.question.id]: action.question });
    case DELETE_QUESTION:
      const newState = merge({}, state);
      delete newState[action.questionID];
      return newState;
    default:
      return state;
  }
};