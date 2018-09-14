import React from 'react';
import { Link } from 'react-router-dom';

export const QuestionItem = ({ question, users }) => {

  return(
    <div className='question-summary' key={question.id}>
      <div className='stats-container'></div>
      <div className='summary'>
        <h3><Link to={`/questions.{question.id}`}>{question.title}</Link></h3>
        <div>{question.body}</div>
        <div className='tags'></div>
      </div>
    </div>
  );
};
{/* <div className='user-info'>{users[question.user_id].username}</div> */}