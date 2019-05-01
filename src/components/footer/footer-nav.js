import React from 'react'
import styles from './footer-nav.module.scss'
import { NavLink } from 'react-router-dom'
const FooterNav = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.footerItem}>
        <NavLink
          exact
          to="/"
          activeClassName={styles.footerItemLinkActive}
          className={styles.footerItemLink}
        >
          Inventory
        </NavLink>
      </li>
      <li className={styles.footerItem}>
        <NavLink
          exact
          to="/login"
          activeClassName={styles.footerItemLinkActive}
          className={styles.footerItemLink}
        >
          Login
        </NavLink>
      </li>
      <li className={styles.footerItem}>
        <NavLink
          exact
          to="/register"
          activeClassName={styles.footerItemLinkActive}
          className={styles.footerItemLink}
        >
          Register
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default FooterNav
