import React from 'react'
import HeaderNav from './header-nav'
import logo from '../../assets/images/logo.svg'
import styles from './header.module.scss'
import Button from '../button/button'
const Header = () => (
  <header className={styles.wrapper}>
    <a href="/">
      <img className={styles.logo} src={logo} alt="logo Book" />
    </a>
    <HeaderNav />

    <Button secondary>Login</Button>
    <Button secondary2>Register</Button>
  </header>
)

export default Header
