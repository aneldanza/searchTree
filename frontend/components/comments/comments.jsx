import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props)
  }

  displayCommentTextarea() {
    const commentLink = document.getElementsByClassName('comment-link')[0];
    const commentInput = document.getElementsByClassName('comment-textarea')[0];
    debugger
    commentInput.style.display = 'grid';
    commentLink.style.display = 'none';
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
          <form>
            <textarea></textarea>
            <button id='cool-button'>Add Comment</button>
          </form>
        </div>
      </div> 
    )
  }
}

export default Comments;