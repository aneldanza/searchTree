import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    // this.state = 
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Your Answer
          </label>
          <textarea className='form-input' 
          cols='92' 
          rows='15' 
          value={this.state.body}
          onChange={this.updateField('body').bind(this)}></textarea>
        </form>
      </div>
    );
  }
}

export default AnswerForm;