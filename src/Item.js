import React from 'react'
import config from './config'

export default class Item extends React.Component {

    state = {
        photo: ''
    }

    componentDidMount() {

        let place = this.props.name
        let baseUrl = 'https://api.pexels.com/v1/search?'

        fetch(`${baseUrl}orientation=landscape&per_page=1&query=${place}`,{
            headers: {
                Authorization: `${config.IMG_KEY}`
            }
        })
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            this.setState({
                photo: data.photos[0].src.small
            })
        })
        .catch(err => {
            console.log(err)
            alert('no img for this one!')
        })
    }

    render() {

        return (
            <div>
                <p>{this.props.name}</p>
                <img 
                    src={this.state.photo}
                    alt={this.props.name}
                />
            </div>
        )
    }
}