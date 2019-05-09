import React from 'react'
import { Redirect } from 'react-router-dom'
import AppContext from '../../context'
import styles from './form-login.module.scss'
import Input from '../input/input'
import Title from '../title/title'

const types = {
  login: 'login'
}

const descriptions = {
  login: 'Login'
}

class FormLogin extends React.Component {
  state = {
    type: types.login,
    email: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { type, password, email } = this.state

    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.isLogged && <Redirect exact from="/login" to="/" />}
            <div className={styles.wrapper}>
              <Title>{descriptions[type]}</Title>
              <form
                autoComplete="on"
                className={styles.form}
                onSubmit={e => context.handleFormSubmit(e, this.state)}
              >
                <Input
                  onChange={this.handleInputChange}
                  value={email}
                  name="email"
                  label="Email"
                />
                <Input
                  onChange={this.handleInputChange}
                  value={password}
                  type="password"
                  name="password"
                  label="Your Password"
                />
                <button type="submit">Login </button>
              </form>
            </div>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}

export default FormLogin
