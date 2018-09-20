import React from 'react';
import { Link } from 'react-router-dom';

class ListOfAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: this.props.allAnswers,
      question: this.props.question
    }
  }

  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps.allAnswers).length !== Object.keys(this.props.allAnswers).length) {
      this.setState({allAnswers: this.props.allAnswers});
    }
  }

  handleDelete(id) {
    return () => {
      this.props.deleteAnswer(id);
    }
  }
  
  render() {
    let answers = [];
      if (Object.values(this.state.allAnswers).length > 0) {    
        answers = Object.values(this.state.allAnswers);    
      }

    let count = answers.length;
    let numberOfAnswers;
    if (count === 1) {
      numberOfAnswers = `${count} answer`;
    } else {
      numberOfAnswers = `${count} answers`;
    }

    let list = null;
    if (answers.length > 0) {
      list = answers.map((answer, idx) => {
        let deleteA = null;
        if (this.props.user_id === answer.user_id) {
          deleteA = (<span className='delete-link' onClick={this.handleDelete.call(this, answer.id)}>delete</span>);
        }
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
                    <Link to={`/answers/${answer.id}/edit`}>edit</Link>
                    {deleteA}
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