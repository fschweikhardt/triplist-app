import React from 'react'
import './App.css'

export default function Login() {

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
            <button>
                Log In
            </button>
            <br />    
            <button>
                Cancel
            </button>  
        </div>
    )
}