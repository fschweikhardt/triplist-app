import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Switch>
          <Route
            path='/'
            component={LandingPage}
          />
        </Switch>
      </div>
    )
  }
}

export default App