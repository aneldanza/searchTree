import React from 'react';
import SplashSignupContainer from '../splash_signup_container';

class HomePage extends React.Component {
  render() {
    if (!this.props.currentUser) {
      return (
        <SplashSignupContainer />
      );
    } else {
      return null;
    }
  }
}

export default HomePage;
