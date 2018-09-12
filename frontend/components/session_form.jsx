import React from 'react';
import { withRouter, Link, NavLink} from 'react-router-dom';


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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          return (
            <li key={`error-${i}`}>
              {error}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div id="content" >

        <nav className='session-nav'>
          <NavLink to={`/login`}>Log In</NavLink>
          <NavLink to={`/signup`}>Sign Up</NavLink>
        </nav>

        <div className='session-page'>
          <div id='explanation-text'>
            Create your <strong>code</strong> account. It is free and only takes a minute.
          </div>

          <form className='form-container'>
            <label>Display Name
              <input
                className='input'
                type='text'
                value={this.state.username}
                onChange={this.updateField('username')}/>
            </label>
            <label>Email (required, but never shown)
              <input
                className='input'
                type='text'
                value={this.state.email}
                onChange={this.updateField('email')}/>
            </label>
            <label>Password
              <input
                className='input'
                type='password'
                value={this.state.password}
                onChange={this.updateField('password')}/>
            </label>
            <div className='button'>
              <button onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default withRouter(SessionForm);
