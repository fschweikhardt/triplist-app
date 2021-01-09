import React from 'react'
import Item from './Item'
import TripListContext from './TripListContext'

export default class List extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            hide: false
        }
    }

    static contextType = TripListContext
    
    toggleExpandButton = () => 
        this.setState(prevState => ({
            hide: !prevState.hide
        }))

    handleAddItem = (e) => {
        e.preventDefault()
        console.log(e.target.newItem.value)
        this.context.addItem(e.target.newItem.value)
    }

    handleDeleteItem = (listId, itemId) => {
        console.log('delete item on list.js', listId, itemId)
        this.context.deleteItem(listId, itemId)
    }

    handleDeleteList = () => {
        console.log('delete list on list.js')
    }

    render() {
        console.log(this.props.items)
       // const listId = this.props.title
        //console.log(this.context.lists[0].id)

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
                    {this.props.items.map( (item, i) => {
                        const itemKey = this.props.id + `${this.props.title}` + i
                        const itemId = i
                        return (
                            <li key={itemKey}>
                                {itemKey}
                                <br />
                                <Item
                                    item={item} 
                                    id={itemKey}
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
                                    onClick={(e)=> this.handleDeleteItem(this.props.id, itemId)}
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
                        new item
                        <input
                            type='text'
                            name='newItem'
                            id='newItem'
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