import React from 'react'
import Item from './Item'
import TripListContext from './TripListContext'

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

    handleAddItem = (e, listId) => {
        e.preventDefault()
        console.log(e.target.newItem.value, listId)
        this.context.addItem(e.target.newItem.value, listId)
        e.target.reset()
    }

    handleDeleteItem = (itemId) => {
        console.log('delete item on list.js', itemId)
        this.context.deleteItem(itemId)
    }

    handleDeleteList = () => {
        console.log('delete list on list.js')
    }

    render() {

        const list = this.props.id
        const items = this.context.items
        const itemsToList = items.filter( i => i.listId === list)

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
                            <li key={item.itemId}>
                                <br />
                                <Item
                                    name={item.name} 
                                    id={item.itemId}
                                />
                                {/* <button>
                                    edit
                                </button> */}
                                <button
                                    type='button'
                                    name='deleteItem'
                                    id='deleteItem'
                                    //listId={this.props.id}
                                    //value={itemId}
                                    onClick={()=> this.handleDeleteItem(item.itemId)}
                                >
                                    delete
                                </button>
                                <br />
                            </li>
                            )
                        })}
                </ul>
                <br />
                <form onSubmit={(e)=>this.handleAddItem(e, this.props.id)}>
                    <label htmlFor='newItem'>
                        new item
                        <input
                            type='text'
                            name='newItem'
                            id='newItem'
                            required
                        />
                    </label>
                    <button
                        type='submit'>
                        Add list item
                    </button>
                </form>

                <br />
                <br />
                <button
                    onClick={this.handleDeleteList}>
                    Delete list
                </button>
                <br />
                <br />
            </div>
            
        if (this.state.hide === false) {
            return expanded
        } 
        return hidden

    }
}