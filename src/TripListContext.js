import React from 'react'

const TripListContext = React.createContext({
    username: '',
    setUsername: ()=> {},
    lists: [],
    setLists: () => {},
    items: [],
    homePageTrigger: '',
    logout: () => {},
    setItems: () => {},
    addItem: () => {}, 
    deleteItem: () => {}, 
    addList: () => {}, 
    deleteList: () => {}
})

export default TripListContext