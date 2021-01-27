import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TripListContext from './TripListContext'
import './App.css'
import LandingPage from './LandingPage'
import Welcome from './Welcome'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import config from './config'

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
      console.log('addlist on app.js', newList)
      
      const options = {
        method: 'POST', 
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${config.API_TOKEN}` 
          },
        body: JSON.stringify(newList)
    }
    fetch(`${config.API_ENDPOINT}/api/lists`, options)
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(res => {
            this.setState({
              lists: [...this.state.lists, res]
          })
        })
  }

  handleDeleteList = (list) => {
      console.log('delete list on app.js', list)
      let newList = this.state.lists.filter( lst => lst.id !== list)
      this.setState({
          lists: newList
      })
  }

  handleAddItem = (item) => {
    console.log('addItem on home.js', item)

    const options = {
      method: 'POST', 
      headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_TOKEN}` 
        },
      body: JSON.stringify(item)
  }
    fetch(`${config.API_ENDPOINT}/api/items`, options)
      .then(res => {
          if (!res.ok) {
              return res.json().then(e => Promise.reject(e))
          }
          return res.json()
      })
      .then(res => {
          this.setState({
            items: [...this.state.items, res]
        })
      }) 
}

handleDeleteItem = (item_id) => {
    console.log('delete item on home.js', item_id)
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

    console.log(this.state.username)
    console.log(this.state.lists)
    console.log(this.state.items)
    
    return (
      <TripListContext.Provider value={value}>
        <div className="App">
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