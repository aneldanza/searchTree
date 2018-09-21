import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let query = this.props.location.search.slice(3).split('%20').join(" ");
    this.props.search(query)
  }

  render() {

    let count = this.props.questions.length;
    let numberOfQuestions;
    if (count === 1) {
      numberOfQuestions = `${count} result`;
    } else {
      numberOfQuestions = `${count} results`;
    }

    let list = null;
    if (this.props.questions.length > 0) {
      list = this.props.questions.map((question, idx) => {
        
        let votes = 0    
        if (question.votes.length > 0) {
          votes = question.votes.reduce((acc, el) => acc + el);
        }

        let proper_wording = "votes";
        if (votes === 1) {
          proper_wording = 'vote'
        }

        let answer_wording = "answers";
        if (question.answerIds.length === 1) {
          answer_wording = 'answer'
        }
        return (      
          <li key={idx}>
            <div className='answer-show-container'>
            
              <div className='answer-layout-left'>                
                  <div className='stats'>
                    <div className='stats-number'>{votes}</div>
                    <div>{proper_wording}</div>
                  </div>
                  <div className='stats'>
                    <div className='stats-number'>{question.answerIds.length}</div>
                    <div>answers</div>
                  </div>          
              </div> 

              <div className='answer-layout'>
                <div className='post-layout-main'>
                  <div className='search-question-title'><Link to={`/questions/${question.id}`} className='question-hyperlink'>{question.title}</Link></div>
                  <article className='question-body'>
                    {question.body}
                  </article>
                  <div className='question-details'>     
                  </div>
                </div>  
              </div>

            </div>
          </li>
        );
      });
    }

    return (
      <section className='container'>
        <div className='questions-index-header'>
          <h1>Search Results</h1>
          <Link to={`/questions/ask`} id='cool-button'>Ask Question</Link>
        </div>
        <nav className='answers-nav'>
          {numberOfQuestions}
        </nav>
        <ul className='answers-list'>{list}</ul>
      </section>
    );
  }
}

export default Search;