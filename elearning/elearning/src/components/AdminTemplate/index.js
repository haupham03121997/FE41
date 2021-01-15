import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class AdminTemplate extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className='w-25'>
                    <p>Slider</p>
                    <Link to='/user-management'>User</Link>
                    <Link to='/courses-management'>Courses</Link>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
