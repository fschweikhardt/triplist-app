import React from 'react'
import TripListContext from '../TripListContext'
import './Header.css'

export default class Header extends React.Component {

    static contextType = TripListContext

    render() {

        return(
            <header className='Header'>
                <h1>
                    Hello, {this.context.username}
                </h1>
            </header>
        )
    }
}