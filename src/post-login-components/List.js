import React from 'react'
import Item from './Item'
import TripListContext from '../TripListContext'
import DeleteList from './buttons/DeleteList'
import AddItem from './buttons/AddItem'
import DeleteItem from './buttons/DeleteItem'


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

    render() {

        const list = this.props.id
        const items = this.context.items
        const itemsToList = items.filter( i => i.list_id === list)

        const compactList = 
            <div className='List-compact'>
                <br />
                <h3 onClick={this.toggleExpandButton}>
                    {this.props.title}
                    {/* <button
                        onClick={this.toggleExpandButton}
                        >
                        hide/expand
                    </button> */}
                </h3>
                <br />
            </div>

        const expandedList = 
            <div className='List-expanded'>
                <br />
                <h3>
                    {this.props.title}
                    
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
                                <DeleteItem
                                    item_id={item.item_id}
                                />
                                <br />
                            </li>
                            )
                        })}
                </ul>
                <br />
                <AddItem 
                    id={this.props.id}
                />
                <br />
                <br />
                <button
                        onClick={this.toggleExpandButton}
                    >
                        HIDE LIST
                </button>
                <br />
                <DeleteList 
                    id={this.props.id}
                />
                <br />
                <br />
            </div>
            
        if (this.state.hide === false) {
            return expandedList
        } 
        return compactList
    }
}