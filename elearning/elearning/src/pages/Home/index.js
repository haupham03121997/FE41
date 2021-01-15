import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Home
                <button onClick={()=>{
                    this.props.history.push("/signin")
                }}>Signin</button>
                <button onClick={()=>{
                    this.props.history.replace('/signup')
                }}>Signup</button>
            </div>
        )
    }
}
