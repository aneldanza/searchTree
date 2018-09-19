import React from 'react';
import { Link } from 'react-router-dom';

class ListOfAnswers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const answers = [];

      this.props.question.answerIds.map(id => {
        answers.push(this.props.allAnswers[id]);
      });
 

    let count = answers.length;
    let numberOfAnswers;
    if (count.toString()[count.toString().length - 1] == 1) {
      numberOfAnswers = `${count} answer`;
    } else {
      numberOfAnswers = `${count} answers`;
    }

    let list = null;
    if (answers.length > 0) {
    list = answers.map((answer, idx) => {
      return (
        
          <li key={idx}>
            <div className='show-container'>
              <div className='post-layout'>
                <div className='post-layout-left'>
                  <i style={{lineHeight: '0.5'}}
                  className="fas fa-caret-up fa-3x"></i>
                  <div className='stats-number'>1</div>
                  <i style={{lineHeight: '0.5'}}
                  className="fas fa-caret-down fa-3x"></i>
                </div> 

                <div className='post-layout-main'>
                  <article className='question-body'>
                    {answer.body}
                  </article>
                  <div className='question-details'>
                    <Link to={`/questions/${this.props.question.id}/edit`}>edit</Link>
                  </div>
                </div> 

                <div className='post-layout-comment'>
                  add comment
                </div> 
              </div>
            </div>
          </li>
        );
      });
    }
        

    return (
      <div>
        <div className='questions-nav'>{numberOfAnswers}</div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default ListOfAnswers;