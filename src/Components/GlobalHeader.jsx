import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { relative } from 'path';

const GlobalHeader = ({ title, onclick }) => (

    <div style={{
        backgroundColor: '#37474F',
        textAlign: 'left',
        height: '150px',
        paddingLeft: 20,
        paddingBottom: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'start',
        display: 'flex'
    }} >

        <div>
            {/* <Icon name="at" size='huge' /> */}
            <span style={{ fontSize: 30, color: '#b1b1b1' }}>ROUTER TESTS | </span>
            <span style={{ fontSize: 18, color: '#b1b1b1', marginLeft: 10 }}>{`${title}`}</span>
        </div>
    </div>
);

export default GlobalHeader;