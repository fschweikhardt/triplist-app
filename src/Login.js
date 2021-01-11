import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Login(props) {

    return (
        <div>
            <h2>
                Log in
            </h2>
            <label>
                username
                <input>
                </input>
            </label>
            <br />
            <label>
                password
                <input>
                </input>
            </label>
            <br />
            <button
                type='submit'>
                <Link to='/home'>
                Log In
                </Link>
            </button>
            <br />    
            <button
                onClick={()=>props.history.push('/')}>
                GO BACK
            </button> 
        </div>
    )
}