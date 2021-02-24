import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from '../pre-login-components/LandingPage'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LandingPage />, div)
})

