import React from 'react'
import '../App.css'
import { Route, Switch } from 'react-router-dom'
import logo from '../images/logo.png'
import Login from './Login'
import Register from './Register'

export default function Welcome(props) {

    function register() {
        props.history.push('/register')
    }

    function login() {
        props.history.push('login')
    }

    return (
        <div>
            <Switch>
                <Route path='/welcome'>
                    <div>
                        <img 
                            className='logo-setup item'
                            src={logo} 
                            alt='logo' 
                            width='auto'
                            height='auto'
                        />
                        <section className='item'>
                            <h2 style={{color: 'rgb(35,90,135)', fontWeight: 'bold'}}>
                                Log In
                            </h2>
                            <button onClick={login}>
                                LOG IN
                            </button>
                        </section>
                        <br />
                        <br />
                        <section>
                            <h2 style={{color: 'rgb(35,90,135)', fontWeight: 'bold'}}>
                                Register
                            </h2>
                            <button onClick={register}>
                                REGISTER
                            </button>
                            <h2 style={{color: 'rgb(35,90,135)', fontWeight: 'bold', marginTop: '40px'}}>
                                Demo Account
                            </h2>
                            <p>to access the demo account click 'LOG IN'</p>
                        </section>
                    </div>
                </Route>

                <Route 
                    path='/login'
                    component={Login}
                />

                <Route 
                    path='/register'
                    component={Register}
                />

            </Switch>
        </div>
    )
}