import React from 'react'
import PropTypes from 'prop-types'
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

HomeList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default HomeList
