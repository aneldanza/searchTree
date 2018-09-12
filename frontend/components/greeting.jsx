import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = (props) => {

    if (props.currentUser) {
      return (
        <nav>
          <p>Hello, {props.currentUser.username}!</p>
          <button onClick={() => props.logout()}>Log Out</button>
        </nav>
      );
    } else {
      return (
        <nav>
          <Link to={`/login`}>Log In</Link>
          <Link to={`/signup`}>Sign Up</Link>
        </nav>
      );
    }

};
