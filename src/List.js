import React from 'react'
import Item from './Item'
import TripListContext from './TripListContext'

export default class List extends React.Component { 

    state = {
        hide: true
    }
    
    toggleExpandButton = () => 
        this.setState(prevState => ({
            hide: !prevState.hide
        }))

    static contextType = TripListContext
    render() {
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
                        const itemId = parseInt(this.props.idx + this.props.id + i)
                        return (
                            <li key={itemId}>
                                <br />
                                <Item
                                    item={item} 
                                    id={itemId}
                                />
                                <button>
                                    edit
                                </button>
                                <button>
                                    delete
                                </button>
                                <br />
                            </li>
                            )
                        })}
                    </ul>
                    <br />
                <button>
                    Delete list
                </button>
                <br />
                <button>
                    Add list item
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