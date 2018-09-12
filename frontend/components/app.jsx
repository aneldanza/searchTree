import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute} from '../util/route_util';
import SideBar from './side_bar';

export const App = () => {
  return(
    <div>
      <header>
        <GreetingContainer />
      </header>
      <div className='main-content'>
        <aside>
          <SideBar />
        </aside>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
      </div>
    </div>
  );
};
