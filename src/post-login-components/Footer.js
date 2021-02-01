import React from 'react'

export default class Footer extends React.Component {
    
    handleLogout = () => {
        localStorage.clear()
        this.props.history.push('/')
    }
    
    render() {
        return (
            <footer>
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
        )
    }
}