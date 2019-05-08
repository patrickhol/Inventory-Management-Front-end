import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './header-nav.module.scss'

const HeaderNav = ({ isLogged, handleLogoutFunc }) => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        {isLogged ? (
          <button type="button" onClick={handleLogoutFunc}>
            Logout
          </button>
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
HeaderNav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogoutFunc: PropTypes.func.isRequired
}

export default HeaderNav
