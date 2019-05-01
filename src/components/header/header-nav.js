import React from 'react'
import styles from './header-nav.module.scss'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => (
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
      </li>
    </ul>
  </nav>
)

export default HeaderNav
