import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.comment;
    this.updateBody = this.updateBody.bind(this);
    
  }

  displayCommentTextarea() {
    const commentLink = document.getElementsByClassName('comment-link')[0];
    const commentInput = document.getElementsByClassName('comment-textarea')[0];
    commentInput.style.display = 'grid';
    commentLink.style.display = 'none';
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  render() {
    return (
      <div className='post-layout-comment' >
        <div className='comments-list'>
        </div>
        <div className='comment-link' onClick={() => this.displayCommentTextarea()}>
          add comment
        </div>
        <div className='comment-textarea'>
          <form className='comment-form'>
            <textarea className='comment-input' rows='3' cols='68'
            placeholder='Use comments to reply to other users or notify them of changes.'
            value={this.state.body}
            onChange={this.updateBody}/>

            <button id='cool-button'>Add Comment</button>
          </form>
        </div>
      </div> 
    )
  }
}

export default Comments;