import * as APIAnswerUtil from '../util/answers_api_util';
import { receiveErrors } from '../actions/session_actions';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export const receiveAnswer = ({ answer, author, votes, comments }) => ({
  type: RECEIVE_ANSWER,
  answer,
  author,
  votes: votes || {},
  comments: comments || {}
});

export const createAnswer = (answer) => {
  return dispatch => {
    return APIAnswerUtil.createAnswer(answer)
    .then(answer => {
      return dispatch(receiveAnswer(answer));
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
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

export const deleteAnswer = (id) => {
  return dispatch => {
    APIAnswerUtil.deleteAnswer(id)
    .then( () => {
      return dispatch({type: REMOVE_ANSWER, answerId: id});
    });
  };
};