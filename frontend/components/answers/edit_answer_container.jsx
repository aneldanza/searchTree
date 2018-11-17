import { connect } from 'react-redux';
import { updateAnswer, requestAnswer } from '../../actions/answer_actions';
import React from 'react';
import AnswerForm from './answer_form';
import { clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    user_id: state.session.id,
    answer: state.entities.answers[ownProps.match.params.answerId],
    formType: 'Edit Answer',
    errors: state.errors.session,
  }
}

const mdp = (dispatch) => {
  return {
    action: answer => dispatch(updateAnswer(answer)),
    requestAnswer: id => dispatch(requestAnswer(id)),
    clearErrors: () => dispatch(clearErrors())
  }
}

class EditAnswer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {  
    this.props.requestAnswer(this.props.match.params.answerId);
  }

  render() {
    if (this.props.answer === undefined) {
      return <div></div>;
    }

    const {action, clearErrors,answer, user_id, formType, errors} = this.props;  
    return (
      <AnswerForm 
      action={action}
      clearErrors={clearErrors}
      answer={answer}
      user_id={user_id}
      formType={formType}
      errors={errors}
      />
    );
  }
}

export default connect(msp, mdp)(EditAnswer);