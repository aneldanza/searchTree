import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const PostLinks = ({user_id, author_id, post_id, deletePost, post, history}) => {

  function handleDelete(id) {
    return () => {
      deletePost(id)
      .then(() => {
        history.push('/');
      });
    }
  }

  let deleteLink = null;
    if (user_id === author_id) {
      deleteLink = (<span className='post-link' onClick={handleDelete(post_id)}>delete</span>);
    }
  
  return (
  <div className='question-details'>
    <Link to={`/${post}s/${post_id}/edit`}><span className='post-link'>edit</span></Link>
    {deleteLink}
  </div>
  )
}

export default withRouter(PostLinks)