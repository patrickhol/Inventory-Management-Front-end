import React from 'react'
import AppContext from '../../context'
import styles from './row-inventory.module.scss'
const RowInventory = ({ item }) => {
  return (
    <AppContext.Consumer>
      {context => (
        <>
          <div>
            <form>
              <input
                className={styles.searchInput}
                type="text"
                value={context.filter}
                onChange={context.onFilterChange}
                placeholder="Filter..."
              />
            </form>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>
                    Name
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th>
                    Ean
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th>
                    Quantity
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th>
                    Price PLN
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                  <th>
                    Action
                    <i className="fa fa-sort float-right" aria-hidden="true" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {item.map(item => {
                  const checkFilteredItemEan =
                    item.name
                      .toUpperCase()
                      .indexOf(context.filterString.toUpperCase()) > -1 ||
                    item.ean
                      .toUpperCase()
                      .indexOf(context.filterString.toUpperCase()) > -1

                  if (checkFilteredItemEan) {
                    return (
                      <tr key={item._id.toString()}>
                        <td>{item.name}</td>

                        <td>{item.ean}</td>
                        <td>{item.quantity}</td>

                        <td>{item.price}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            onClick={e =>
                              context.openModalEditItem(e, item._id)
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            onClick={e => context.openModalAddItem(e, item._id)}
                          >
                            Add
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => context.deleteItem(item._id)}
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    )
                  }
                  return null
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </AppContext.Consumer>
  )
}

export default RowInventory
