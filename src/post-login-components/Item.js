import React from 'react'
import config from '../config'

export default class Item extends React.Component {

    state = {
        photo: ''
    }

    componentDidMount() {

        let place = this.props.name
        let baseUrl = 'https://api.pexels.com/v1/search?'

        fetch(`${baseUrl}orientation=landscape&per_page=1&query=${place}`, {
            headers: {
                Authorization: `${config.IMG_KEY}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(data => {
            this.setState({
                photo: data.photos[0].src.medium
            })
        })
        .catch(err => {
            console.error({ err })
        })
    }

    render() {

        return (
            <div>
                <h3 style={{
                    padding:'25px', 
                }}>
                    {this.props.name}</h3>
                <br />
                <img 
                    src={this.state.photo}
                    alt={this.props.name}
                    width='95%'
                    height='350px'
                />
            </div>
        )
    }
}