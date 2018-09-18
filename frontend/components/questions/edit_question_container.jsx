import React from 'react';
import { connect } from 'react-redux';
import { updateQuestion, receiveQuestion } from '../../actions/questions_actions';
import QuestionForm from './question_form';

const msp = (state, ownProps) => {
  return {
    user_id: state.session.id,
    question: state.entities.questions[ownProps.match.params.questionId],
    formType: 'Save Edits',
    header: ''
  }
}


const mdp = (dispatch) => {
  return {
    action: question => dispatch(updateQuestion(question)),
    receiveQuestion: id => dispatch(receiveQuestion(id))
  }
}

class EditQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.receiveQuestion(this.props.match.params.quesitonId);
  }

  render() {
    if (this.props.question === undefined) {
      return <div></div>;
    }
    debugger
    const {action, question, user_id, formType, header} = this.props;
    return (
      <QuestionForm 
      action={action}
      question={question}
      user_id={user_id}
      formType={formType}
      header={header}
      />
    );
  }
}

export default connect(msp, mdp)(EditQuestion);