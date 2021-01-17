import React from 'react'
import './App.css'
import TripListContext from './TripListContext'
import DisplayLists from './DisplayLists'


export default class Home extends React.Component {

    handleLogout = () => {
        this.context.logout('user')
        this.props.history.push('/')
    }

    static contextType = TripListContext

    render() {
        
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