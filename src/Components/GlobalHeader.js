import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { relative } from 'path';

 const GlobalHeader = ({onclick}) => (

    <div style={{ backgroundColor: '#37474F', textAlign: 'left', height: '150px', flexDirection: 'column', justifyContent:'center', alignItems:'start', display:'flex'}} >
         <div style={{margin:20}}>
             <Icon name="google huge" /><span style={{ fontSize: 28, color: '#b1b1b1' }}>TESTS</span>
         </div>
    </div>
    );

export default GlobalHeader;