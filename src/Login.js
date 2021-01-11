import React from 'react'
import './App.css'
//import config from './config'

export default class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()

        const userLogin = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        // const usernameLogin = 'tony'
        // const passwordLogin = 'asdf'

        //const { username, password } = e.target.value

        console.log(userLogin.username)

        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'content-type': 'application/json',
        //         //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
        //     },
        //     body: JSON.stringify(newUser)
        // }

        // fetch(`${config.API_ENDPOINT}/users`, options)
        //     .then(res => {
        //         if (!res.ok) {
        //             return res.json().then(e => Promise.reject(e))
        //         }
        //         return res.json()
        //     })
        //     .catch(error => {
        //         console.error({ error })
        //     }) 

        // e.target.reset()
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