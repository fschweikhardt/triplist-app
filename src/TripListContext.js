import React from 'react'

const TripListContext = React.createContext({
    username: '',
    lists: [],
    items: [],
    addItem: () => {}, 
    deleteItem: () => {}, 
    addList: () => {}, 
    deleteList: () => {}
})

export default TripListContext