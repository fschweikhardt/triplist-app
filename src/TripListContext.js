import React from 'react'

const TripListContext = React.createContext({
    lists: [],
    items: [],
    addItem: () => {}, 
    deleteItem: () => {}, 
    addList: () => {}, 
    deleteList: () => {}
})

export default TripListContext