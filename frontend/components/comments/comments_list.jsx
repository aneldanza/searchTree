import React from 'react';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.comments.map((post, idx) => {
      return (
        <li className='comment' key={idx}>{post.body}</li>
      )
    })
    return(
      <ul className='comments-list'>
      {list}
      </ul>
    );
  }
}

export default CommentsList;