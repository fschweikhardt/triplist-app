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

        fetch(`${config.API_ENDPOINT}/login`, usernameOptions)
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
                alert('try again please')
            }) 
        
        e.target.reset()

        // const login = () => {
        //     console.log("Ran login")
        //     this.props.history.push('/home')
        //   }
          
        // const componentDidMount = () => {
        //       setInterval(login,100)
        // }

        // const componentWillUnmount = () => {
        //     componentDidMount()
        //     clearInterval(setInterval(login,100));
        // }

        // componentWillUnmount()

        //console.log('loggin push home', this.props.history.push('/home'))
        //console.log(this.context.homePageTrigger)
       
        //window.location = "/home"
       
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
            </form> 
            <button
                onClick={()=>this.props.history.push('/home')}
                >
                    ENTER
            </button>
        </div>
    )
}
}