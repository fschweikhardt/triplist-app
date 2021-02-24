import React from 'react'
import ReactDOM from 'react-dom'
import AddList from '../post-login-components/buttons/AddList'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddList />, div)
})
