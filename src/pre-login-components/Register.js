import React from 'react'
import '../App.css'
import TripListContext from '../TripListContext'
import logo from '../images/logo.png'
import config from '../config'
// import { getByTitle } from '@testing-library/react'

export default class Register extends React.Component{

    static contextType = TripListContext

    state = {
        passwordValidation: {
            value: undefined,
            touched: false,
        }
    }

    updatePassword = e => {
        this.setState({
            passwordValidation: {
                value: e, 
                touched: true
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.passwordValidation.value.length < 4) {
           return alert("that's hackable")
        }

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

        fetch(`${config.API_BASE_URL}/api/register`, options)
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

    //-----> validation

    validatePassword() {
        let password = this.state.passwordValidation.value.trim()
        if (password.length < 4) {
            return (
                <div>ENTER A LONGER PASSWORD</div>
            )
        } else return
    }

    // validateTitle() {
    //     let title = this.state.title.value.trim()
    //     if ( title.length === 0 ) {
    //         return 'Enter a folder title'
    //     } else if ( title.length < 4 ) {
    //         return 'Enter a longer title'
    //     }
    // }

    // <input 
    //     type='text' 
    //     name='title' 
    //     id='title'
    //     onChange={(e)=> this.updateName(e.target.value)}
    //     required
    // />
    //     {this.state.title.touched && <ValidationError message={nameError} />}

    //-----> validation end


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
                    <label htmlFor='email'>
                        Email
                        <input
                            type='email'
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
                    <label htmlFor='password'>
                        Create Password
                        <input
                            type='password'
                            id='password'
                            name='password'
                            onChange={e => this.updatePassword(e.target.value)}
                            required
                        >
                        </input>
                    </label>
                    {this.state.passwordValidation.touched && this.validatePassword()}
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