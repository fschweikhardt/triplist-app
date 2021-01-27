import React from 'react'
import './App.css'
import TripListContext from './TripListContext'
import DisplayLists from './DisplayLists'
import config from './config'


export default class Home extends React.Component {

    state = {
        loggedIn: false
    }

    static contextType = TripListContext

    handleLogout = () => {
        localStorage.clear()
        this.props.history.push('/')
    }

    render() {

        if (!this.state.loggedIn) {

            const storedToken = window.localStorage.Authorization

            const options = {
                method: 'GET',
                headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${storedToken}` 
                }
            }

            fetch(`${config.API_ENDPOINT}/api/verifyId`, options)
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(e => Promise.reject(e))
                    }
                    return res.json()
                })
                .then( data => {
                    this.context.setUsername(data)
            })
        
            fetch(`${config.API_ENDPOINT}/api/verifyLists`, options)
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(e => Promise.reject(e))
                    }
                    return res.json()
                })
                .then( data => {
                    this.context.setLists(data) 
            })

            fetch(`${config.API_ENDPOINT}/api/verifyItems`, options)
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(e => Promise.reject(e))
                    }
                    return res.json()
                })
                .then( data => {
                    this.context.setItems(data) 
                    this.setState({
                        loggedIn: true
                    })
            })
        }

    return (
        
            <div>
                <header>
                    TripList
                </header>
                <nav>
                    <button
                        onClick={this.handleLogout}
                    >
                        LOG OUT
                    </button>
                </nav>
                <main>
                    <h1>
                         Hello, {this.context.username}!
                    </h1>
                    <hr />
                    <hr />
                    <DisplayLists />
                </main>
            </div>
        )
    }
}