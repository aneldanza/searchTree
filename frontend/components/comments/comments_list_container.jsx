import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './comments_list';

const msp = (state, ownProps) => {
  const comments = state.entities.comments;
  return {
    comments: comments,
  }
}

const mdp = (dispatch) => {
  return {

  }
}

export default connect(msp, mdp)(CommentsList);

