import React from 'react'
import PropTypes from 'prop-types'
import styles from './modal.module.scss'
import FormAddItem from '../form-add-item/form-add-item'
import FormEditItem from '../form-edit-item/form-edit-item'

const Modal = ({ editItem, closeModalFn, ...editingItem }) => (
  <div className={styles.wrapper} onMouseLeave={closeModalFn}>
    <button
      type="button"
      className={styles.closeButton}
      onClick={closeModalFn}
    />
    {!editItem ? <FormAddItem /> : <FormEditItem {...editingItem} />}
  </div>
)

Modal.propTypes = {
  editItem: PropTypes.bool.isRequired,
  closeModalFn: PropTypes.func.isRequired
}

export default Modal
