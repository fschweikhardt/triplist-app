import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
import Welcome from './Welcome'

class App extends React.Component {

  state = {
    loggedin: false, 
    username: ''  
  }

  render() {

    return (
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
        </Switch>
      </div>
    )
  }
}

export default App