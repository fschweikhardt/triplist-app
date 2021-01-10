import React from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import TripListContext from './TripListContext'
import STORE from './STORE'
import DisplayLists from './DisplayLists'


export default class Home extends React.Component {

    static contextType = TripListContext

    state = {
        //loggedin: false, 
        lists: STORE.lists,
        items: STORE.items,
        username: 'John Doe', 
        newItem: ''
      }

    handleAddItem = (item, listId) => {
        console.log('addItem on home.js', item, listId)
        let newItem = {
            name: item,
            itemId: uuidv4(),
            listId: listId 
        }
        this.setState({
            items: [...this.state.items, newItem]
        })
    }

    handleDeleteItem = (itemId) => {
        console.log('delete item on home.js', itemId)
        const removedItem = this.state.items.filter( itm => itm.itemId !== itemId)
        this.setState({
            items: removedItem
        })
    }

    handleAddList = (newList) => {
        console.log(newList)
        let list = {
            id: uuidv4(),
            title: newList
        }
        this.setState({
            lists: [...this.state.lists, list]
        })
    }

    render() {
        const value = {
            lists: this.state.lists,
            items: this.state.items,
            username: this.state.username,
            addItem: this.handleAddItem, 
            deleteItem: this.handleDeleteItem, 
            addList: this.handleAddList
        }

        console.log(this.state.lists)
        console.log(this.state.items)
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