import React from 'react'
import '../App.css'
import logo from '../images/logo.png'
import TripListContext from '../TripListContext'
import DisplayLists from './DisplayLists'
import AddList from './buttons/AddList'
import Header from './Header'
import config from '../config'

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
                    <AddList />
                </main>
                <footer style={{backgroundColor: "rgb(255,255,255", padding: '20px 0'}} className='group'>
                    <img 
                        className='logo-footer item'
                        src={logo} 
                        alt='logo' 
                        width='100%'
                        height='auto'
                    />
                    <div className='item'>
                        <h1>
                            TripList
                        </h1>
                        <button
                            onClick={this.handleLogout}
                        >
                            LOG OUT
                        </button>
                    </div>
                </footer>
            </div>
        )
    }
}