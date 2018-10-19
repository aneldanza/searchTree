import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props)
  }

  displayCommentTextarea() {
    commentLink = document.getElementsByClassName('comment-link').last;
    commentInput = document.getElementsByClassName('comment-textarea').last;
  }

  render() {
    return (
      <div className='post-layout-comment' >
        <div className='comments-list'>
        </div>
        <div className='comment-link' onClick={() => displayCommentTextarea()}>
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