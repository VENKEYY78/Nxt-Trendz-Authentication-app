import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onUsernameEnter = event => {
    this.setState({username: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const UserDetails = {username, password}
    const ApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(ApiUrl, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  renderUsernameEnter = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          className="input-username"
          onChange={this.onUsernameEnter}
        />
      </>
    )
  }

  renderPasswordEnter = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          className="input-password"
          onChange={this.onEnterPassword}
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-form-main-bg-container">
        <div className="mobile-view-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-mobile"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-mobile-dsktop"
          />
        </div>
        <form className="from-container" onSubmit={this.onSubmitLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-desktop"
          />
          <div className="input-container">{this.renderUsernameEnter()}</div>
          <div className="input-container">{this.renderPasswordEnter()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showErrorMsg && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

// <div className="user-name-container"></div>
//         <div className="password-container"></div>
