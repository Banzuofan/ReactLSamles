import React, { Component } from 'react'
import {
    Route, 
    withRouter,
    Redirect
} from 'react-router-dom'


export const StatManager = {
    isOn : false,
    enableStat(handler){
        this.isOn = true;
        setTimeout(handler, 100);
    },
    disableStat(handler){
        this.isOn = false;
        setTimeout(handler, 100);
    }
}

export const StatRoute = ({component:Component, ...rest}) => (
    <Route {...rest} render={ (props) => (
        StatManager.isOn ? (<Component {...props} />) : (
            <Redirect to={{
                pathname:'./statswitch',
                state:{from:props.location}
            }}/>
        )
    )} />
)



