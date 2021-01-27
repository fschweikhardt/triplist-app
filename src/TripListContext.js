import React from 'react'

const TripListContext = React.createContext({
    setUsername: () => {},
    username: '',
    setToken: ()=> {},
    token: '',
    lists: [],
    setLists: () => {},
    setItems: () => {},
    items: [],
    //setItems: () => {},
    addList: () => {}, 
    deleteList: () => {},
    addItem: () => {}, 
    deleteItem: () => {}, 
    //loggedIn: () => {},
    //logout: () => {}
})

export default TripListContext