import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import LoginPage from './js/pages/LoginPage';
import HomePage from './js/pages/HomePage';
import Cookies from 'js-cookie';

const LoggedIn = () => {
    const user = Cookies.get('username');
    return !!user ? true : false;
};

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => (
                LoggedIn() ? (
                    <HomePage />
                ) : (
                    <Redirect to='/login' />
                ))}>
            </Route>
            <Route path='/login' component={LoginPage} />
        </Switch>
    );
}

export default Routes;