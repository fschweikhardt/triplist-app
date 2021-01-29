import React from 'react'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function Welcome() {
    return (
        <div>
            <Switch>
                <Route path='/welcome'>
                    <div>
                        <section>
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