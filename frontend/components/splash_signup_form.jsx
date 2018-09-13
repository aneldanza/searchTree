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

    return(
      <section className='splash-welcome'>
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
              {this.userErrors()}
            </div>

            <div className='label-input'>
              <label className='splash-label'>Email address</label>
              <input
                className='splash-input'
                placeholder='you@example.org'
                type='text'
                value={this.state.email}
                onChange={this.updateField('email')}/>
              {this.emailErrors()}
            </div>

            <div className='label-input'>
              <label className='splash-label'>Password</label>
              <input
                className='splash-input'
                placeholder='*******'
                type='password'
                value={this.state.password}
                onChange={this.updateField('password')}/>
              {this.passwordErrors()}
            </div>

            <div className='label-input' id='button-group'>
              <div id='splash-signup-button'>
                <button onClick={this.handleSubmit.bind(this)}>{this.props.formType}</button>
              </div>

            </div>

          </form>
        </div>
      </section>
    );
  }
}

export default SplashSignup;
