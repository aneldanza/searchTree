import React from 'react';
import { withRouter, Link } from 'react-router-dom';


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
      <div>
        <nav>
          <Link to={`/login`}>Log In</Link>
          <Link to={`/signup`}>Sign Up</Link>
        </nav>
        <div>
          "Create your <strong>code</strong> account. It's free and only takes a minute."
        </div>
        <form>

          <label>Display Name
            <input
              type='text'
              value={this.state.username}
              onChange={this.updateField('username')}/>
          </label>
          <label>Email(required, but never shown)
            <input
              type='text'
              value={this.state.email}
              onChange={this.updateField('email')}/>
          </label>
          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.updateField('password')}/>
          </label>
          <button onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
