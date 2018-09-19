import React from 'react';
import { Link } from 'react-router-dom';

export const QuestionItem = ({ question, users }) => {
  return(
    <div className='question-summary'>
      <div className='stats-container'>
      <div className='stats'>
        <div className='stats-number'>0</div>
        <div>votes</div>
      </div>
      <div className='stats'>
        <div className='stats-number'>0</div>
        <div>answers</div>
      </div>
        <div>0 views</div>
      </div>
      <div className='summary'>
        <div><Link to={`/questions/${question.id}`} className='question-hyperlink'>{question.title}</Link></div>
        <div className='question-body'>{question.body}</div>
        <div className='user-info'>{users[question.user_id].username}</div> 
      </div>
    </div>
  );
};
        // <div className='tags'>
        // <a href="#">ruby</a>
        // <a href="#">javascript</a>
        // <a href="#">MacOS</a>
        // </div>