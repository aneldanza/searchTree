import React from 'react';
import { Link } from 'react-router-dom';

export const Greeting = (props) => {
  let buttons_section;
    if (props.currentUser) {
      buttons_section = (
        <div id='buttons-section'>
          <p>Hello, {props.currentUser.username}!</p>
          <button id='cool-button' onClick={() => props.logout()}>Log Out</button>
        </div>
      );
    } else {
      buttons_section = (
        <div id='buttons-section'>
          <Link to={`/login`} id='login'>Log In</Link>
          <Link to={`/signup`} id='cool-button'>Sign Up</Link>
          <button id='cool-button' onClick={() => props.demoLogin()}>Demo LogIn</button>
        </div>
      );
    }

  return (
    <nav className='header-right'>
      <div className='inner-header'>
        <nav className='left-nav'>
          <Link to={'/'}><span id="logo">search<strong>Tree</strong></span></Link>

          <form className='search-form'>
            <input id='search-bar' type='text'/>
            <button className='search-button'><i class="fas fa-search"></i></button>
          </form>
        </nav>
        {buttons_section}
      </div>
    </nav>
  );
};
