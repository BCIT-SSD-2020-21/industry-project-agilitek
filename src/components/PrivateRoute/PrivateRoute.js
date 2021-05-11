import React from 'react'
import { Route } from 'react-router'
import Loading from '../Loading/Loading'
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const PrivateRoute = ({ component: Component, ...args }) => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    return <Route {...args} render={(props) => (
        !isLoading ?
        isAuthenticated === true
                ? <Component {...props} /> 
                : loginWithRedirect()
            :
            <Loading />
    )} />

    }


export default PrivateRoute
