import React from 'react'
import './App.css'
import TripListContext from './TripListContext'
import STORE from './STORE'
import DisplayLists from './DisplayLists'

export default class Home extends React.Component {

    static contextType = TripListContext

    state = {
        //loggedin: false, 
        lists: STORE,
        username: 'John Doe', 
        newItem: ''
      }

    handleAddItem = (item) => {
        console.log('addItem on home.js', item)
        const newItems = this.state.lists[0].items
        this.setState({
            lists: [...newItems, item]
        })
    }

    handleDeleteItem = (listId, itemId) => {
        console.log('delete item on home.js', listId, itemId)
    }

    render() {
        const value = {
            lists: this.state.lists,
            username: this.state.username,
            addItem: this.handleAddItem, 
            deleteItem: this.handleDeleteItem
        }

        console.log(this.state.lists)
        //console.log(this.state.newItem)
        //const testItems = this.state.lists[0].items
        //console.log([...testItems, 'test'])

    return (

        <TripListContext.Provider value={value}>
            <div>
                <header>
                    TripList Home Page
                </header>
                <main>
                    <h1>
                        Hello, {this.state.username}
                    </h1>
                    <DisplayLists />
                </main>
            </div>
        </TripListContext.Provider>
        )
    }
}