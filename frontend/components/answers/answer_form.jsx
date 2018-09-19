import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      user_id: this.props.user_id,
      question_id: this.props.question_id
    }
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.setState({body: ''})
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

export default AnswerForm;