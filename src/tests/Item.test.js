import React from 'react'
import ReactDOM from 'react-dom'
import Item from '../post-login-components/Item'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Item />, div)
})
