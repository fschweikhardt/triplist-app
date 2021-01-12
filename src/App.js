import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TripListContext from './TripListContext'
import './App.css'
import LandingPage from './LandingPage'
import Welcome from './Welcome'
import Home from './Home'
import config from './config'
import { v4 as uuidv4 } from 'uuid'
//import STORE from './STORE'

class App extends React.Component {
 
    state = {
        //loggedin: false, 
        username: 'guest',
        lists: '',
        //items: STORE.items,
    }

  static contextType = TripListContext


  handleSetUsername = (username) => {
    const getName = username[0]
    const usernameValue = Object.values(getName)
    this.setState({
      username: usernameValue
    })
  }

  componentDidMount() {
    console.log("component did mount")
    
    const options = {
      method: 'POST', 
      headers: {
        'content-type': 'application/json',
      //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
      },
      body: JSON.stringify(this.state.username)
    }
    console.log(this.state.username)
    fetch(`${config.API_ENDPOINT}/userList`, options)
      .then(res => {
        if (!res.ok) {
            return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(res => console.log(res))
    //   .then( lists => {
    //     this.setState({lists});
    // })
  }

  handleAddItem = (item, listId) => {
      console.log('addItem on home.js', item, listId)
      let newItem = {
          name: item,
          itemId: uuidv4(),
          listId: listId 
      }
      this.setState({
          items: [...this.state.items, newItem]
      })
  }

  handleDeleteItem = (itemId) => {
      console.log('delete item on home.js', itemId)
      const removedItem = this.state.items.filter( itm => itm.itemId !== itemId)
      this.setState({
          items: removedItem
      })
  }

  handleAddList = (newList) => {
      console.log(newList)
      let list = {
          id: uuidv4(),
          title: newList
      }
      this.setState({
          lists: [...this.state.lists, list]
      })
  }

  handleDeleteList = (list) => {
      console.log(list)
      let newList = this.state.lists.filter( lst => lst.id !== list)
      console.log(newList)
      this.setState({
          lists: newList
      })
  }

  render() {

    const value = {
      setUsername: this.handleSetUsername,
      username: this.state.username,
      lists: this.state.lists,
      items: this.state.items,
      addItem: this.handleAddItem, 
      deleteItem: this.handleDeleteItem, 
      addList: this.handleAddList, 
      deleteList: this.handleDeleteList
    }

    console.log(this.state.username)
    console.log(this.state.lists)
    //console.log(this.state.items)
    
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