import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  updateInput(e) {
    this.setState({input: e.target.value});
  }

  handleSearch(query) {
    return e => {
      e.preventDefault();
      this.props.search(query)
      .then( data => {
        this.props.history.push(`/questions/search`);
      });
    }
  }
  
  render() {

    let buttons_section;
      if (this.props.currentUser) {
        buttons_section = (
          <div id='buttons-section'>
            <p>Hello, {this.props.currentUser.username}!</p>
            <button id='cool-button' onClick={() => this.props.logout()}>Log Out</button>
          </div>
        );
      } else {
        buttons_section = (
          <div id='buttons-section'>
            <Link to={`/login`} id='login'>Log In</Link>
            <Link to={`/signup`} id='cool-button'>Sign Up</Link>
            <button id='cool-button' onClick={() => this.props.demoLogin()}>Demo LogIn</button>
          </div>
        );
      }
    
    return (
      <nav className='header-right'>
        <div className='inner-header'>
          <nav className='left-nav'>
            <Link to={'/'}><span id="logo">search<strong>Tree</strong></span></Link>
    
            <form className='search-form'>
              <input id='search-bar' 
              type='text' 
              value={this.state.input}
              onChange={this.updateInput.bind(this)}/>
              <button className='search-button'
              onClick={this.handleSearch.call(this,this.state.input)}>
              <i className="fas fa-search"></i></button>
            </form>
          </nav>
          {buttons_section}
        </div>
      </nav>
    );
  }
}

export default Greeting;

