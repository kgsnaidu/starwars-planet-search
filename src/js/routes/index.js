import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import LoginPage from '../pages/login-page';
import HomePage from '../pages/home-page';
import Cookies from 'js-cookie';

const LoggedIn = () => {
    const user = Cookies.get('username');
    return !!user ? true : false;
};

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' render={(props) => (
                LoggedIn() ? (
                    <HomePage {...props} />
                ) : (
                    <Redirect to='/login' {...props} />
                ))}>
            </Route>
            <Route path='/login' component={LoginPage} />
        </Switch>
    );
}

export default Routes;