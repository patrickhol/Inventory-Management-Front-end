import React from 'react'
import styles from './header-nav.module.scss'
import { NavLink } from 'react-router-dom'

const HeaderNav = isLogged => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        <NavLink
          exact
          to="/"
          activeClassName={styles.navItemLinkActive}
          className={styles.navItemLink}
        >
          Home
        </NavLink>

        {!isLogged ? (
          <NavLink
            exact
            to="/logout"
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
          >
            Logout
          </NavLink>
        ) : (
          <>
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
