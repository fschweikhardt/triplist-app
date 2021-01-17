import React from 'react'
import './App.css'
//import { Link } from 'react-router-dom'
import TripListContext from './TripListContext'
import config from './config'

export default class Register extends React.Component{

    static contextType = TripListContext

    handleSubmit = (e) => {
        e.preventDefault()
       // this.props.getUsername(e.target.username.value)

        const newUser = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value
        }

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}` 
            },
            body: JSON.stringify(newUser)
        }

        fetch(`${config.API_ENDPOINT}/register`, options)
            .then(res => {
                if (!res.ok) {
                    alert('Choose a different username')
                    return res.json().then(e => Promise.reject(e))
                } else {
                this.props.history.push('/login')
                return res.json()
                
                }
            })
            .catch(error => {
                console.error({ error })
            }) 

        e.target.reset()
        //.thenthis.props.push('/login')
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>
                    Sign up
                </h2>
                <label>
                    email
                    <input
                        type='text'
                        id='email'
                        name='email'
                        defaultValue='use default'>
                    </input>
                </label>
                <br />
                <label htmlFor='username'>
                    create username
                    <input
                        type='text'
                        id='username'
                        name='username'
                        >
                    </input>
                </label>
                <br />
                <label>
                    create password
                    <input
                        type='text'
                        id='password'
                        name='password'
                        defaultValue='password'
                    >
                    </input>
                </label>
                <br />
                <button
                    type='submit'
                >
                    Submit
                </button>
                <br />    
                </form>
                <p>After clicking submit, click LOGIN</p>
                <button
                    onClick={()=>this.props.history.push('/login')}>
                    LOGIN
                </button> 
            </div>
        )
    }
}