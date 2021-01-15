import React from 'react'
import Item from './Item'
import TripListContext from './TripListContext'
import config from './config'

export default class List extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            hide: true
        }
    }

    static contextType = TripListContext
    
    toggleExpandButton = () => 
        this.setState(prevState => ({
            hide: !prevState.hide
        }))

    handleAddItem = (e) => {

        e.preventDefault()

        

        const item = {
            name: e.target.newItem.value,
            list_id: this.props.id
        }

        this.context.addItem(item)
        e.target.reset()

        // const options = {
        //     method: 'POST', 
        //     headers: {
        //         'content-type': 'application/json',
        //       //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
        //       },
        //     body: JSON.stringify(item)
        // }
        // fetch(`${config.API_ENDPOINT}/items`, options)
        //     .then(res => {
        //         if (!res.ok) {
        //             return res.json().then(e => Promise.reject(e))
        //         }
        //         return res.json()
        //     })
        //     .then(res => console.log(res))
        //     .then(this.context.addItem(item))
        
        
    

        // console.log(e.target.newItem.value, listId)
        // this.context.addItem(e.target.newItem.value, listId)
        // e.target.reset()
    }

    handleDeleteItem = (itemId) => {
        console.log('delete item on list.js', itemId)
        this.context.deleteItem(itemId)
    }

    handleDeleteList = (list) => {
        console.log('delete list on list.js', list, 'this.props.id=',this.props.id)
        
        
        const deleteList = {
            id: list
        }
        const options = { 
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
              //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
              },
            body: JSON.stringify(deleteList)
        }
        fetch(`${config.API_ENDPOINT}/lists`, options)
            // .then(res => {
            //     if (!res.ok) {
            //         return res.json().then(e => Promise.reject(e))
            //     }
            //     return res.json()
            // })
            //.then(res => res.json('ok'))
            //.then(res => console.log(res))
            //.then(this.context.deleteList(list))
            // .catch(error => {
            //     console.error({ error })
            // })
            this.context.deleteList(list)
    }

    render() {

        const list = this.props.id
        const items = this.context.items
        const itemsToList = items.filter( i => i.list_id === list)

        const hidden = 
            <div>
                <br />
                <h3>
                    {this.props.title}
                    <button
                        onClick={this.toggleExpandButton}
                        >
                        hide/expand
                    </button>
                </h3>
            </div>

        const expanded = 
            <div>
                <br />
                <h3>
                    {this.props.title}
                    <button
                        onClick={this.toggleExpandButton}
                        >
                        hide/expand
                    </button>
                </h3>

                <ul>
                    {itemsToList.map( (item ) => {
                        return (
                            <li key={item.item_id}>
                                {item.item_id}
                                <br />
                                <Item
                                    name={item.name} 
                                    id={item.item_id}
                                />
                                {/* <button>
                                    edit
                                </button> */}
                                <button
                                    type='button'
                                    name='deleteItem'
                                    id='deleteItem'
                                    //listId={this.props.id}
                                    //value={itemId}
                                    onClick={()=> this.handleDeleteItem(item.itemId)}
                                >
                                    delete
                                </button>
                                <br />
                            </li>
                            )
                        })}
                </ul>
                <br />
                <form onSubmit={(e)=>this.handleAddItem(e, this.props.id)}>
                    <label htmlFor='newItem'>
                        new item
                        <input
                            type='text'
                            name='newItem'
                            id='newItem'
                            required
                        />
                    </label>
                    <button
                        type='submit'>
                        Add list item
                    </button>
                </form>

                <br />
                <br />
                <button
                    onClick={()=>this.handleDeleteList(this.props.id)}>
                    Delete list
                </button>
                <br />
                <br />
            </div>
            
        if (this.state.hide === false) {
            return expanded
        } 
        return hidden

    }
}