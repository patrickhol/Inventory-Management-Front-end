import React from 'react'
import PropTypes from 'prop-types'
import styles from './title.module.scss'

const Title = ({ children }) => <h2 className={styles.name}>{children}</h2>

Title.propTypes = {
  children: PropTypes.node.isRequired
}
export default Title
