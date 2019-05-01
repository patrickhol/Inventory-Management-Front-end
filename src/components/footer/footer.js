import React from 'react'
import styles from './footer.module.scss'
import FooterNav from './footer-nav'

const Footer = () => (
  <footer className={styles.wrapper}>
    <p />
    <FooterNav />
    <p>Copyright Inventory Managment 2019</p>
  </footer>
)
export default Footer
