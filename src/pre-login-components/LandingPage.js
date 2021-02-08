import React from 'react'
import logo from '../images/logo.png'

export default function LandingPage(props) {
    function handlePush() {
      props.history.push('/welcome')
    }
    return (
      <div className='group landing-page'>
        <img 
            className='logo-setup item'
            src={logo} 
            alt='logo' 
            width='100%'
            height='auto'
          />
        <main className='item'>
          <h1 style={{fontStyle: 'italic', color: 'rgb(35,90,135)'}}>
            Store your trip ideas in one place
          </h1>
          <br />
          <button onClick={handlePush}>
            GET STARTED
          </button>
          <br />
          <br />
        </main>
      </div>
    )
  }