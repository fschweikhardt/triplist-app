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
                   {this.context.lists.map( (lists, i) => {
                       const idx = parseInt(lists.id + i)
                       //console.log('display list idx', idx)
                       //console.log('display list id', i)
                       return (
                           <li key={lists.id}>
                               <hr />
                               <List
                                    id={lists.id}
                                    idx={idx}
                                    title={lists.title}
                                    items={lists.items}
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