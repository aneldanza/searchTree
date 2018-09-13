import React from 'react';
import { withRouter, NavLink} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  errors() {
    let errors = {};
    if (this.props.errors) {
      this.props.errors.map((error, i) => {
        let err = error.toLowerCase();

        if (err.includes('username')) {
          errors.username = error;
        } else if(err.includes('email')) {
          errors.email = error;
        } else if (err.includes('password')) {
          errors.password = error;
        } else {
          errors.general = error;
        }
      });
    }
    return errors;
  }

  userErrors() {
    if (this.errors() && this.errors().username) {
      return <div className='message-error' id='password-error'>{this.errors().username}</div>;
    }
  }

  emailErrors() {
    debugger
    if (this.errors() && this.errors().email) {
      return <div className='message-error' id='password-error'>{this.errors().email}</div>;
    }
  }

  passwordErrors() {
    if (this.errors() && this.errors().password) {
      return <div className='message-error' id='password-error'>{this.errors().password}</div>;
    }
  }

  render() {
    let displayName;
    if (this.props.formType === 'Sign Up') {
      displayName = (
        <label>Display Name
          <input
            className='input'
            placeholder='J.Doe'
            type='text'
            value={this.state.username}
            onChange={this.updateField('username')}/>
          {this.userErrors()}
        </label>
      );
    }
    return (
      <div id="content" >

        <nav className='session-nav'>
          <div id='left'>
            <NavLink to={`/login`}>Log In</NavLink>
            <NavLink to={`/signup`}>Sign Up</NavLink>
          </div>
          <div id='right'>
          </div>
        </nav>

        <div className='session-page'>
          <div id='explanation-text'>
            {this.props.message}
          </div>

          <form className='form-container'>
            {displayName}
            <label>Email (required, but never shown)</label>
            <div>
              <input
                className='input'
                placeholder='you@example.org'
                type='text'
                value={this.state.email}
                onChange={this.updateField('email')}/>
              {this.emailErrors()}
            </div>


            <label>Password
              <input
                className='input'
                placeholder='*******'
                type='password'
                value={this.state.password}
                onChange={this.updateField('password')}/>
                {this.passwordErrors()}
            </label>
            <div className='button'>
              <button className='session-button' onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default withRouter(SessionForm);
