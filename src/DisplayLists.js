import React from 'react'
import TripListContext from './TripListContext'
import List from './List'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    render() {
        console.log('Display', this.context.lists)
    
        return (
            <div>
                <h2>
                    Lists
                </h2>
               <ul>
                   {this.context.lists.map( lists => {
                       return (
                           <li key={lists.id}>
                               <List
                                    id={lists.id}
                                    title={lists.title}
                                    items={lists.items}
                                />
                           </li>
                       )
                   })}
               </ul>
               <button>
                   ADD LIST
               </button>
               <br />
               <button>
                   DELETE LIST
               </button>
            </div>
        )
    } 
}