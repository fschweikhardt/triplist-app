import React from 'react'
import './App.css'
import config from './config'
import TripListContext from './TripListContext'

export default class Login extends React.Component {

    static contextType = TripListContext

    handleSubmit = (e) => {
        e.preventDefault()

        //-----------> submit username and password

        const userLogin = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        const usernameOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
            },
            body: JSON.stringify(userLogin)
        }

        fetch(`${config.API_ENDPOINT}/user`, usernameOptions)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
            .then( username => {
                this.context.setUsername(username)
                console.log(username)
               // this.props.history.push('/home')
            })
            .catch(error => {
                console.error({ error })
            }) 

        //----------------> get lists
            // const user = { username: e.target.username.value }
            // console.log(e.target.username.value)
        
            // const fetchLists = 
            // fetch(`${config.API_ENDPOINT}/userLists`, {
            //   method: 'POST',
            //   headers: {
            //     'content-type': 'application/json'
            //     //'Authorization': `Bearer ${config.API_TOKEN}`
            //   },
            //   body: JSON.stringify(user)
            // })
            // const fetchItems = 
            // fetch(`${config.API_ENDPOINT}/userItems`, {
            //   method: 'POST',
            //   headers: {
            //     'content-type': 'application/json'
            //     //'Authorization': `Bearer ${config.API_TOKEN}`
            //   },
            //   body: JSON.stringify(user)
            // })
        
            // Promise
            //   .all([ fetchLists, fetchItems ])
            //   .then( ([ listsRes, itemsRes ]) => {
            //     if (!listsRes.ok) {
            //       return listsRes.json().then(error => Promise.reject(error))
            //     }
            //     if (!itemsRes.ok) {
            //       return itemsRes.json().then(error => Promise.reject(error))
            //     }  
            //     return Promise.all([listsRes.json(), itemsRes.json()]);
            //   })
            //   .then( ([listsRes, itemsRes]) => {
            //     this.context.setItems(itemsRes)
            //     this.context.setLists(listsRes)
                
            // })
            //   .catch(error => {
            //     console.error(error)
            //   }) 
        

        // const user = { username: e.target.username.value }
        // console.log(e.target.username.value)

        // const options = {
        //     method: 'POST', 
        //     headers: {
        //         'content-type': 'application/json',
        //     //'Authorization': `Bearer ${usernameLogin}:${passwordLogin}` 
        //     },
        //     body: JSON.stringify(user)
        //     }

        // fetch(`${config.API_ENDPOINT}/userLists`, options)
        //     .then(res => {
        //         if (!res.ok) {
        //             return res.json().then(e => Promise.reject(e))
        //         }
        //         return res.json()
        //     })
        //     .then( res => {
        //         this.context.setLists(res)
        //         console.log('lists', res)
        //         }) 
        //     //.then(res => console.log(res))
        //     //.then(console.log('end of fetch for lists'))
        
        //     //-------> get & set user items
        
        // fetch(`${config.API_ENDPOINT}/userItems`, options)
        //     .then(res => {
        //         if (!res.ok) {
        //             return res.json().then(e => Promise.reject(e))
        //         }
        //         return res.json()
        //     })
        //     .then( res => {
        //         this.context.setItems(res)
        //         console.log('items', res)
        //         console.log('push here?')
        //         this.props.history.push('/home')
        //     })
        //     //.then(res => console.log(res))
        //     .then(console.log('end of fetch for items')) 

        e.target.reset()

        // const login = () => {
        //     console.log("Ran login")
        //     this.props.history.push('/home')
        //   }
        //   setInterval(login,100)
       
    }

    render() {

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <h2>
                Log in
            </h2>
            <label>
                username
                <input
                    type='text'
                    id='username'
                    name='username'
                    required>
                </input>
            </label>
            <br />
            <label>
                password
                <input
                    type='text'
                    id='password'
                    name='password'>
                </input>
            </label>
            <br />
            <p>hit submit</p>
            <button
                type='submit'>
                SUBMIT
            </button>
            <br />  
            <p>then enter</p>
            <button
               onClick={()=>this.props.history.push('/home')}
            >
                ENTER
            </button>
            </form> 
        </div>
    )
}
}