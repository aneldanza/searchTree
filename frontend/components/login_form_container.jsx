import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors, demoLogin } from '../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log In',
    message: 'code is a great resource for all your tech related questions'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(demoLogin()),
  };
};

export default connect(msp, mdp)(SessionForm);
