import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Welcome from '../pre-login-components/Welcome'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
        <Welcome />
    </BrowserRouter>, 
    div)
})
