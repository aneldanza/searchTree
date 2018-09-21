import React from 'react';
import { Link } from 'react-router-dom';

export const QuestionItem = ({ question, users }) => {
  let votes = 0;
  
  if (question.votes.length > 0) {
    votes = question.votes.reduce((acc, el) => acc + el);
  }
  
  let votes_wording = "votes";
  if (votes === 1) {
    votes_wording = 'vote'
  }
  
  let answers_wording = "answers";
  if (question.answerIds.length === 1) {
    answers_wording = 'answer'
  }
 
  return(
    <div className='question-summary'>
      <div className='stats-container'>
        <div className='stats'>
          <div className='stats-number'>{votes}</div>
          <div>{votes_wording}</div>
        </div>
        <div className='stats'>
          <div className='stats-number'>{question.answerIds.length}</div>
          <div>{answers_wording}</div>
        </div>
       
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