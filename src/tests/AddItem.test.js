import React from 'react'
import ReactDOM from 'react-dom'
import AddItem from '../post-login-components/buttons/AddItem'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddItem />, div)
})
