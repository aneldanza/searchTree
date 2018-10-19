import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './comments_list';

const msp = (state, ownProps) => {
  const comments = Object.values(state.entities.comments[ownProps.id]);
  return {
    comments: comments,
  }
}

const mdp = (dispatch) => {
  return {

  }
}

export default connect(msp, mdp)(CommentsList);

