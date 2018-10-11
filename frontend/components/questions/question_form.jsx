import React from 'react';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/monokai-sublime.css'
import ReactQuill from 'react-quill';
import { toolbar } from '../../util/quil_toolbar';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)  
    this.state = this.props.question;
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  updateBody(value) {
    this.setState({body: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state) 
    .then(data => {
      this.setState({title: '', body: '', tags: ''})
      this.props.history.push(`/questions/${data.question.id}`)
    });
  }
  
  render() {
    if (this.state === undefined) {
      return <div></div>;
    }

    return(
      <section className='container'>
      <h1>{this.props.header}</h1>
      <form className='question-form'>
        <div className='form-section'>
          <label className='form-label'>Title</label>
          <input type='text' 
          className='form-input title' 
          value={this.state.title}
          onChange={this.updateField('title').bind(this)}></input>
        </div>
        <div className='form-section'>
          <label className='form-label'>Body</label>
          <ReactQuill 
          className='textarea'
          value={this.state.body}
          onChange={this.updateBody.bind(this)}
          modules={QuestionForm.modules}
          formats={QuestionForm.formats}
          theme={'snow'}
          />
        </div>
  
        <div>
        <button type='submit' id='cool-button'onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
        </div>
        
      </form>
      </section>
    );
  }
}

QuestionForm.modules = toolbar;

QuestionForm.customModules = {
  toolbar: {
    container: '#toolbar'
  }
}

QuestionForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline',
  'list', 'bullet', 'indent',
  'link','image','align','color', 'code-block'
]

export default withRouter(QuestionForm);

    // <div className='form-section'>
    //   <label className='form-label'>Tags</label>
    //   <input type='text' 
    //   className='form-input' 
    //   value={this.state.tags}
    //   onChange={this.updateField('tags').bind(this)}></input>
    // </div>