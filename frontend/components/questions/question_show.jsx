import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { requestQuestion, deleteQuestion } from '../../actions/questions_actions';
import { clearErrors } from '../../actions/session_actions';
import { receiveAllAnswers, deleteAnswer, requestAnswer } from '../../actions/answer_actions';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/answer_form_container';
import ListOfAnswers from '../answers/list_of_answers';
import { createVote } from '../../actions/vote_actions';
import CommentsContainer from '../comments/comments_container';
import PostLinks from '../functional_pieces/post_links';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { 
    this.props.clearErrors();
    this.props.requestQuestion(this.props.match.params.questionId)
    
    // tags.map(tag => {
    //   tag.classList.add('tags-input');
    // });
    // debugger
  }

  componendDidUpdate(prevProps) {
    if ((this.props.answers !== prevProps.answers) || (nextProps.comments.length !== this.props.comments.length)) {
      this.props.requestQuestion(this.props.match.params.questionId);
    }
  }

  createVote(idx, vote_type) {
    const vote = {
      post_id: idx,
      user_id: this.props.user_id,
      vote_type: vote_type,
      post_type: 'Question'
    }
    this.props.clearErrors();
    this.props.createVote(vote)
  }

  render() {
    if (!(this.props.question)) {
      return (<div></div>);
    }
  
    const tags = document.getElementsByClassName('ql-editor');
   
    let votes = 0 
   
    if (this.props.question.votes.length > 0) {
      votes = this.props.question.votes.reduce((acc, el) => acc + el);
    }

    let vote_error = ''

    if (this.props.errors.length > 0 && this.props.errors[2] === "Question") {
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
            <div className='error'>{vote_error}</div>
            <div className='post-layout-left'>
              <i style={{lineHeight: '0.5'}}
              className="fas fa-caret-up fa-3x vote"
              onClick={() => this.createVote.call(this, this.props.question.id, 1)}></i>
              <div className='stats-number'>{votes}</div>
              <i style={{lineHeight: '0.5'}}
              className="fas fa-caret-down fa-3x vote"
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
                
                  <ReactQuill
                    readOnly
                    modules={{toolbar: null}}
                    value={this.props.question.tags}
                  />

               
                <PostLinks user_id={this.props.user_id}
                           author_id={this.props.question.user_id} 
                           post_id={this.props.question.id}
                           deletePost={this.props.deleteQuestion}
                           post='question'
                           history={this.props.history}
                           />
              </div> 

              <CommentsContainer post={this.props.question}/>
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
    comments: Object.values(state.entities.comments),
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
    clearErrors: () => dispatch(clearErrors())
  }
}


export default connect(msp, mdp)(QuestionShow);

{/* <div className='tags full-width'>
<a href="#">ruby</a>
<a href="#">javascript</a>
<a href="#">MacOS</a>
</div> */}  