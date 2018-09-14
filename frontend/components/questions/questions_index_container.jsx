import { connect } from 'react-redux';
import { receiveAllQuestions } from '../../actions/questions_actions';
import QuestionIndex from './question_index';

const msp = (state) => {
  return {
    questions: Object.values(state.entities.questions),
    users: Object.values(state.entities.users)
  };
};

const mdp = (dispatch) => {
  return {
    receiveAllQuestions: () => dispatch(receiveAllQuestions())
  };
};

export default connect(msp, mdp)(QuestionIndex);