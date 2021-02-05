import React from 'react'
import { Route, Switch } from 'react-router-dom'
import logo from './images/logo.png'
import TripListContext from './TripListContext'
import './App.css'
import LandingPage from './pre-login-components/LandingPage'
import Welcome from './pre-login-components/Welcome'
import Login from './pre-login-components/Login'
import Register from './pre-login-components/Register'
import Home from './post-login-components/Home'

class App extends React.Component {

  state = {
    username: 'no one',
    lists: [],
    items: []
  }

  static contextType = TripListContext

  handleSetUsername = username => {
    this.setState({
      username: username
    })
  }

  handleSetLists = (setLists) => {
      this.setState({
          lists: setLists
      })
  }

  handleSetItems = (setItems) => {
      this.setState({
          items: setItems
      })
  }

  handleAddList = (newList) => {
    this.setState({
      lists: [...this.state.lists, newList]
    })
  }

  handleDeleteList = (list) => {
      let newList = this.state.lists.filter( lst => lst.id !== list)
      this.setState({
          lists: newList
      })
  }

  handleAddItem = (item) => {
    this.setState({
      items: [...this.state.items, item]
    })
}

  handleDeleteItem = (item_id) => {
    const removedItem = this.state.items.filter( itm => itm.item_id !== item_id)
    this.setState({
        items: removedItem
    })
}

  render() {

    const value = {
      setUsername: this.handleSetUsername,
      username: this.state.username,
      setLists: this.handleSetLists,
      lists: this.state.lists,
      setItems: this.handleSetItems,
      items: this.state.items,
      addList: this.handleAddList, 
      deleteList: this.handleDeleteList,
      addItem: this.handleAddItem, 
      deleteItem: this.handleDeleteItem, 
    }
    
    return (
      <TripListContext.Provider value={value}>
        <div>
          <img 
            className='logo-top'
            src={logo} 
            alt='logo' 
            width='100%'
            height='auto'
          />
          <Switch>
            <Route 
              exact path='/'
              component={LandingPage}
            />
            <Route 
              path='/welcome'
              component={Welcome} 
            />
            <Route 
              path='/login' 
              component={Login}
            />
            <Route 
              path='/register' 
              component={Register}
            />
            <Route 
              path='/home' 
              component={Home}
            />
          </Switch>
        </div>
      </TripListContext.Provider>
    )
  }
}

export default App