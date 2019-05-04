import React from 'react'
import styles from './home-list.module.scss'
import RowInventory from './row-inventory'
const HomeList = ({ isLoggedIn, ...item }) => (
  <>
    <div className={styles.wrapper}>
      <div />
      {!isLoggedIn ? (
        <RowInventory {...item} />
      ) : (
        <h3 className={styles.noLogged}>Pleas Login or Registerfirst!</h3>
      )}
    </div>
    <div />
  </>
)

export default HomeList
