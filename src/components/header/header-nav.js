import React from 'react'
import styles from './header-nav.module.scss'
import { NavLink } from 'react-router-dom'

const HeaderNav = ({ isLogged, handleLogoutFunc }) => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        {isLogged ? (
          <button onClick={handleLogoutFunc}>Logout</button>
        ) : (
          <>
            <NavLink
              exact
              to="/"
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/login"
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
            >
              Login
            </NavLink>
            <NavLink
              exact
              to="/register"
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
            >
              Register
            </NavLink>
          </>
        )}
      </li>
    </ul>
  </nav>
)

export default HeaderNav
