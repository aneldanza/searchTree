import React from 'react';
import Comments from './comments';
import { connect } from 'react-redux';
import { createComment, clearCommentsErrors } from '../../actions/comments_actions';

const msp = (state, ownProps) => {
  let post_type = '';
  if (ownProps.post.title) {
    post_type = 'Question';
  } else {
    post_type = 'Answer';
  }
  return {
    post: ownProps.post,
    comment: {
      user_id: state.session.id,
      post_id: ownProps.post.id,
      post_type: post_type,
      body: '',
    }, 
    errors: state.errors.comments,
  }
}

const mdp = (dispatch) => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    clearErrors: () => dispatch(clearCommentsErrors())
  }
}

export default connect(msp, mdp)(Comments);