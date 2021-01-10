import React from 'react'

const TripListContext = React.createContext({
    lists: [],
    items: [],
    username: '',
    addItem: () => {}, 
    deleteItem: () => {}
})

export default TripListContext