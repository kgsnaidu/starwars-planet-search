import React from 'react';
import Cookies from 'js-cookie';
import Login from '../containers/login'

const LoginPage = (props) => {

    if(!!Cookies.get('username')) {
        props.history.push('/');
    }

    return (
        <section className='login-page container'>
            <h1 className='title'> Login </h1>
            <Login { ...props } />
        </section>
    );
}

export default LoginPage;