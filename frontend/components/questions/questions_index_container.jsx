import { connect } from 'react-redux';
import { receiveAllQuestions, requestQuestion } from '../../actions/questions_actions';
import { receiveAllUsers } from '../../actions/users_actions';
import QuestionIndex from './question_index';

const msp = (state) => {

  return {
    questions: Object.values(state.entities.questions),
    users: state.entities.users
  };
};

const mdp = (dispatch) => {
  return {
    receiveAllQuestions: () => dispatch(receiveAllQuestions()),
    receiveAllUsers: () => dispatch(receiveAllUsers()),
    requestQuestion: (id) => dispatch(requestQuestion(id))
  };
};

export default connect(msp, mdp)(QuestionIndex);