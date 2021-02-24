import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../pre-login-components/Login'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Login />, div)
})
