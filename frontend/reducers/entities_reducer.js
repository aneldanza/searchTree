import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import { questionsReducer } from './questions_reducer';

export default combineReducers({
  users: UsersReducer,
  questions: questionsReducer
});
