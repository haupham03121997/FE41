import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import DefaultTeamplate from '../DefaultTemplate';
const UserRoute = (props) => {
    const { component: Component, ...rest } = props;
    return (
        <Route {...rest} render={routerProps => {
            return <DefaultTeamplate>
                <Component {...routerProps} />
            </DefaultTeamplate>
        }} />
    )
}
export default UserRoute;