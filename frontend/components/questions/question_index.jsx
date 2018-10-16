import React from 'react';
import {QuestionItem} from './question_item';
import { Link } from 'react-router-dom';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveAllUsers().then(this.props.receiveAllQuestions);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.questions.length !== this.props.questions.length) {
      return true;
    }
    return false;
  }

  render() {
  
    if (!(Object.values(this.props.users).length > 0 && this.props.questions.length > 0)) {
      return <div></div>;
    }
 
    const questions = this.props.questions.map( (question, idx) => {
      return (
        <QuestionItem question={question}
        users={this.props.users}
        key={idx}
        />
      );
    });

    let count = this.props.questions.length;
    let numberOfQuestions;
    if (count === 1) {
      numberOfQuestions = `${count} question`;
    } else {
      numberOfQuestions = `${count} questions`;
    }
    
    return(
      <section className='container'> 
        <div className='questions-index-header'>
          <h1>All Questions</h1>
          <Link to={`/questions/ask`} id='cool-button'>Ask Question</Link>
        </div>
        <nav className='questions-nav'>
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