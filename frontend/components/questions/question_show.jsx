import React from 'react';
import { connect } from 'react-redux';
import { receiveQuestion } from '../../actions/questions_actions';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.receiveQuestion(this.props.match.params.questionId);
  }

  render() {
    if (this.props.question === undefined) {
      return (<div></div>);
    }
    return(

      <div>
        Title
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    question: state.entities.questions[ownProps.match.params.questionId]
  }
}

const mdp = (dispatch) => {
  return {
    receiveQuestion: id => dispatch(receiveQuestion(id))
  }
}


export default connect(msp, mdp)(QuestionShow);