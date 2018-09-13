import React from 'react';

class SplashSignup extends React.Component {
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
    return(
      <div id='splash-signup-container'>
        <section className='welcome-text'>
          <h1>Learn, Share, Build</h1>
          <p>Come to <strong>code</strong> to learn, share their knowledge, and build their careers.</p>
          <p>
            Join the world’s largest developer community.
          </p>
        </section>

        <form className='splash-form-container'>
          <div className='label-input'>
            <label className='splash-label'>Display Name</label>
            <input
              className='splash-input'
              placeholder='J.Doe'
              type='text'
              value={this.state.username}
              onChange={this.updateField('username')}/>
          </div>

          <div className='label-input'>
            <label className='splash-label'>Email address</label>
            <input
              className='splash-input'
              placeholder='you@example.org'
              type='text'
              value={this.state.email}
              onChange={this.updateField('email')}/>
          </div>

          <div className='label-input'>
            <label className='splash-label'>Password</label>
            <input
              className='splash-input'
              placeholder='*******'
              type='password'
              value={this.state.password}
              onChange={this.updateField('password')}/>
          </div>

          <div className='label-input' id='button-group'>
            <div id='splash-signup-button'>
              <button onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
            </div>
            <div className='legal-note'>
              By clicking "Sign Up", you acknowledge that you have read our updated terms of service, privacy policy and cookie policy, and that your continued use of the website is subject to these policies.
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default SplashSignup;
