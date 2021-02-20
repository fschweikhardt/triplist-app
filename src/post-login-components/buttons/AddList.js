import React from 'react'
import TripListContext from '../../TripListContext'
import config from '../../config'

export default class AddList extends React.Component {
    
    static contextType = TripListContext

    handleAddList = (e) => {
        e.preventDefault()

        const storedToken = window.localStorage.Authorization

        const newList = { 
            title: e.target.newList.value,
            username: this.context.username
        }

        const options = {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${storedToken}` 
            },
            body: JSON.stringify(newList)
        }

        fetch(`${config.API_ENDPOINT}/api/lists`, options)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then(res => {
                this.context.addList(res)
            })
            .catch(err => {
                console.error({ err })
            })
    
        e.target.reset()
    }

    render() {

        return (
            <form 
                onSubmit={this.handleAddList} 
                style={{
                    backgroundColor: "rgb(244,196,48,.8)",
                    paddingTop: '10px'
            }}>
                <br />
                <label htmlFor='newList'>
                    CREATE NEW LIST
                    <br />
                    <input
                        style={{width: '300px'}}
                        type='text'
                        name='newList'
                        id='newList'
                        placeholder='e.g. Trip with friends'
                        required
                    />
                </label>
                <button
                    type='submit'
                    className='btn-add-list'>
                    SUBMIT
                </button>
                <br />
                <br />
            </form>
        )
    }
}