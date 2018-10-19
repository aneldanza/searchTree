import { connect } from 'react-redux';
import AnswerItem from './answer_item';
import { deleteAnswer } from '../../actions/answer_actions';
import { withRouter } from 'react-router-dom';
import { createVote } from '../../actions/vote_actions';
import { clearErrors } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session, 
    user_id: state.session.id,
    answer: ownProps.answer,
  }
}

const mdp = (dispatch) => {
  return {
    deleteAnswer: id => dispatch(deleteAnswer(id)),
    createVote: vote => dispatch(createVote(vote)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(msp, mdp)(AnswerItem));