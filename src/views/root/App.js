import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import HomeView from '../../views/home-view/home-view'
import FormRegister from '../../components/form-register/form-register'
import FormLogin from '../../components/form-login/form-login'
import AppContext from '../../context'
import Modal from '../../components/modal/modal'
import AuthService from '../../utils/auth-service/auth-service'
import LoginFirst from '../../components/login-first/login.first'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Auth = new AuthService()

class App extends Component {
  Auth = new AuthService()
  state = {
    filterString: '',
    isLogged: false,
    item: [],
    editingItem: [],
    fetchItemData: false,
    isModalOpen: false,
    editItem: false,
    loading: true
  }
  handleSubmitEditItem = (e, itemData, id, name, ean, quantity, price) => {
    e.preventDefault()
    const inputName = itemData.name ? itemData.name : name
    const inputEan = itemData.ean ? itemData.ean : ean
    const inputQuantity = itemData.quantity ? itemData.quantity : quantity
    const inputPrice = itemData.price ? itemData.price : price
    const showIndex = this.state.item.findIndex(item => item._id === id)
    itemData = {
      name: inputName,
      ean: inputEan,
      quantity: inputQuantity,
      price: inputPrice
    }
    var json = JSON.stringify(itemData)
    // console.log(json)
    fetch('/api/item/' + id, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: json
    })

    let allItemFromStateMutable = [...this.state.item]
    let editeOneItem = {
      ...allItemFromStateMutable[showIndex],
      name: inputName,
      ean: inputEan,
      quantity: inputQuantity,
      price: inputPrice
    }

    allItemFromStateMutable[showIndex] = editeOneItem

    this.setState({
      item: allItemFromStateMutable,
      isModalOpen: false,
      editItem: false
    })
  }

  handleSubmitNewItem = (e, itemData) => {
    e.preventDefault()

    var json = JSON.stringify(itemData)
    fetch('/api/item', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: json
    })
      .then(res => res.json())
      .then(data => {
        itemData._id = data.data._id
        this.setState(prevState => ({
          [itemData.type]: [...prevState[itemData.type], itemData],
          isModalOpen: false,
          editItem: false
        }))
      })
  }
  handleFormSubmit = (e, userData) => {
    e.preventDefault()

    if (userData.type === 'login') {
      this.Auth.login(userData.email, userData.password)
        .then(res => {
          this.setState({
            isLogged: true
          })

          console.log('You are logged in ')
          this.fetchItemDataNow()
        })
        .catch(err => {
          alert(err)
        })
    } else if (userData.type === 'register') {
      this.Auth.signup(userData.email, userData.password, userData.name)
        .then(res => {
          this.setState({
            isLogged: true
          })
          console.log('You are registered')
          this.fetchItemDataNow()
        })
        .catch(err => {
          alert(err)
        })
    }
  }

  openModalAddItem = (e, id) => {
    e.preventDefault()
    this.setState({
      isModalOpen: true
    })

    let editingItem = this.state.item
      .map(b => {
        return b
      })
      .filter(b => {
        return b._id === id
      })

    this.setState({
      editingItem
    })
  }

  openModalEditItem = (e, id) => {
    e.preventDefault()
    this.setState({
      isModalOpen: true,
      editItem: true
    })

    this.setState({
      editItem: true
    })
    let editingItem = this.state.item
      .map(b => {
        return b
      })
      .filter(b => {
        return b._id === id
      })

    this.setState({
      editingItem
    })
  }

  deleteItem = id => {
    let newItemsState = this.state.item
      .map(b => {
        return b
      })
      .filter(b => {
        return b._id !== id
      })

    fetch('/api/item/' + id, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    }).then()

    this.setState({
      item: newItemsState
    })
  }
  closeModal = () => {
    this.setState({
      isModalOpen: false,
      editItem: false
    })
  }
  fetchItemDataNow = () => {
    fetch('/api/item')
      .then(res => res.json())
      .then(data =>
        this.setState({
          item: data.data,
          loading: false
        })
      )

    this.handleIsLogged()
  }
  componentWillMount = () => {
    this.handleIsLogged()
  }

  componentDidMount = () => {
    this.handleIsLogged()
    if (!this.state.fetchItemData && this.state.isLogged) {
      fetch('/api/item')
        .then(res => res.json())
        .then(data =>
          this.setState({
            item: data.data,
            loading: false,
            fetchItemData: true
          })
        )
    }
  }

  handleIsLogged = () => {
    if (this.Auth.loggedIn()) {
      this.setState({ isLogged: true })
    } else this.setState({ isLogged: false })
  }
  handleLogout = () => {
    Auth.logout()
    this.setState({
      appFromMyProfile: null,
      filterString: '',
      isLogged: false,
      item: [],
      editingItem: [],
      fetchItemData: false,
      isModalOpen: false,
      editItem: false,
      loading: true
    })
    this.handleIsLogged()
  }
  onFilterChange = event => {
    const value = event.currentTarget.value

    this.setState({
      filterString: value
    })
  }

  render() {
    const { isModalOpen, isLogged } = this.state

    const contextElements = {
      ...this.state,
      handleLogout: this.handleLogout,
      handleFormSubmit: this.handleFormSubmit,
      handleSubmitNewItem: this.handleSubmitNewItem,
      handleSubmitEditItem: this.handleSubmitEditItem,
      openModalEditItem: this.openModalEditItem,
      deleteItem: this.deleteItem,
      openModalAddItem: this.openModalAddItem,
      onFilterChange: this.onFilterChange
    }
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header isLogged={isLogged} handleLogoutFunc={this.handleLogout} />
          <Switch>
            {isLogged ? (
              <>
                <Route path="/" exact component={HomeView} />
                <Redirect exact from="/register" to="/" />
              </>
            ) : (
              <>
                <Route path="/" exact component={LoginFirst} />
                <Route path="/login" exact component={FormLogin} />
                <Route path="/register" exact component={FormRegister} />
              </>
            )}
          </Switch>

          {isModalOpen && (
            <Modal
              closeModalFn={this.closeModal}
              editItem={this.state.editItem}
              editingItem={this.state.editingItem}
            />
          )}
          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}
export default App
