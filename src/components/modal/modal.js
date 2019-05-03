import React from 'react'
import styles from './modal.module.scss'
import FormAddItem from '../form-add-item/form-add-item'
import FormEditItem from '../form-edit-item/form-edit-item'

const Modal = ({ editItem, closeModalFn, ...editingItem }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeButton} onClick={closeModalFn} />
    {!editItem ? <FormAddItem /> : <FormEditItem {...editingItem} />}
  </div>
)

export default Modal
