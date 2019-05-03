import React from 'react'
import AppContext from '../../context'
import styles from './form-edit-item.module.scss'
import Input from '../input/input'
import Title from '../title/title'

const types = {
  item: 'item'
}

const descriptions = {
  item: 'Edit Item'
}

class FormEditItem extends React.Component {
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
    const { type } = this.state

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>{descriptions[type]} </Title>

            {this.props.editingItem.map(item => {
              return (
                <form
                  key={item._id}
                  autoComplete="on"
                  className={styles.form}
                  onSubmit={e =>
                    context.handleSubmitEditItem(
                      e,
                      this.state,
                      item._id,
                      item.name,
                      item.ean,
                      item.quantity,
                      item.price
                    )
                  }
                >
                  <Input
                    onChange={this.handleInputChange}
                    defaultValue={item.name}
                    name="name"
                    label="Name"
                    type="text"
                    required
                  />
                  <Input
                    onChange={this.handleInputChange}
                    defaultValue={item.ean}
                    name="ean"
                    label="Ean"
                    type="number"
                    required
                  />
                  <Input
                    onChange={this.handleInputChange}
                    defaultValue={item.quantity}
                    name="quantity"
                    label="Quantity"
                    type="number"
                    required
                  />
                  <Input
                    onChange={this.handleInputChange}
                    defaultValue={item.price}
                    name="price"
                    label="Price"
                    type="number"
                    required
                  />
                  <button>Edit Item</button>
                </form>
              )
            })}
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}

export default FormEditItem
