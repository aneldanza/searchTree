import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log In'
  };
};

const mdp = (dispatch) => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
