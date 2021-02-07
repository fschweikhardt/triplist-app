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
        <main className='item' style={{paddingTop: '10px'}}>
          <h1>
            Store your trip ideas in one place
          </h1>
          <br />
          <button onClick={handlePush}>
            GET STARTED
          </button>
          <br />
          <br />
          <p>Create different travel lists for your different types of trips. (eg. with partner, with in-laws, with friends...)
          </p>
          <br />
        </main>
      </div>
    )
  }