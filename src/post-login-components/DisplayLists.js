import React from 'react'
import TripListContext from '../TripListContext'
import List from './List'
import AddList from './buttons/AddList'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    render() {

        return (
            <div>
                <h2>
                    Lists of places to go
                </h2>   
                
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
                <br/>
                <br />
                <AddList />

            </div>
        )
    } 
}