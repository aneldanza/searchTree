import React from 'react';
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state) 
    .then(data => {
      this.setState({title: '', body: '', tags: ''})
      this.props.history.push(`/api/questions/${data.question.id}`)
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
          <textarea className='form-input' 
          cols='92' 
          rows='15' 
          value={this.state.body}
          onChange={this.updateField('body').bind(this)}></textarea>
        </div>
  
        <div>
        <button type='submit' id='cool-button'onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
        </div>
        
      </form>
      </section>
    );
  }
}

export default withRouter(QuestionForm);

    // <div className='form-section'>
    //   <label className='form-label'>Tags</label>
    //   <input type='text' 
    //   className='form-input' 
    //   value={this.state.tags}
    //   onChange={this.updateField('tags').bind(this)}></input>
    // </div>