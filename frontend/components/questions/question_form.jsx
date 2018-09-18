import React from 'react';
import { createQuestion } from '../../actions/questions_actions';
import { connect } from 'react-redux';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user_id,
      title: '',
      body: '',
      tags: ''
    }
  }
  updateField(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createQuestion(this.state) 
    this.setState({title: '', body: '', tags: ''})
  }
  render() {
    return(
      <section className='container'>
      <h1>Ask Question</h1>
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
          <textarea className='form-input' 
          cols='92' 
          rows='15' 
          value={this.state.body}
          onChange={this.updateField('body').bind(this)}></textarea>
        </div>
        <div className='form-section'>
          <label className='form-label'>Tags</label>
          <input type='text' 
          className='form-input' 
          value={this.state.tags}
          onChange={this.updateField('tags').bind(this)}></input>
        </div>
  
        <div>
        <button type='submit' id='cool-button'onClick={this.handleSubmit.bind(this)}>Post Your Question</button>
        </div>
        
      </form>
      </section>
    );
  }
}

const msp = (state) => {
  return {
    user_id: state.session.id
  }
}


const mdp = (dispatch) => {
  return {
    createQuestion: question => dispatch(createQuestion(question))
  }
}

export default connect(msp, mdp)(QuestionForm);