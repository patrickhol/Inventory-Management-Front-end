/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './input.module.scss'

const Input = ({ name, maxLength, label, ...props }) => (
  <div className={styles.formItem}>
    <input
      className={styles.input}
      type="text"
      name={name}
      id={name}
      required
      maxLength={maxLength}
      placeholder=" "
      {...props}
    />

    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number
}

Input.defaultProps = {
  maxLength: 70
}

export default Input
