import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import SideBar from './side_bar';
import { Route } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';

export const App = () => {
  return(
    <div>
      <header>
        <GreetingContainer />
      </header>
      <Route exact path='/' component={HomePageContainer} />
      <div className='main-content'>
        <aside>
          <SideBar />
        </aside>
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
      </div>
    </div>
  );
};
