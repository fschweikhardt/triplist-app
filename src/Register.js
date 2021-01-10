import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default class Register extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    setUsername = (e) => {
        this.setState({
            username: e.target.value
        })
        this.props.getUsername(this.state.username)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.password.value)
    }

    // componentDidMount() {
    //     this.props.getUsername(this.state.username)
    // }

    // componentWillUnmount() {}

    render() {

        //this.props.getUsername(this.state.username)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>
                    Sign up
                </h2>
                <label>
                    email
                    <input>
                    </input>
                </label>
                <br />
                <label htmlFor='username'>
                    create username
                    <input
                        type='text'
                        id='username'
                        name='username'
                        onChange={this.setUsername}>
                    </input>
                </label>
                <br />
                <label>
                    create password
                    <input
                        type='text'
                        id='password'
                        name='password'
                    >
                    </input>
                </label>
                <br />
                <button
                    type='submit'>
                    <Link to='/home'>
                    Create Account
                    </Link>
                </button>
                <br />    
                {/* <button>
                    Cancel
                </button>   */}
                </form>
            </div>
        )
    }
}