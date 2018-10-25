import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { createAnswer } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    answer: {
      user_id: state.session.id,
      question_id: ownProps.match.params.questionId,
      body: ''
    },
    formType: 'Post Your Answer',
    errors: state.errors.session,
  }
}

const mdp = (dispatch) => {
  return {
    action: answer => dispatch(createAnswer(answer)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(msp, mdp)(AnswerForm));