import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Routes from './routes';
import './index.css';


const HISTORY = createBrowserHistory();


ReactDOM.render(
    <Router history={HISTORY}>
        {Routes()}
    </Router>, document.getElementById('root')
);
