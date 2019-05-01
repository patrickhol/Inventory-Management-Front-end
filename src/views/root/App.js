import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import HomeView from '../../components/home-view/home-view'
import AppContext from '../../context'
import './index.css'

class App extends Component {
  state = {
    item: []
  }
  render() {
    const contextElements = {
      ...this.state
    }
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header />
          <Switch>
            <Route path="/" exact component={HomeView} />
          </Switch>

          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}
export default App
