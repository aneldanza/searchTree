import React from 'react';
import CommentsListContainer from './comments_list_container';

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.comment;
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayCommentTextarea() {
    if (this.props.position === -1) {
      return
    }
    const commentLink = document.getElementsByClassName('comment-link')[this.props.position];
    const commentInput = document.getElementsByClassName('comment-textarea')[this.props.position];
    commentInput.style.display = 'grid';
    commentLink.style.display = 'none';
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.createComment(this.state)
    this.setState({body: ''})
  }

  render() {
 
    let comment_error = ''
    if (this.props.comment.user_id === null) {
      comment_error = (
        <div className='warning'>Please sign in to post an answer</div>
      )
    } else if (this.props.errors.length > 0 && this.props.errors[1] == this.props.post.id) {
      comment_error = this.props.errors[0]
    }
    return (
      <div className='post-layout-comment' >
        <CommentsListContainer id={this.props.post.id} post={this.props.post}/>
        
        <div className='comment-link' onClick={() => this.displayCommentTextarea()}>
          add comment
        </div>
        <div className='comment-textarea'>
          <form className='comment-form' onSubmit={this.handleSubmit}>
            <textarea className='comment-input' rows='3' cols='68'
            placeholder='Use comments to reply to other users or notify them of changes.'
            value={this.state.body}
            onChange={this.updateBody}/>

            <button id='cool-button' type='submit'>Add Comment</button>
          </form>
          <div className='comment-error'>{comment_error}</div>
        </div>
      </div> 
    )
  }
}

export default Comments;