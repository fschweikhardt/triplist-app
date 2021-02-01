import React from 'react'
import '../App.css'
import TripListContext from '../TripListContext'
import DisplayLists from './DisplayLists'
import Header from './Header'
import config from '../config'
//import Footer from './Footer'

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
                .then(data => {
                    this.context.setUsername(data)
                 })
                .catch(err => {
                    console.error({ err })
                })
        
            fetch(`${config.API_ENDPOINT}/api/verifyLists`, options)
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(e => Promise.reject(e))
                    }
                    return res.json()
                })
                .then(data => {
                    this.context.setLists(data) 
                })
                .catch(err => {
                    console.error({ err })
                })

            fetch(`${config.API_ENDPOINT}/api/verifyItems`, options)
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(e => Promise.reject(e))
                    }
                    return res.json()
                })
                .then(data => {
                    this.context.setItems(data) 
                    this.setState({
                        loggedIn: true
                })
                //---------> throws error; don't know why
                // .catch(err => {
                //     console.error({ err })
                // })
            })
        }

    return (
            <div>
                <Header />
                <main>
                    <DisplayLists />
                </main>
                <footer style={{backgroundColor: "#F8F8FF"}}>
                <br />
                <h1>
                    TripList
                </h1>
                <button
                    onClick={this.handleLogout}
                >
                    LOG OUT
                </button>
            </footer>
            </div>
        )
    }
}