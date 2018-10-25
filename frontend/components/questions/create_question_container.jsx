import { connect } from 'react-redux';
import { createQuestion } from '../../actions/questions_actions';
import { clearErrors } from '../../actions/session_actions';
import QuestionForm from './question_form';

const msp = (state) => {
  return {
    user_id: state.session.id,
    question: {
      user_id: state.session.id,
      title: '',
      body: '',
      tags: ''
    }, 
    formType: 'Post Your Question',
    header: 'Ask Question',
    errors: state.errors.session,
  }
}


const mdp = (dispatch) => {
  return {
    action: question => dispatch(createQuestion(question)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(msp, mdp)(QuestionForm);