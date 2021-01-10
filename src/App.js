import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
import Welcome from './Welcome'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        username: ''
      }
    }
  

  

  handleGetUsername = (username) => {
    console.log(username)
    this.setState({
      username: username
    })
  }

  render() {

    return (
      <div className="App">
        <Switch>

          <Route 
            exact path='/'
            component={LandingPage}
          />

          <Route path='/welcome'>
            <Welcome 
              getUsername={this.handleGetUsername}
            />
          </Route>

          <Route path='/home' >
            <Home 
              username={this.state.username}
            />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App