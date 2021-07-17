import React from 'react'
import config from '../config'

export default class Item extends React.Component {

    state = {
        displayPhoto: '',
        fetchPhotosData: ''
    }

    componentDidMount() {

        let place = this.props.name
        let baseUrl = 'https://api.pexels.com/v1/search?'

        fetch(`${baseUrl}orientation=landscape&per_page=2&query=${place}`, {
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
                displayPhoto: data.photos[0].src.medium
            })
            this.setState({
                fetchPhotosData: data
            })
        })
        .catch(err => {
            console.error({ err })
        })
    }

    handleChangePhoto = () => {
        // const { displayPhoto } = this.state
        const { fetchPhotosData } = this.state
        this.setState({
            displayPhoto: fetchPhotosData.photos[1].src.medium
        })
    }

    render() {
        console.log(this.state.fetchPhotosData)
        
        let imgSize;
        if (window.innerWidth > 800) {
            imgSize = (window.innerWidth / 2 - 100) + 'px'
        } else {
            imgSize = (window.innerWidth - 100) + 'px'
        }

        return (
            <div>
                <h3 style={{
                    padding:'25px', 
                }}>
                    {this.props.name}
                </h3>
                <br />
                {/* <div style={{backgroundImage: this.state.displayPhoto}}> */}
                <img 
                    src={this.state.displayPhoto}
                    alt={this.props.name}
                    width={imgSize}
                    height='auto'
                    onClick={this.handleChangePhoto}
                />
                {/* </div> */}
            </div>
        )
    }
}