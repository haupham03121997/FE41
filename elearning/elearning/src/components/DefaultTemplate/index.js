import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default class DefaultTeamplate extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
