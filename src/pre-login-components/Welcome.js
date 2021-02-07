import React from 'react'
import '../App.css'
import { Link, Route, Switch } from 'react-router-dom'
import logo from '../images/logo.png'
import Login from './Login'
import Register from './Register'

export default function Welcome() {
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
                            <h2>Log In</h2>
                            <button>
                                <Link to='/login'>
                                    LOG IN
                                </Link>
                            </button>
                        </section>
                        <section>
                            <h2>Register</h2>
                            <button>
                                <Link to='/register'>
                                    REGISTER
                                </Link>
                            </button>
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