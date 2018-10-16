import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { requestQuestion, deleteQuestion } from '../../actions/questions_actions';
import { receiveAllAnswers, deleteAnswer, requestAnswer } from '../../actions/answer_actions';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import ListOfAnswers from '../answers/list_of_answers';
import { createVote } from '../../actions/vote_actions';

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

  createVote(idx, vote_type) {
    const vote = {
      post_id: idx,
      user_id: this.props.user_id,
      vote_type: vote_type,
      post_type: 'Question'
    }
    this.props.createVote(vote)
  }

  render() {

    if (!(this.props.question)) {
      return (<div></div>);
    }

    let deleteQ = null;
    if (this.props.user_id === this.props.question.user_id) {
      deleteQ = (<span className='delete-link' onClick={this.handleDelete.call(this, this.props.question.id)}>delete</span>);
    }

    let votes = 0 
   
    if (this.props.question.votes.length > 0) {
      votes = this.props.question.votes.reduce((acc, el) => acc + el);
    }

    let vote_error = ''
    debugger
    if (this.props.errors.length > 0) {
      vote_error = this.props.errors[0]
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
            <div>{vote_error}</div>
            <div className='post-layout-left'>
              <i style={{lineHeight: '0.5'}}
              className="fas fa-caret-up fa-3x"
              onClick={() => this.createVote.call(this, this.props.question.id, 1)}></i>
              <div className='stats-number'>{votes}</div>
              <i style={{lineHeight: '0.5'}}
              className="fas fa-caret-down fa-3x"
              onClick={() => this.createVote.call(this, this.props.question.id, -1)}></i>
            </div> 

            <div className='post-layout'>
              <div className='post-layout-main'>
                 <ReactQuill 
                className='question-body'
                readOnly
                modules={{toolbar: null}}
                value={this.props.question.body}
                />
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
            question={this.props.question} 
            allAnswers={this.props.answers} 
            />
          </div>
          <div>
            <AnswerFormContainer />
          </div>

        </div>
        <div className='question-sidebar'>
      <a href="https://stackoverflow.com/jobs/remote-developer-jobs"><div className='advertising'></div></a>

        </div>
      </div>
 
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    user_id: state.session.id,
    answers: state.entities.answers,
    errors: state.errors.session,
  }
}

const mdp = (dispatch) => {
  return {
    requestQuestion: id => dispatch(requestQuestion(id)),
    deleteQuestion: id => dispatch(deleteQuestion(id)),
    receiveAllAnswers: () => dispatch(receiveAllAnswers()),
    createVote: vote => dispatch(createVote(vote)),
    requestAnswer: id => dispatch(requestAnswer(id)),
  }
}


export default connect(msp, mdp)(QuestionShow);

{/* <div className='tags full-width'>
<a href="#">ruby</a>
<a href="#">javascript</a>
<a href="#">MacOS</a>
</div> */}  
