import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';

window.login = APIUtil.login;
window.signup = APIUtil.signup;
window.logout = APIUtil.logout;


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Code</h1>, root);
});
