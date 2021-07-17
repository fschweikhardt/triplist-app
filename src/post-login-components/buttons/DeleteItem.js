import React from 'react'
import config from '../../config'
import TripListContext from '../../TripListContext'

export default class DeleteItem extends React.Component {

    static contextType = TripListContext

    handleDeleteItem = (item_id) => {
        
        const storedToken = window.localStorage.Authorization

        const deleteItem = {
            item_id: item_id
        }

        const options = { 
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${storedToken}` 
              },
            body: JSON.stringify(deleteItem)
        }

        fetch(`${config.API_BASE_URL}/api/items`, options)
            .catch(err => {
                console.error({ err })
            }) 

        this.context.deleteItem(item_id)
        
    }

    render() {

        const { item_id } = this.props

        return (
            <button
                className='btn-del'
                type='button'
                name='deleteItem'
                id='deleteItem'
                onClick={()=> this.handleDeleteItem(item_id)}
            >
                DELETE PLACE
            </button>
        )
    }
}