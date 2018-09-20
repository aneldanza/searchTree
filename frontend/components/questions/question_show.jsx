import React from 'react';
import { connect } from 'react-redux';
import { requestQuestion, deleteQuestion } from '../../actions/questions_actions';
import { receiveAllAnswers, deleteAnswer } from '../../actions/answer_actions';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import ListOfAnswers from '../answers/list_of_answers';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { 
    this.props.requestQuestion(this.props.match.params.questionId)
  }

  componendDidUpdate(prevProps) {
    if (this.props.answers !== prevProps.answers) {
      this.props.requestQuestion(this.props.match.params.questionId);
    }
  }

  handleDelete(id) {
    return () => {
      this.props.deleteQuestion(id).then(() => {
        this.props.history.push('/');
      })
    }
  }

  render() {

    if (!(this.props.question)) {
      return (<div></div>);
    }

    let deleteQ = null;
    if (this.props.user_id === this.props.question.user_id) {
      deleteQ = (<span className='delete-link' onClick={this.handleDelete.call(this, this.props.question.id)}>delete</span>);
    }
    return(
      <div>
      <div className='question-header'>
        <div className='question-title'>
          {this.props.question.title}
        </div>
        <div>
        <Link to={`/questions/ask`} id='cool-button'>Ask Question</Link>
        </div>
      </div>
      
      <div className='question-show-container'>
        <div className='show-container'>
          <div className='question-container'>
            <div className='post-layout-left'>
              <i style={{lineHeight: '0.5'}}
              className="fas fa-caret-up fa-3x"></i>
              <div className='stats-number'>1</div>
              <i style={{lineHeight: '0.5'}}
              className="fas fa-caret-down fa-3x"></i>
              <i className="fas fa-star fa-2x"></i>
            </div> 

            <div className='post-layout'>
              <div className='post-layout-main'>
                <article className='question-body'>
                  {this.props.question.body}
                </article>
                <div className='question-details'>
                  <Link to={`/questions/${this.props.question.id}/edit`}>edit</Link>
                  {deleteQ}
                </div>
              </div> 

              <div className='post-layout-comment'>
                add comment
              </div> 
            </div>
          </div>

          <div>
            <ListOfAnswers 
            user_id={this.props.user_id}
            question={this.props.question} 
            allAnswers={this.props.answers} 
            requestQuestion={this.props.requestQuestion}
            deleteAnswer={this.props.deleteAnswer}/>
          </div>
          <div>
            <AnswerFormContainer />
          </div>

        </div>
        <div className='question-sidebar'></div>
      </div>
 
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    user_id: state.session.id,
    answers: state.entities.answers
  }
}

const mdp = (dispatch) => {
  return {
    requestQuestion: id => dispatch(requestQuestion(id)),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
    receiveAllAnswers: () => dispatch(receiveAllAnswers()),
    deleteAnswer: id => dispatch(deleteAnswer(id)),
  }
}


export default connect(msp, mdp)(QuestionShow);

{/* <div className='tags full-width'>
<a href="#">ruby</a>
<a href="#">javascript</a>
<a href="#">MacOS</a>
</div> */}
