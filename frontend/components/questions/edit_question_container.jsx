import React from 'react';
import { connect } from 'react-redux';
import { updateQuestion, requestQuestion } from '../../actions/questions_actions';
import QuestionForm from './question_form';
import { clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => { 
  return {
    user_id: state.session.id,
    question: state.entities.questions[ownProps.match.params.questionId],
    formType: 'Save Edits',
    header: '', 
    errors: state.errors.session,
  }
}

const mdp = (dispatch) => {
  return {
    action: question => dispatch(updateQuestion(question)),
    requestQuestion: id => dispatch(requestQuestion(id)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {  
    this.props.requestQuestion(this.props.match.params.questionId);
  }

  render() {
    if (this.props.question === undefined) {
      return <div></div>;
    }

    const {action, clearErrors, question, user_id, formType, header} = this.props;  
    return (
      <QuestionForm 
      action={action}
      clearErrors={clearErrors}
      question={question}
      user_id={user_id}
      formType={formType}
      header={header}
      />
    );
  }
}

export default connect(msp, mdp)(EditQuestion);