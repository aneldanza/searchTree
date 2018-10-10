import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import Quill from 'react-quill';
import { toolbar } from '../../util/quil_toolbar';
import {UnprivilegedEditor} from 'react-quill';

var icons = ReactQuill.Quill.import('ui/icons');
icons['bold'] = '<i class="fa fa-bold" aria-hidden="true"></i>';
icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
icons['link'] = '<i class="fa fa-link" aria-hidden="true"></i>';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.answer;
  }
  
  updateBody(value) {
    debugger
    this.setState({body: value});
  }

  handleClick(e) {
    e.preventDefault();
    const answer = {
      user_id: this.state.user_id,
      body: this.state.body,
      // body: this.state.body.replace(/<\/?[^>]+(>|$)/g, ""),
      question_id: this.state.question_id
    }
    debugger
    this.props.action(answer)
    .then(data => {
      this.setState({title: '', body: '', tags: ''})
      this.props.history.push(`/questions/${data.answer.question_id}`)
    });
  }

  // onBlur(input) {
  //   debugger
  //   this.setState({body: input.trim()});
  // }
  render() {
    return (
      <form className='question-form'>
        <label className='answer-form-label'>Your Answer</label>
        <ReactQuill 
        className='textarea'
        value={this.state.body}
        onChange={this.updateBody.bind(this)}
      
          modules={AnswerForm.modules}
          formats={AnswerForm.formats}
          theme={'snow'}
          />
        <div>
          <button id='cool-button'
          onClick={this.handleClick.bind(this)}>
          Post Your Answer</button>
        </div>
      </form>
    );
  }
}

// onChange={this.updateBody.bind(this)}
AnswerForm.modules = toolbar;

AnswerForm.customModules = {
  toolbar: {
    container: '#toolbar'
  }
}

AnswerForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline',
  'list', 'bullet', 'indent',
  'link','align','color'
]

export default withRouter(AnswerForm);


// onBlur={(range, source, quill) => {
//   debugger
//   this.onBlur(quill.getText());
// }}

// onBlur={(range, source, quill) => {
//   this.onBlur(quill.getHTML());
// }}