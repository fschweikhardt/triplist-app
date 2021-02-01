import React from 'react'
import TripListContext from '../TripListContext'
import List from './List'
import AddList from './buttons/AddList'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    render() {

        return (
            <div>
               <ul>
                   {this.context.lists.map( list => {
                       return (
                           <li key={list.id}>
                               <hr />
                               <List
                                    id={list.id}
                                    title={list.title}
                                    username={list.username}
                                />
                                <hr />
                           </li>
                       )
                   })}
                </ul>
                <AddList />
            </div>
        )
    } 
}