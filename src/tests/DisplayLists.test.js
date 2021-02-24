import React from 'react'
import ReactDOM from 'react-dom'
import DisplayLists from '../post-login-components/DisplayLists'

it('smoke test', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DisplayLists />, div)
})
