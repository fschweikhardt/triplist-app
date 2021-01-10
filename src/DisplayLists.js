import React from 'react'
import TripListContext from './TripListContext'
import List from './List'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    render() {
        console.log('DisplayList', this.context.lists, this.context.items)
    
        return (
            <div>
                <h2>
                    Lists
                </h2>
               <ul>
                   {this.context.lists.map( list => {
                       return (
                           <li key={list.id}>
                               <hr />
                               <List
                                    id={list.id}
                                    title={list.title}
                                />
                                <hr />
                           </li>
                       )
                   })}
               </ul>
               <br/>
               <br />
               <button>
                   ADD LIST
               </button>
            </div>
        )
    } 
}