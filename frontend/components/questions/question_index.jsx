import React from 'react';
import {QuestionItem} from './question_item'

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.receiveAllQuestions();
  }

  render() {
    const questions = this.props.questions.map( question => {
      return (
        <QuestionItem question={question} users={this.props.users} />
      );
    });
    return(
      <section>
        <div className='questions-index-header'>
          <h1>All Questions</h1>
          <button id='cool-button'>Ask Question</button>
        </div>
        <nav className='qustions-nav'>
          {this.props.questions.length} questions
        </nav>
        <section className='questions'>
          {questions}
        </section>
      </section>
    );
  }
}

export default QuestionIndex;