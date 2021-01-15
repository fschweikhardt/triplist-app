import React from 'react'

const TripListContext = React.createContext({
    username: '',
    setUsername: ()=> {},
    lists: [],
    setLists: () => {},
    items: [],
    //homePageTrigger: '',
    setItems: () => {},
    addItem: () => {}, 
    deleteItem: () => {}, 
    addList: () => {}, 
    deleteList: () => {},
    logout: () => {}
})

export default TripListContext