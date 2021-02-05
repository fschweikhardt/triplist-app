import React from 'react'
import TripListContext from '../TripListContext'
import List from './List'
import AddList from './buttons/AddList'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    render() {

        return (
            <div>
               <ul style={{backgroundColor: 'lightGrey'}} className='group'>
                   {this.context.lists.map( list => {
                       return (
                           <li 
                                key={list.id} 
                                style={{
                                    margin: '10px', 
                                    padding: '10px',
                                    listStyle: 'none'
                                }} 
                                className='item'>
                               <List
                                    id={list.id}
                                    title={list.title}
                                    username={list.username}
                                />
                           </li>
                       )
                   })}
                </ul>
                <AddList />
            </div>
        )
    } 
}