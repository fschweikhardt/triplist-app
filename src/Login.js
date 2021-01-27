import React from 'react'
import './App.css'
import config from './config'
import TripListContext from './TripListContext'

export default class Login extends React.Component {

    static contextType = TripListContext

    handleSubmit = (e) => {
        e.preventDefault()

        const userLogin = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const usernameOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}` 
            },
            body: JSON.stringify(userLogin)
        }

        fetch(`${config.API_ENDPOINT}/api/login`, usernameOptions)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then( token => {
                const tokenValue = Object.values(token)
                const headerToken = tokenValue.toString()
                window.localStorage.setItem('Authorization', headerToken)
                
                this.props.history.push('/home')
            })
            .catch(error => {
                console.error({ error })
                alert('try again please')
            }) 
        
        e.target.reset()
    }

    render() {
        
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <h2>
                    Log in
                </h2>
                <label>
                    username
                    <input
                        type='text'
                        id='username'
                        name='username'
                        required>
                    </input>
                </label>
                <br />
                <label>
                    password
                    <input
                        type='text'
                        id='password'
                        name='password'
                        defaultValue='password'
                        required
                        >
                    </input>
                </label>
                <br />
                <button
                    type='submit'>
                    SUBMIT
                </button>
                <br /> 
            </form>  
        </div>
    )
}
}