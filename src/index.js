import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './js/routes';
import Thunk from 'redux-thunk';
import Reducers from './js/reducers';
import './index.css';


const HISTORY = createBrowserHistory();
const STORE = createStore(Reducers, applyMiddleware(Thunk));


ReactDOM.render(
    <Provider store={STORE}>
        <Router history={HISTORY}>
            {Routes()}
        </Router>
    </Provider>,
    document.getElementById('root')
);
