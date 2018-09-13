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
        <section>
          <h1>Learn, Share, Build</h1>
          <p>Come to <strong>code</strong> to learn, share their knowledge, and build their careers.</p>
          <p>
            Join the world’s largest developer community.
          </p>
        </section>

        <form className='form-container'>
          <label>Display Name
            <input
              className='splash-input'
              placeholder='J.Doe'
              type='text'
              value={this.state.username}
              onChange={this.updateField('username')}/>
          </label>
          <label>Email (required, but never shown)
            <input
              className='splash-input'
              placeholder='you@example.org'
              type='text'
              value={this.state.email}
              onChange={this.updateField('email')}/>
          </label>
          <label>Password
            <input
              className='splash-input'
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
    );
  }
}

export default SplashSignup;
