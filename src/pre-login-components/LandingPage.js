import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export default function LandingPage() {

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
          <h1>
            Store all your trip ideas in one place
          </h1>
          <Link to='/welcome'>
              GET STARTED
          </Link>
          <p>Create different travel lists for your different types of trips. (eg. with partner, with in-laws, with friends...)
          </p>
          <br />
        </main>
      </div>
    )
  }