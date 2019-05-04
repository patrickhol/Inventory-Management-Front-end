import React from 'react'
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
    const { type } = this.state

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>{descriptions[type]}</Title>
            <form
              autoComplete="on"
              className={styles.form}
              onSubmit={e => context.handleFormSubmit(e, this.state)}
            >
              <Input
                onChange={this.handleInputChange}
                value={this.state.email}
                name="email"
                label={type === types.email ? 'Email' : 'Email'}
              />
              <Input
                onChange={this.handleInputChange}
                value={this.state.password}
                type="password"
                name="password"
                label={type === types.password ? 'Your Password' : 'Password'}
              />
              <button>Login </button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}

export default FormLogin
