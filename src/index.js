import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import { createStore } from 'redux';

import App from './App';

import store from '../src/Redux/Store/index';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}>

            </Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
