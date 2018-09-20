import * as APIAnswerUtil from '../util/answers_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';

export const receiveAnswer = ({ answer, author }) => ({
  type: RECEIVE_ANSWER,
  answer,
  author,
});

export const createAnswer = (answer) => {
  return dispatch => {
    return APIAnswerUtil.createAnswer(answer)
    .then(answer => {
      return dispatch(receiveAnswer(answer));
    });
  }
}

export const updateAnswer = (answer) => {
  return dispatch => {
    return APIAnswerUtil.updateAnswer(answer)
    .then(answer => {
      return dispatch(receiveAnswer(answer));
    });
  }
}

export const receiveAllAnswers = () => {
  return dispatch => {
    APIAnswerUtil.fetchAllAnswers()
    .then( answers => {
      return dispatch({type: RECEIVE_ALL_ANSWERS, answers: answers});
    });
  };
};

export const requestAnswer = (id) => {
  return dispatch => {
    APIAnswerUtil.fetchAnswer(id)
    .then( answer => {
      return dispatch(receiveAnswer(answer));
    });
  };
};