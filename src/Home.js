import React from 'react'
import './App.css'
import TripListContext from './TripListContext'
import DisplayLists from './DisplayLists'


export default class Home extends React.Component {

    static contextType = TripListContext

    render() {
        
    return (

            <div>
                <header>
                    TripList
                </header>
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