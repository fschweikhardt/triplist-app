import React from 'react'
import ReactDOM from 'react-dom'
import DeleteItem from '../post-login-components/buttons/DeleteItem'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DeleteItem />, div)
})
