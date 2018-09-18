import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import SideBar from './side_bar';
import { Route, Switch } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import QuestionForm from './questions/question_form';
import QuestionShow from './questions/question_show';

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
        <main>
        <Switch>
          <Route exact path='/questions/ask' component={QuestionForm} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <Route exact path='/' component={QuestionsIndexContainer} />
          <Route path={`/api/questions/:questionId`} component={QuestionShow} />
          <Route path='/questions' component={QuestionsIndexContainer} />
        </Switch>
        </main>
      </div>
    </div>
  );
};
