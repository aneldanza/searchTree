import React from 'react';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.comments[this.props.id]) {
      return <div></div>
    }
    const list = Object.values(this.props.comments[this.props.id]).map((post, idx) => {
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