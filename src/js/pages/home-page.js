import React from 'react';
import Cookies from 'js-cookie';
import Search from '../containers/search';

const HomePage = (props) => {
    const signOut = () => {
        Cookies.remove('username', { path: '' });
        props.history.push('/login');
    }

    return (
        <div className='home-page'>
            <nav className='navbar navbar-inverse navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                    </div>
                    <div className='collapse navbar-collapse'>
                        <button type='button' onClick={ signOut } className='btn btn-danger navbar-btn navbar-right'>Signout</button>
                    </div>
                </div>
            </nav>
            <section className='container'>
                <Search {...props} />
            </section>
        </div>
    );
}

export default HomePage;