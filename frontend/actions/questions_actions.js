import * as APIQuestionsUtil from '../util/quesions_api_util'; 
import { receiveErrors } from '../actions/session_actions';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'; 
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'; 
export const DELETE_QUESTION = 'DELETE_QUESTION'; 
export const RECEIVE_SEARCH_REQUEST = 'RECEIVE_SEARCH_REQUEST';

export const receiveQuestion = ({ question, answers, users, votes, comments, }) => {
  return {
    type: RECEIVE_QUESTION,
    question,
    users: users || {},
    answers: answers || {},
    votes: votes || {},
    comments: comments || {},
  }
};

export const receiveAllQuestions = () => {
  return dispatch => {
    return APIQuestionsUtil.fetchAllQuestions()
    .then( questions => {
      return dispatch({type: RECEIVE_ALL_QUESTIONS, questions: questions});
    });
  };
};

export const requestQuestion = (id) => {
  return dispatch => {
    return APIQuestionsUtil.fetchQuestion(id)
    .then( payload => {
      return dispatch(receiveQuestion(payload));
    });
  };
};

export const updateQuestion = (question) => {
  return dispatch => {
    return APIQuestionsUtil.updateQuestion(question)
    .then( payload => {
      return dispatch(receiveQuestion(payload));
    });
  };
};

export const createQuestion = (question) => {
  return dispatch => {
    return APIQuestionsUtil.createQuestion(question)
    .then( payload => {
    
      return dispatch(receiveQuestion(payload));
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
  };
};
export const deleteQuestion = (id) => {
  return dispatch => {
    return APIQuestionsUtil.deleteQuestion(id)
    .then( () => {
      return dispatch({type: DELETE_QUESTION, questionID: id});
    });
  };
};


export const startSearch = (query) => {
  return dispatch => {
    return APIQuestionsUtil.search(query) 
    .then(query => {
      return dispatch({type: RECEIVE_SEARCH_REQUEST, query: query})
    });
  };
};