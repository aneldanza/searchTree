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
            <label>Email (required, but never shown)
              <input
                className='input'
                placeholder='you@example.org'
                type='text'
                value={this.state.email}
                onChange={this.updateField('email')}/>
            </label>
            <label>Password
              <input
                className='input'
                placeholder='*******'
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
