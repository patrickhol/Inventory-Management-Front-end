import React from 'react'
import HeaderNav from './header-nav'
import logo from '../../assets/images/logo.svg'
import styles from './header.module.scss'

const Header = ({ isLogged, handleLogoutFunc }) => (
  <header className={styles.wrapper}>
    <a href="/">
      <img className={styles.logo} src={logo} alt="logo Book" />
    </a>
    <h1>Magazyn Online</h1>

    <HeaderNav isLogged={isLogged} handleLogoutFunc={handleLogoutFunc} />
  </header>
)

export default Header
