import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../post-login-components/Home'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})
