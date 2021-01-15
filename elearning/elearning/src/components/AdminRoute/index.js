import React, { Component } from 'react';
import { Route, Redirect  } from 'react-router-dom'
import AdminTemplate from '../AdminTemplate';
import { useSelector } from 'react-redux'
//HOC
const AdminRoute = (props) => {
    const { component: Component, ...rest } = props;

    const { userInfo } = useSelector((state) => state.authReducer);
    if (!Object.keys(userInfo).length) {
        return <Redirect to='/' />
    }
    console.log("kahdjfdhkjshk");
    return (
        <Route
            {...rest}
            render={routerProps => {
                return (
                    <AdminTemplate>
                        <Component {...routerProps} />
                    </AdminTemplate>
                );
            }} />
    )
};
export default AdminRoute;
