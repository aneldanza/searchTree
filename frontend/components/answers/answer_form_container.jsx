import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    answer: {
      user_id: state.session.id,
      question_id: ownProps.match.params.questionId,
      body: ''
    },
    
  }
}

const mdp = (dispatch) => {
  return {
    action: answer => dispatch(createAnswer(answer))
  }
}

export default withRouter(connect(msp, mdp)(AnswerForm));