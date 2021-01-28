import React from 'react'
import Item from './Item'
import DeleteList from './buttons/DeleteList'
import TripListContext from './TripListContext'
import config from './config'


export default class List extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            hide: true
        }
    }

    static contextType = TripListContext
    
    toggleExpandButton = () => 
        this.setState(prevState => ({
            hide: !prevState.hide
        }))

    handleAddItem = (e) => {
        e.preventDefault()
        const item = {
            name: e.target.newItem.value,
            list_id: this.props.id
        }
        this.context.addItem(item)
        e.target.reset()
    }

    handleDeleteItem = (item_id) => {
        console.log('delete item on list.js', item_id)
        
        const deleteItem = {
            item_id: item_id
        }
        const options = { 
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_TOKEN}` 
              },
            body: JSON.stringify(deleteItem)
        }
        fetch(`${config.API_ENDPOINT}/api/items`, options)
            .then(this.context.deleteItem(item_id))
            .catch(error => {
                console.error({ error })
            }) 
    }

    render() {

        const list = this.props.id
        const items = this.context.items
        const itemsToList = items.filter( i => i.list_id === list)

        const hidden = 
            <div>
                <br />
                <h3>
                    {this.props.title}
                    <button
                        onClick={this.toggleExpandButton}
                        >
                        hide/expand
                    </button>
                </h3>
            </div>

        const expanded = 
            <div>
                <br />
                <h3>
                    {this.props.title}
                    <button
                        onClick={this.toggleExpandButton}
                    >
                        hide/expand
                    </button>
                </h3>
                <ul>
                    {itemsToList.map( (item ) => {
                        return (
                            <li key={item.item_id}>
                                <br />
                                <Item
                                    name={item.name} 
                                    id={item.item_id}
                                />
                                <button
                                    type='button'
                                    name='deleteItem'
                                    id='deleteItem'
                                    onClick={()=> this.handleDeleteItem(item.item_id)}
                                >
                                    delete
                                </button>
                                <br />
                            </li>
                            )
                        })}
                </ul>
                <br />
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
                <br />
                <br />
                <DeleteList 
                    id={this.props.id}
                />
                <br />
                <br />
            </div>
            
        if (this.state.hide === false) {
            return expanded
        } 
        return hidden
    }
}