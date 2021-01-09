import React from 'react'

const TripListContext = React.createContext({
    lists: [],
    username: '',
    addItem: () => {}, 
    deleteItem: () => {}
})

export default TripListContext