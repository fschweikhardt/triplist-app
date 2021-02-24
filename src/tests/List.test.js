import React from 'react'
import ReactDOM from 'react-dom'
import List from '../post-login-components/List'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<List />, div)
})
