import React from 'react'
import TripListContext from './TripListContext'
import List from './List'
//import config from './config'

export default class DisplayLists extends React.Component {

    static contextType = TripListContext

    handleAddList = (e) => {
        e.preventDefault()
        console.log('add list on List.js', e.target.newList.value)

        const newList = { 
            title: e.target.newList.value,
            username: this.context.username
        }

        this.context.addList(newList)
        e.target.reset()

        // const options = {
        //     method: 'POST', 
        //     headers: {
        //         'content-type': 'application/json',
        //       //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
        //       },
        //     body: JSON.stringify(newList)
        // }
        // fetch(`${config.API_ENDPOINT}/lists`, options)
        //     .then(res => {
        //         if (!res.ok) {
        //             return res.json().then(e => Promise.reject(e))
        //         }
        //         return res.json()
        //     })
        //     .then(res => console.log(res))
        //     .then(this.context.addList(newList))
        
        e.target.reset()
    }

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
                               {list.id}
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
               <form onSubmit={this.handleAddList}>
                    <label htmlFor='newList'>
                        CREATE NEW LIST
                        <input
                            type='text'
                            name='newList'
                            id='newList'
                            required
                        />
                    </label>
                    <button
                        type='submit'>
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    } 
}