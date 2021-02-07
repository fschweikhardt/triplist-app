import React from 'react'
import TripListContext from '../TripListContext'
import worldMap from '../images/world-map.jpg'

export default class Header extends React.Component {

    static contextType = TripListContext

    render() {

        return(
            <header className='group' style={{backgroundColor: 'rgb(35,90,135,.2)'}}>
                <img 
                    className='item world-map'
                    src={worldMap} 
                    alt='world map' 
                    width='100%' 
                    height='auto'
                />
                <h1 className='item' style={{paddingTop: '20px'}}>
                    Hello, {this.context.username}
                </h1>
            </header>
        )
    }
}