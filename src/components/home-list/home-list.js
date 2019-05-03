import React from 'react'
import styles from './home-list.module.scss'
import RowInventory from './row-inventory'
const HomeList = ({ ...item }) => (
  <>
    <div className={styles.wrapper}>
      <div />
      <RowInventory {...item} />
    </div>
    <div />
  </>
)

export default HomeList
