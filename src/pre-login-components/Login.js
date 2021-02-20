import React from 'react'
import '../App.css'
import logo from '../images/logo.png'
import config from '../config'
import TripListContext from '../TripListContext'

export default class Login extends React.Component {

    static contextType = TripListContext

    handleSubmit = (e) => {
        e.preventDefault()

        const userLogin = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const usernameOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}` 
            },
            body: JSON.stringify(userLogin)
        }

        fetch(`${config.API_ENDPOINT}/api/login`, usernameOptions)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then( token => {
                const tokenValue = Object.values(token)
                const headerToken = tokenValue.toString()
                window.localStorage.setItem('Authorization', headerToken)
                this.props.history.push('/home')
            })
            .catch(err => {
                console.error({ err })
                alert('try again please')
            }) 
        
        e.target.reset()
    }

    render() {
        
    return (
        <div className='group login'>
            <img 
                className='logo-setup item'
                src={logo} 
                alt='logo' 
                width='100%'
                height='auto'
            />
            <form onSubmit={this.handleSubmit} className='item form-container'>
                <h2 style={{color: 'rgb(35,90,135)', fontWeight: 'bold'}}>
                    LOG IN
                </h2>
                <br />
                <br />
                <label>
                    Username
                    <input
                        type='text'
                        id='username'
                        name='username'
                        required>
                    </input>
                </label>
                <br />
                <label>
                    Password
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
                    type='submit'>
                    SUBMIT
                </button>
                <br /> 
                <h2 style={{marginTop: '30px'}}>
                Demo Account
                </h2>
                <p>
                    Username: demo
                    <br />
                    Password: demo
                </p>
            </form>
        </div>
    )
}
}