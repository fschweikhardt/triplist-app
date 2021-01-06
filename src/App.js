import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>the code</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App