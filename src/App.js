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
import STORE from './STORE'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      loggedIn: false,
      username: STORE.username,
      lists: STORE.lists,
      items: STORE.items
    }
  }

  static contextType = TripListContext

  handleLogIn = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  handleSetToken = token => {
    const tokenValue = Object.values(token)
    const headerToken = tokenValue.toString()
    window.localStorage.setItem('Authorization', headerToken)
    const storedToken = window.localStorage.Authorization
    
    const options = {
      method: 'Get',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${storedToken}` 
      }
    }

    fetch(`${config.API_ENDPOINT}/api/verifyLists`, options)
      .then(res => {
        if (!res.ok) {
            return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then( data => {
        this.setState({
          username: data[0].username,
          lists: data
        }) 
        console.log(data[0].username, 'end of verifyLists')
      })


  }

  handleLogout = (user) => {
    console.log('log out', user)    
    this.setState({
      username: STORE.username,
      lists: STORE.lists,
      items: STORE.items
    })
  }

  handleSetLists = (setLists) => {
    this.setState({
      lists: setLists
    })
  }

  handleSetItems = (setItems) => {
    this.setState({
      lists: setItems
    })
  }

  handleSetUsername = (username) => {
    //------> set username
    console.log(username)
    const getName = username[0]
    const usernameValue = Object.values(getName)
    const nameString = usernameValue.toString()
    console.log(nameString)
    this.setState({
      username: nameString
    })

    //-----> get & set user lists

    console.log("username set...get lists")
    const user = { username: this.state.username}
    
    const options = {
      method: 'POST', 
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_TOKEN}` 
      },
      body: JSON.stringify(user)
    }
    fetch(`${config.API_ENDPOINT}/api/userLists`, options)
      .then(res => {
        if (!res.ok) {
            return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then( res => {
        this.setState({
          lists: res
        }) 
        console.log(res, 'end of fetch for lists')
      })
      //.then(res => console.log(res))
      //.then(console.log('end of fetch for lists'))

      //-------> get & set user items

      fetch(`${config.API_ENDPOINT}/api/userItems`, options)
      .then(res => {
        if (!res.ok) {
            return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then( res => {
        this.setState({
          items: res
        }) 
        console.log(res, 'end of fetch for items')
      })
      //.then(res => console.log(res))
      //.then(console.log('end of fetch for items')) 
      
      // this.setState({
      //   homePageTrigger: this.props.history.push('/home')
      // })
      //console.log(this.props.history.push('/home'))

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
          console.log(res)
        })
  }

  handleDeleteList = (list) => {
      console.log('delete list on app.js', list)
      let newList = this.state.lists.filter( lst => lst.id !== list)
      console.log(newList)
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
        console.log(res)
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
      setToken: this.handleSetToken,
      username: this.state.username,
      lists: this.state.lists,
      setLists: this.handleSetLists,
      items: this.state.items,
      logout: this.handleLogout,
      loggedIn: this.handleLogIn,
      setItems: this.handleSetItems,
      addItem: this.handleAddItem, 
      deleteItem: this.handleDeleteItem, 
      addList: this.handleAddList, 
      deleteList: this.handleDeleteList
    }

    console.log(this.state.loggedIn)
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