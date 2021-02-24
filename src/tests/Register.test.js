import React from 'react'
import ReactDOM from 'react-dom'
import Register from '../pre-login-components/Register'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Register />, div)
})
