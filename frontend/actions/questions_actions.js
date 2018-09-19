import * as APIQuestionsUtil from '../util/quesions_api_util'; 

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'; 
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'; 
export const DELETE_QUESTION = 'DELETE_QUESTION'; 

export const requestQuestion = ({ question, answers }) => ({
  type: RECEIVE_QUESTION,
  question,
  answers,
});

export const receiveAllQuestions = () => {
  return dispatch => {
    return APIQuestionsUtil.fetchAllQuestions()
    .then( questions => {
      return dispatch({type: RECEIVE_ALL_QUESTIONS, questions: questions});
    });
  };
};

export const receiveQuestion = (id) => {
  return dispatch => {
    return APIQuestionsUtil.fetchQuestion(id)
    .then( payload => {
      return dispatch(requestQuestion(payload));
    });
  };
};

export const updateQuestion = (question) => {
  return dispatch => {
    return APIQuestionsUtil.updateQuestion(question)
    .then( question => {
      return dispatch({type: RECEIVE_QUESTION, question: question});
    });
  };
};

export const createQuestion = (question) => {
  return dispatch => {
    return APIQuestionsUtil.createQuestion(question)
    .then( question => {
      return dispatch({type: RECEIVE_QUESTION, question: question});
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