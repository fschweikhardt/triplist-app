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
                //'Authorization': `Bearer ${config.API_TOKEN}` 
            },
            body: JSON.stringify(newUser)
        }

        fetch(`${config.API_ENDPOINT}/users`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            //.then(this.props.history.push('/welcome/login'))
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
                    Sign up
                </h2>
                <label>
                    email
                    <input
                        type='text'
                        id='email'
                        name='email'>
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
                <button
                    onClick={()=>this.props.history.goBack()}>
                    GO BACK
                </button>  
                </form>
            </div>
        )
    }
}