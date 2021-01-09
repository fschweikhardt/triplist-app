import React from 'react'
import './App.css'
import TripListContext from './TripListContext'
import STORE from './STORE'
import DisplayLists from './DisplayLists'

export default class Home extends React.Component {

    static contextType = TripListContext

    state = {
        //loggedin: false, 
        lists: STORE,
        username: 'John Doe'  
      }

    render() {
        const value = {
            lists: this.state.lists,
            username: this.state.username
        }

        console.log(this.state.lists)
        console.log(this.state.username)
    return (
        <TripListContext.Provider value={value}>
            <div>
                <header>
                    TripList Home Page
                </header>
                <main>
                    <h1>
                        Hello, {this.state.username}
                    </h1>
                    <DisplayLists />
                </main>
            </div>
        </TripListContext.Provider>
        )
    }
}