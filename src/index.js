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

// const GlobalFooter = () => <div style={{ backgroundColor: '#e5e5e5', padding: '10px', textAlign: 'left', margin: '-50px 0 0' }} > 2018-6-18</div>;

ReactDOM.render(
    <Provider store={store}>
    <div>
        <BrowserRouter>
            <Route component={App}>
                
            </Route>
        </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
