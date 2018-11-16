import React from 'react';
import ReactQuill from 'react-quill';
import { toolbar } from '../../util/quil_toolbar';
import { withRouter } from 'react-router-dom';


class QuestionForm extends React.Component {
  constructor(props) {
    super(props)  
    this.state = Object.assign({}, {
      question: this.props.question, 
      tags: [ { value: '', type: 'input' } ],
    });
    this.refs = React.createRef();
    this.tags = [ { value: '', type: 'input' } ];
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  componentDidMount() {
    const tags = document.getElementsByClassName('ql-container')[1];
    const count = document.getElementsByClassName('ql-container')['length'];
    const container = document.getElementsByClassName('ql-container')[count - 1];
    container.classList.add('body-area')
    this.textInput.current.focus();
    // tags.classList.add('tags-input');
  }

  updateTitle(e) {
    let question = {
      user_id: this.state.question.user_id,
      title: e.target.value,
      body: this.state.question.body,
      tags: this.state.question.tags
    }
   
    this.setState({question: question});
    
  }

  updateBody(value) {
    let question = {
      user_id: this.state.question.user_id,
      title: this.state.question.title,
      body: value,
      tags: this.state.question.tags
    }
  
    this.setState({question: question});
  }

  updateTags(e) {
    this.tags[this.tags.length - 1].value = e.target.value;
    if (e.target.value[e.target.value.length - 1] === ',') {
      this.tags[this.tags.length - 1].value = e.target.value.slice(0, -1);
      this.tags[this.tags.length - 1].type = 'code';
      this.tags.push({value: '  ', type: 'div'});
      this.tags.push({ value: '', type: 'input' });
    }
   
    let tag_array = this.tags;
    this.setState({tags: tag_array},this.focusTextInput);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    let question = {
      id: this.props.question.id,
      user_id: this.state.question.user_id,
      title: this.state.question.title,
      body: this.state.question.body,
      tags: document.getElementsByClassName('tags-input')[0].innerHTML,
    }
  
      
    let blankQuestion = {
      user_id: this.state.question.user_id,
      title: '', 
      body: '', 
      tags: ''
    }
    this.props.action(question) 
    .then(data => {
      this.setState({question: blankQuestion})
      this.props.history.push(`/questions/${data.question.id}`)
    });
  }
  
  render() {
    if (this.state.question === undefined) {
      return <div></div>;
    }
    let errors = '';
   
    if (this.props.errors && this.props.errors.length > 0) {
      errors = this.props.errors.map((err, idx) => {
        return <li key={idx}>{err}</li>
      })
    }

    const tags = this.state.tags.map((tag, idx) => {
      if (tag.type === 'input') {
        return <input ref={this.textInput} id='focus' key={idx} onChange={this.updateTags.bind(this)}
        value={tag.value}></input>
      } else if (tag.type === 'code') {
        return <code key={idx} id='code' onChange={this.updateTags.bind(this)}>{tag.value}</code>
      } else {
        return <div key={idx}>&nbsp;&nbsp;</div>
      }
    })


    return(
      <section className='container'>
      <h1>{this.props.header}</h1>
      <form className='question-form'>
        <div className='form-section'>
          <label className='form-label'>Title</label>
          <input type='text' 
          className='form-input title' 
          value={this.state.question.title}
          onChange={this.updateTitle.bind(this)}
          ref={this.textInput}></input>
        </div>
        <div className='form-section'>
          <label className='form-label'>Body</label>
          <ReactQuill 
          className='textarea'
          value={this.state.question.body}
          onChange={this.updateBody.bind(this)}
          modules={QuestionForm.modules}
          formats={QuestionForm.formats}
          theme={'snow'}
          ref={this.textInput}
          />
        </div>
        <div className='form-section'>
          <label className='form-label'>Tags</label>
        </div>
        <div className='tags-input'>
          {tags}
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

