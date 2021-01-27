import React from 'react'

const TripListContext = React.createContext({
    setUsername: () => {},
    username: '',
    lists: [],
    setLists: () => {},
    setItems: () => {},
    items: [],
    addList: () => {}, 
    deleteList: () => {},
    addItem: () => {}, 
    deleteItem: () => {}, 
})

export default TripListContext