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

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
            },
            body: JSON.stringify(userLogin)
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
            //.then ( res => console.log(res))
            .catch(error => {
                console.error({ error })
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
                    name='username'>
                </input>
            </label>
            <br />
            <label>
                password
                <input
                    type='text'
                    id='password'
                    name='password'>
                </input>
            </label>
            <br />
            <button
                type='submit'>
                SUBMIT
            </button>
            <br />    
            <button
               // onClick={()=>props.history.push('/')}
            >
                GO BACK
            </button>
            </form> 
        </div>
    )
}
}