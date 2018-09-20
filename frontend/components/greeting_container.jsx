
import Greeting from './greeting';
import { connect } from 'react-redux';
import { logout, demoLogin } from '../actions/session_actions';
import { startSearch } from '../actions/questions_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(demoLogin()), 
    search: (query) => dispatch(startSearch(query))
  };
};

export default connect(msp, mdp)(Greeting);
