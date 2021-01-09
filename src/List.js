import React from 'react'
import TripListContext from './TripListContext'

export default class List extends React.Component { 
    
    static contextType = TripListContext
    render() {
    
        return (
            <div>
                <h3>
                    {this.props.title}
                </h3>
                    <ul>
                        {this.props.items.map( (list, i) => {
                            return (
                                <li key={i}    
                            )
                        })}
                    </ul>

                    {/* {this.props.items}
                    <button>
                        ADD ITEM
                    </button>
                    <br />
                    <button>
                        EDIT ITEM
                    </button> */}
            </div>
        )
    }
}