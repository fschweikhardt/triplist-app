import React from 'react'
import '../App.css'
import logo from '../images/logo.png'
import config from '../config'
import TripListContext from '../TripListContext'
import { BeatLoader } from 'react-spinners'

export default class Login extends React.Component {

    static contextType = TripListContext

    state = {
        loading: false
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            loading: true
        })

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

        fetch(`${config.API_BASE_URL}/api/login`, usernameOptions)
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
                this.setState({
                    loading: false
                })
                alert('try again please')
            }) 
        
        e.target.reset()
        // this.setState({
        //     loading: false
        // })
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
            {this.state.loading ? <BeatLoader loading/> : null}
            <form onSubmit={this.handleSubmit} className='item form-container'>
                <h2 style={{color: 'rgb(35,90,135)', fontWeight: 'bold'}}>
                    LOG IN
                </h2>
                <br />
                <br />
                <label htmlFor='username'>
                    Username
                    <input
                        type='text'
                        id='username'
                        name='username'
                        required>
                    </input>
                </label>
                <br />
                <label htmlFor='password'>
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