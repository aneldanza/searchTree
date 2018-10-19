import React from 'react';
import Comments from './comments';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comments_actions';

const msp = (state, ownProps) => {
  return {
    post_id: own_Props.post_id,
  }
}

const mdp = (dispatch) => {
  return {
    createComment: comment => dispatch(createComment(comment))
  }
}

export default connect(msp, mdp)(Comments);