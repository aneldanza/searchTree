import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { toolbar } from '../../util/quil_toolbar';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.answer;
  }
  
  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.action(this.state)
    .then(data => {
      this.setState({title: '', body: '', tags: ''})
      this.props.history.push(`/questions/${data.answer.question_id}`)
    });
  }

  render() {
    return (
      <form className='question-form'>
        <label className='answer-form-label'>Your Answer</label>
        <textarea className='form-input' 
        cols='92' 
        rows='15' 
        value={this.state.body}
        onChange={this.updateBody.bind(this)}></textarea>
        <div>
          <button id='cool-button'
          onClick={this.handleClick.bind(this)}>
          Post Your Answer</button>
        </div>
      </form>
    );
  }
}

AnswerForm.modules = {
  toolbar: {
    containder: toolbar
  }
}

export default withRouter(AnswerForm);

