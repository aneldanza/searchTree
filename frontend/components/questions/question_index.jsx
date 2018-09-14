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

    let count = this.props.questions.length;
    let numberOfQuestions;
    if (count.toString()[count.toString().length - 1] == 1) {
      numberOfQuestions = `${count} question`;
    } else {
      numberOfQuestions = `${count} questions`;
    }
    
    return(
      <section>
        <div className='questions-index-header'>
          <h1>All Questions</h1>
          <button id='cool-button'>Ask Question</button>
        </div>
        <nav className='qustions-nav'>
          {numberOfQuestions}
        </nav>
        <section className='questions'>
          {questions}
        </section>
      </section>
    );
  }
}

export default QuestionIndex;