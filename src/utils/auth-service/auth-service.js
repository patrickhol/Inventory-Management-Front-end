import decode from 'jwt-decode'

export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:5000'
  }

  signup = (email, password, name) => {
    return this.fetch(`${this.domain}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        name
      })
    }).then(res => {
      this.setToken(res.token)
      return res
    })
  }

  login = (email, password) => {
    return this.fetch(`${this.domain}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      this.setToken(res.token)
      return res
    })
  }

  loggedIn = () => {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired = token => {
    try {
      const decoded = decode(token)
      if (decoded.exp < Date.now() / 1000) {
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  setToken = idToken => {
    localStorage.setItem('token', idToken)
  }

  getToken = () => {
    return localStorage.getItem('token')
  }

  logout = () => {
    localStorage.removeItem('token')
  }

  getProfile = () => {
    return decode(this.getToken())
  }

  fetch = (url, options) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${this.getToken()}`
    }

    return (
      fetch(url, {
        headers,
        ...options
      })
        // eslint-disable-next-line no-underscore-dangle
        .then(this._checkStatus)
        .then(response => response.json())
    )
  }

  _checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
