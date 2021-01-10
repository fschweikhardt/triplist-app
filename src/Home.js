import React from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import TripListContext from './TripListContext'
import STORE from './STORE'
import DisplayLists from './DisplayLists'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //loggedin: false, 
            lists: STORE.lists,
            items: STORE.items,
          }
    }

    static contextType = TripListContext
    
    handleUpdateUsername = (username) => {
        console.log(username)
        this.setState({
            username: username
        })
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

    handleDeleteList = (list) => {
        console.log(list)
        let newList = this.state.lists.filter( lst => lst.id !== list)
        console.log(newList)
        this.setState({
            lists: newList
        })
    }

    render() {
        //const { username } = this.props
        
        const value = {
            lists: this.state.lists,
            items: this.state.items,
            addItem: this.handleAddItem, 
            deleteItem: this.handleDeleteItem, 
            addList: this.handleAddList, 
            deleteList: this.handleDeleteList
        }

        console.log(this.state.lists)
        console.log(this.state.items)

    return (

        <TripListContext.Provider value={value}>
            <div>
                <header>
                    TripList
                </header>
                <main>
                    <h1>
                         Hello! {/*, {username} */}
                    </h1>
                    <DisplayLists />
                </main>
            </div>
        </TripListContext.Provider>
        )
    }
}