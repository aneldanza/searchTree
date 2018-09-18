import React from 'react';
import { connect } from 'react-redux';
import { receiveQuestion } from '../../actions/questions_actions';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.receiveQuestion(this.props.match.params.questionId);
  }

  render() {
    if (this.props.question === undefined) {
      return (<div></div>);
    }
    return(
      <div>
      <div className='question-header'>
        <div className='question-title'>
          {this.props.question.title}
        </div>
        <div>
        <Link to='api/questions/ask' id='cool-button'>Ask Question</Link>
        </div>
      </div>
      
      <div className='question-show-container'>
        <div className='show-container'>

          <div className='post-layout'>
            <div className='post-layout-left'>
            <i style={{lineHeight: '0.5'}}
            className="fas fa-caret-up fa-3x"></i>
            <div className='stats-number'>1</div>
            <i style={{lineHeight: '0.5'}}
            className="fas fa-caret-down fa-3x"></i>
            <i className="fas fa-star fa-2x"></i>
            </div> 

            <div className='post-layout-main'>
              <article className='question-body'>
                {this.props.question.body}
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
        <div className='question-sidebar'></div>
      </div>
 
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId]
  }
}

const mdp = (dispatch) => {
  return {
    receiveQuestion: id => dispatch(receiveQuestion(id))
  }
}


export default connect(msp, mdp)(QuestionShow);

{/* <div className='tags full-width'>
<a href="#">ruby</a>
<a href="#">javascript</a>
<a href="#">MacOS</a>
</div> */}