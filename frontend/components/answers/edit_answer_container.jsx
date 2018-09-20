import { connect } from 'react-redux';
import { updateAnswer, requestAnswer } from '../../actions/answer_actions';
import React from 'react';
import AnswerForm from './answer_form';

const msp = (state, ownProps) => {
  return {
    user_id: state.session.id,
    answer: state.entities.answers[ownProps.match.params.answerId],
  }
}

const mdp = (dispatch) => {
  return {
    action: answer => dispatch(updateAnswer(answer)),
    requestAnswer: id => dispatch(requestAnswer(id))
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

    const {action, answer, user_id, formType, header} = this.props;  
    return (
      <AnswerForm 
      action={action}
      answer={answer}
      user_id={user_id}
      formType={formType}
      header={header}
      />
    );
  }
}

export default connect(msp, mdp)(EditAnswer);