import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = (props) => {
    if (props.currentUser) {
  
      return (
        <nav className='header-right'>
          <p>Hello, {props.currentUser.username}!</p>
          <button onClick={() => props.logout()}>Log Out</button>
        </nav>
      );
    } else {
      return (
        <nav className='header-right'>
          <Link to={`/login`} id='login'>Log In</Link>
          <Link to={`/signup`} id='signup'>Sign Up</Link>
        </nav>
      );
    }

};
