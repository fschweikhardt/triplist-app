import React from 'react'

const TripListContext = React.createContext({
    setUsername: () => {},
    username: '',
    setLists: () => {},
    lists: [],
    setItems: () => {},
    items: [],
    addList: () => {}, 
    deleteList: () => {},
    addItem: () => {}, 
    deleteItem: () => {}, 
})

export default TripListContext