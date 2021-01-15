import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line
export default {
    username: 'guest',
    lists: [
        {
            id: 1,
            title: "With Partner", 
            username: 'guest'
        },
        {
            id: 2,
            title: "Solo", 
            username: 'guest'
        },
        {
            id: 3,
            title: "In-Law Vacation",
            username: 'guest'
        },
    ], 

    items: [
        {
            name: "Paris",
            item_id: uuidv4(),
            list_id: 1
        },
        {
            name: "Venice",
            item_id: uuidv4(),
            list_id: 1
        },
        {
            name: "Rome",
            item_id: uuidv4(),
            list_id: 1
        },
        {
            name: "camping in Oregon",
            item_id: uuidv4(),
            list_id: 2
        },
        {
            name: "hiking the AT",
            item_id: uuidv4(),
            list_id: 2
        },
        {
            name: "Ireland",
            item_id: uuidv4(),
            list_id: 3
        },
    ]
}