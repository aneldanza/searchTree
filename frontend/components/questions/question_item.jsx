import React from 'react';
import { Link } from 'react-router-dom';

export const QuestionItem = ({ question, users }) => {
  let votes = 0 
  debugger
  if (question.votes.length > 0) {
    votes = question.votes.reduce((acc, el) => acc + el);
  }

  let proper_wording = "votes";
  if (votes === 1) {
    proper_wording = 'vote'
  }
  
  return(
    <div className='question-summary'>
      <div className='stats-container'>
        <div className='stats'>
          <div className='stats-number'>{votes}</div>
          <div>{proper_wording}</div>
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