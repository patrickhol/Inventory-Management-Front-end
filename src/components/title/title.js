import React from 'react'
import styles from './title.module.scss'

const Title = ({ children }) => <h2 className={styles.name}>{children}</h2>

export default Title
