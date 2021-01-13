import React from 'react'
import { Link } from 'react-router-dom'
import TripListContext from './TripListContext'
import config from './config'

export default class WelcomeList extends React.Component { 
    static contextType = TripListContext

    handleSubmit = (e) => {
        //e.preventDefault()

        const user = {username: 'guest'}
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
            },
            body: JSON.stringify(user)
        }

        fetch(`${config.API_ENDPOINT}/user`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then( username => {
                this.context.setUsername(username)
                console.log(username)
                //this.props.history.push('/home')
            })
            .catch(error => {
                console.error({ error })
            }) 
    }

    render() {
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
                    <button
                        onClick={this.handleSubmit}
                        >
                            Enter as Guest
                        {/* <Link to='/home'>
                            TRY AS GUEST
                        </Link> */}
                    </button>
                </section>
                <button>   
                    <Link to='/home'>
                        Home
                    </Link>
                </button>
            </div>
    )
}
}