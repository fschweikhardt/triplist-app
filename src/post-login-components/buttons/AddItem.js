import React from 'react'
import config from '../../config'
import TripListContext from '../../TripListContext'

export default class AddItem extends React.Component {

    static contextType = TripListContext
   
    handleAddItem = (e) => {
        e.preventDefault()
        
        const storedToken = window.localStorage.Authorization

        const item = {
            name: e.target.newItem.value,
            list_id: this.props.id
        }
        
        const options = {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${storedToken}` 
              },
            body: JSON.stringify(item)
        }
          fetch(`${config.API_ENDPOINT}/api/items`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                this.context.addItem(res)
            })
            .catch(err => {
                console.error({ err })
            })
        
        e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleAddItem}>
                    <label htmlFor='newItem'>
                        add place
                        <input
                            type='text'
                            name='newItem'
                            id='newItem'
                            required
                        />
                    </label>
                    <button
                        type='submit'>
                        GO
                    </button>
                </form>
        )
    }
}