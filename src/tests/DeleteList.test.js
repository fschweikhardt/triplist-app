import React from 'react'
import ReactDOM from 'react-dom'
import DeleteList from '../post-login-components/buttons/DeleteList'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeleteList />, div)
})
