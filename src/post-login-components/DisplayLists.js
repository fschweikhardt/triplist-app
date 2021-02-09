import React from 'react'
import TripListContext from '../TripListContext'
import List from './List'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    render() {

        return (
            <div>
               <ul style={{backgroundColor: 'rgb(35,90,135,.2', padding: '3px 0'}} className='group-list'>
                   {this.context.lists.map( list => {
                       return (
                           <li 
                                className='item'
                                key={list.id} 
                                style={{
                                    margin: '10px', 
                                    padding: '10px',
                                    listStyle: 'none'
                                }} 
                                >
                               <List
                                    id={list.id}
                                    title={list.title}
                                    username={list.username}
                                />
                           </li>
                       )
                   })}
                </ul>
            </div>
        )
    } 
}