import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import * as APIQuestionsUtil from './util/quesions_api_util';
import { receiveAllQuestions, receiveQuestion, createQuestion, updateQuestion, deleteQuestion } from './actions/questions_actions';

window.fetchAllQuestions = APIQuestionsUtil.fetchAllQuestions;
window.fetchQuestion = APIQuestionsUtil.fetchQuestion;
window.receiveAllQuestions = receiveAllQuestions;
window.receiveQuestion = receiveQuestion;
window.createQuestion = createQuestion;
window.updateQuestion = updateQuestion;
window.deleteQuestion = deleteQuestion;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: { id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
