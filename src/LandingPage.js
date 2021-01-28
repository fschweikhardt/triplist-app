import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {

    return (
      <div className="App">
        <header className="Header">
          TripList
        </header>
          <main>
            <h1>
              Save your trip ideas in one place
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