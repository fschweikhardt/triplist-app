import React from 'react'
import TripListContext from './TripListContext'

export default class LoginUser extends React.Component {
    static contextType = TripListContext
    render() {
        console.log(this.context.homePageTrigger)
    return (
        <div>
            
        </div>
    )
}
}