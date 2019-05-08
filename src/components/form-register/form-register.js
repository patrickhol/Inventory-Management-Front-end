import React from 'react'
import AppContext from '../../context'
import styles from './form-register.module.scss'
import Input from '../input/input'
import Title from '../title/title'
import { Redirect } from 'react-router-dom'

const types = {
  register: 'register'
}

const descriptions = {
  register: 'Register new account'
}

class FormRegister extends React.Component {
  state = {
    type: types.register,
    name: '',
    email: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { type, email, password, title } = this.state

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
                  label="Password"
                />

                <Input
                  onChange={this.handleInputChange}
                  value={title}
                  name="name"
                  label="Name"
                />

                <button>Register</button>
              </form>
            </div>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}

export default FormRegister
