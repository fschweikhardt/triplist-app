import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {

    return (
      <div className="App">
        <header className="Header">
          Trip List / Trippa 
        </header>
          <main>
            <h1>
              Save your trip ideas in one place
            </h1>
            <Link to='/welcome'>
                GET STARTED
            </Link>
            <p>The locations can be saved with different catagories: with partner, with in-laws, with friends.
            </p>
            <br />
            <p>
               You could tag media/links into the saved locations to have a central place for local attractions, accommodation, restaurants. 
            </p>
          </main>
      </div>
    )
  }