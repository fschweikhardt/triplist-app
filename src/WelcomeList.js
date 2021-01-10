import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeList(props) { 
    return (
        <div>
                <section>
                    <h2>Log In</h2>
                    <button>
                        <Link to='/welcome/login'>
                            LOG IN
                        </Link>
                    </button>
                </section>

                <section>
                    <h2>Register</h2>
                    <button>
                        <Link to='/welcome/register'>
                            REGISTER
                        </Link>
                    </button>
                </section>

                <section>
                    <h2>Try as guest</h2>
                    <button>
                        <Link to='/home'>
                            TRY AS GUEST
                        </Link>
                    </button>
                </section>
            </div>
    )
}