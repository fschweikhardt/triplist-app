import React from 'react'

const TripListContext = React.createContext({
    username: '',
    setUsername: ()=> {},
    lists: [],
    setLists: () => {},
    items: [],
    setItems: () => {},
    addItem: () => {}, 
    deleteItem: () => {}, 
    addList: () => {}, 
    deleteList: () => {}
})

export default TripListContext