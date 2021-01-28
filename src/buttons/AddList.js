import React from 'react'
import TripListContext from '../TripListContext'
import config from '../config'

export default class AddList extends React.Component {
    
    static contextType = TripListContext

    handleAddList = (e) => {
        e.preventDefault()
        console.log('add list on AddList.js', e.target.newList.value)

        const newList = { 
            title: e.target.newList.value,
            username: this.context.username
        }

        const options = {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}` 
            },
            body: JSON.stringify(newList)
        }

        fetch(`${config.API_ENDPOINT}/api/lists`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                this.context.addList(res)
            })
    
        e.target.reset()
    }

    render() {

        return (
            <form onSubmit={this.handleAddList}>
                <label htmlFor='newList'>
                    CREATE NEW LIST
                    <input
                        type='text'
                        name='newList'
                        id='newList'
                        required
                    />
                </label>
                <button
                    type='submit'>
                    SUBMIT
                </button>
            </form>
        )
    }
}