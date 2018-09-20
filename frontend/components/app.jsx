import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SideBar from './side_bar';
import { Route, Switch } from 'react-router-dom';
import HomePageContainer from './home_page/home_page_container';
import QuestionsIndexContainer from './questions/questions_index_container';
import CreateQuestionContainer from './questions/create_question_container';
import QuestionShow from './questions/question_show';
import EditQuestion from './questions/edit_question_container';
import EditAnswer from './answers/edit_answer_container';
import Search from './search/search.jsx';

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
          <ProtectedRoute exact path='/questions/ask' component={CreateQuestionContainer} />
          <ProtectedRoute exact path={`/questions/:questionId/edit`} component={EditQuestion} />
          <ProtectedRoute exact path={`/answers/:answerId/edit`} component={EditAnswer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <Route exact path='/' component={QuestionsIndexContainer} />
          <Route exact path={`/questions/search`} component={Search} />
          <Route path={`/questions/:questionId`} component={QuestionShow} />
          <Route path='/questions' component={QuestionsIndexContainer} />
        </Switch>
        </main>
      </div>
    </div>
  );
};
