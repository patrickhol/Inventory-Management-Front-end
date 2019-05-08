import React from 'react'
import AppContext from '../../context'
import styles from './form-add-item.module.scss'
import Input from '../input/input'
import Title from '../title/title'

const types = {
  item: 'item'
}

const descriptions = {
  item: 'Add New Item'
}

class FormAddItem extends React.Component {
  state = {
    type: types.item,
    ean: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { type, name, ean, quantity, price } = this.state

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>{descriptions[type]}</Title>
            <form
              autoComplete="on"
              className={styles.form}
              onSubmit={e => context.handleSubmitNewItem(e, this.state)}
            >
              <Input
                onChange={this.handleInputChange}
                value={name}
                name="name"
                label="Name"
                type="text"
                required
              />

              <Input
                onChange={this.handleInputChange}
                value={ean}
                name="ean"
                label="Ean"
                type="number"
                required
              />
              <Input
                onChange={this.handleInputChange}
                value={quantity}
                name="quantity"
                label="Quantity"
                type="number"
                required
              />
              <Input
                onChange={this.handleInputChange}
                value={price}
                name="price"
                label="Price"
                type="number"
                required
              />

              <button>Add Item</button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}

export default FormAddItem
