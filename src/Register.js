import React from 'react'
import './App.css'

export default function Register() {

    return (
        <div>
            <h2>
                Sign up
            </h2>
            <label>
                email
                <input>
                </input>
            </label>
            <br />
            <label>
                create username
                <input>
                </input>
            </label>
            <br />
            <label>
                create password
                <input>
                </input>
            </label>
            <br />
            <button>
                Create Account
            </button>
            <br />    
            <button>
                Cancel
            </button>  
        </div>
    )
}