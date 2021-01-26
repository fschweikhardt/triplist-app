import React from 'react'

const TripListContext = React.createContext({
    username: '',
    setUsername: ()=> {},
    setToken: ()=> {},
    lists: [],
    setLists: () => {},
    items: [],
    setItems: () => {},
    addItem: () => {}, 
    deleteItem: () => {}, 
    addList: () => {}, 
    deleteList: () => {},
    loggedIn: () => {},
    logout: () => {}
})

export default TripListContext