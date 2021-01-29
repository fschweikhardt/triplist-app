import React from 'react'
import config from '../config'
import TripListContext from '../TripListContext'

export default class DeleteList extends React.Component {
    
    static contextType = TripListContext

    handleDeleteList = () => {
        
        const list = this.props.id
        const items = this.context.items
        const itemsToList = items.filter( i => i.list_id === list)
        
        if (itemsToList.length !== 0) {
            return alert("Cannot delete a list containing items")
        }

        const deleteList = {
            id: list
        }

        const options = { 
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}` 
              },
            body: JSON.stringify(deleteList)
        }

        fetch(`${config.API_ENDPOINT}/api/lists`, options)
            .catch(err => {
                console.error({ err })
            })  
        
        this.context.deleteList(list)
    }

    render() {

        return (
            <button
                onClick={this.handleDeleteList}>
                Delete list
            </button>
        )
    }
}