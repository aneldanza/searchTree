import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import { configureStore } from './store/store';
import Root from './components/root';
window.login = APIUtil.login;
window.signup = APIUtil.signup;
window.logout = APIUtil.logout;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
