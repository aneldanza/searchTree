import React from 'react';
import ReactQuill from 'react-quill';
import { toolbar } from '../../util/quil_toolbar';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)  
    this.state = this.props.question;
    this.refs = React.createRef();
    this.tags = [];
  }

  componentDidMount() {
    const tags = document.getElementsByClassName('ql-container')[1];
    tags.classList.add('tags-input');
  }

  updateField(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  updateBody(value) {
    this.setState({body: value});
  }

  updateTags(value) {
    this.setState({tags: value})
    const quillRef = this.myQuillRef.getEditor();
  
    quillRef.focus();
    debugger
    if (quillRef.container.innerText.trim().endsWith(',')) {
      debugger
      this.tags.push()
    }
    debugger


  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
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
    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((err, idx) => {
        return <li key={idx}>{err}</li>
      })
    }

    const myRef = (el) => this.myQuillRef = el;

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
        <div className='form-section'>
          <label className='form-label'>Tags</label>
          <ReactQuill
          className='form-input'
          ref={myRef}
          value={this.state.tags}
          modules={QuestionForm.tagModules}
          theme={'snow'}
          formats={QuestionForm.tagFormats}
          onChange={this.updateTags.bind(this)}
          />
        </div>
  
        <div>
          <ul className='question-form-error'>{errors}</ul>
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

QuestionForm.tagModules = {toolbar: false}

QuestionForm.tagFormats = ['code-block']

QuestionForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline',
  'list', 'bullet', 'indent',
  'link','image','align','color', 'code-block'
]

export default withRouter(QuestionForm);

{/* <input type='text' 
className='form-input' 
value={this.state.tags}
onChange={this.updateField('tags').bind(this)}></input> */}