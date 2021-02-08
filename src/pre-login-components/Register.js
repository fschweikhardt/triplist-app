import React from 'react'
import '../App.css'
import TripListContext from '../TripListContext'
import logo from '../images/logo.png'
import config from '../config'

export default class Register extends React.Component{

    static contextType = TripListContext

    handleSubmit = (e) => {
        e.preventDefault()

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

        fetch(`${config.API_ENDPOINT}/api/register`, options)
            .then(res => {
                if (!res.ok) {
                    alert('Choose a different username')
                    return res.json().then(e => Promise.reject(e))
                } else {
                this.props.history.push('/login')
                return res.json()
                }
            })
            .catch(err => {
                console.error({ err })
            }) 

        e.target.reset()
    }

    render() {

        return (
            <div className='group register'>
                <img 
                    className='logo-setup item'
                    src={logo} 
                    alt='logo' 
                    width='100%'
                    height='auto'
                />
                <form onSubmit={this.handleSubmit} className='item form-container'>
                    <h2 style={{color: 'rgb(35,90,135)', fontWeight: 'bold'}}>
                        SIGN UP
                    </h2>
                    <br />
                    <br />
                    <label>
                        Email
                        <input
                            type='text'
                            id='email'
                            name='email'
                            required
                            >
                        </input>
                    </label>
                    <br />
                    <label htmlFor='username'>
                        Create Username
                        <input
                            type='text'
                            id='username'
                            name='username'
                            required
                            >
                        </input>
                    </label>
                    <br />
                    <label>
                        Create Password
                        <input
                            type='password'
                            id='password'
                            name='password'
                            required
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
            </div>
        )
    }
}