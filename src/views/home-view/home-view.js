import React from 'react'
import AppContext from '../../context'
import HomeList from '../../components/home-list/home-list'

const HomeView = () => (
  <AppContext.Consumer>
    {context => <HomeList item={context.item} />}
  </AppContext.Consumer>
)

export default HomeView
