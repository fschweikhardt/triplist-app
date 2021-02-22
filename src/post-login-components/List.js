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
    
    toggleExpandButton = () => {
        this.setState(prevState => ({
            hide: !prevState.hide
        }))
    }

    render() {

        const list = this.props.id
        const items = this.context.items
        const itemsToList = items.filter( i => i.list_id === list)

        const compactList = 
            <div style={{backgroundColor: "ghostWhite", padding: '10px'}}>
                
                <button onClick={this.toggleExpandButton}>
                    <h2 >
                        {this.props.title}
                    </h2>
                </button>
            </div>

        const expandedList = 
            <div style={{backgroundColor: "ghostWhite"}}>
                <br />
                <h2 style={{textDecoration: 'underline'}}>
                    {this.props.title} 
                </h2>
                <ul style={{listStyle: 'none'}}>
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