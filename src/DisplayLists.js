import React from 'react'
import TripListContext from './TripListContext'
import List from './List'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    handleAddList = (e) => {
        e.preventDefault()
        console.log('add list on List.js', e.target.newList.value)
        this.context.addList(e.target.newList.value)
        e.target.reset()
    }

    render() {

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
               <form onSubmit={this.handleAddList}>
                    <label htmlFor='newList'>
                        new item
                        <input
                            type='text'
                            name='newList'
                            id='newList'
                            required
                        />
                    </label>
                    <button
                        type='submit'>
                        Create New List
                    </button>
                </form>
            </div>
        )
    } 
}