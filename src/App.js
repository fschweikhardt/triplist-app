import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
import Welcome from './Welcome'
import Home from './Home'

class App extends React.Component {

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
          <Route 
            path='/home'
            component={Home}
          />
        </Switch>
      </div>
    )
  }
}

export default App