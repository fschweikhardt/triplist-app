import { v4 as uuidv4 } from 'uuid'

export default {
    lists: [
        {
            id: 1,
            title: "With Partner", 
        },
        {
            id: 2,
            title: "Solo", 
        },
        {
            id: 3,
            title: "In-Law Vacation",
        },
    ], 

    items: [
        {
            name: "Paris",
            itemId: uuidv4(),
            listId: 1
        },
        {
            name: "Venice",
            itemId: uuidv4(),
            listId: 1
        },
        {
            name: "Rome",
            itemId: uuidv4(),
            listId: 1
        },
        {
            name: "camping",
            itemId: uuidv4(),
            listId: 2
        },
        {
            name: "swimming",
            itemId: uuidv4(),
            listId: 2
        },
        {
            name: "Ireland",
            itemId: uuidv4(),
            listId: 3
        },
    ]
}