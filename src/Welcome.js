import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
//import TripListContext from './TripListContext'
import WelcomeList from './WelcomeList'
import Login from './Login'
import Register from './Register'

export default function Welcome(props) {
    
    return (
       
        <div>
            <Switch>
                <Route exact path='/welcome'>
                    <WelcomeList />
                </Route>
                <Route path='/welcome/login'>
                    <Login 
                        getUsername={props.getUsername}
                    />
                </Route>
                <Route path='/welcome/register'>
                    <Register 
                        getUsername={props.getUsername}
                    />
                </Route>
            </Switch>

        </div>
      
    )
}