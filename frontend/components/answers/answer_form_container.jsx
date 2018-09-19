import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer } from '../../actions/answer_actions';

const msp = (state) => {
  return {
    user_id: state.session.id,
    question_id: Object.keys(state.entities.questions)[0]
  }
}

const mdp = (dispatch) => {
  return {
    action: answer => dispatch(createAnswer(answer))
  }
}

export default connect(msp, mdp)(AnswerForm);