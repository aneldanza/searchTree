import HomePage from './home_page_form';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};


export default connect(msp, null)(HomePage);
