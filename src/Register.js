import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default class Register extends React.Component{
    // constructor(props) {
    //     super(props)
    // }

    state = {
        updateUsername: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.password.value)
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
                    <input>
                    </input>
                </label>
                <br />
                <label htmlFor='username'>
                    create username
                    <input
                        type='text'
                        id='username'
                        name='username'
                        onChange={()=>this.props.getUsername("jake")}>
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
                    type='submit'>
                    <Link to='/home'>
                    Create Account
                    </Link>
                </button>
                <br />    
                <button>
                    Cancel
                </button>  
                </form>
            </div>
        )
    }
}