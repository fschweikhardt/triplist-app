import React from 'react'
import './App.css'
import TripListContext from './TripListContext'
import DisplayLists from './DisplayLists'
//import STORE from './STORE'


export default class Home extends React.Component {

    handleLogout = () => {
        this.context.logout('user')
        this.props.history.push('/')
    }

    static contextType = TripListContext

    render() {
        // const resetUser = {
        //     username: STORE.username,
        //     lists: STORE.lists,
        //     items: STORE.items
        // }

    return (

            <div>
                <header>
                    TripList
                </header>
                <nav>
                    <button
                    onClick={this.handleLogout}
                        //onClick={()=>this.context.setUsername('')}
                        
                    >
                        LOG OUT
                    </button>
                </nav>
                <main>
                    <h1>
                         Hello! , {this.context.username}
                    </h1>
                    <DisplayLists />
                </main>
            </div>

        )
    }
}