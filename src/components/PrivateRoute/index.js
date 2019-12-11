import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../utils/Context';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { authorized } = useAuth();
    return (
        <Route {...rest} render={(props) =>
            authorized ?
                (<Component {...props} />) :
                (<Redirect to="/" />)
        }
        />
    );
};

export default PrivateRoute;