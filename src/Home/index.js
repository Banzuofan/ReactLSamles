import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div><Link to="/com/app/workspace/yxlong">com/app/workspace/user: yxlong>></Link></div>
                <div><Link to="/app/workspace/yxlong">app/user: yxlong>></Link></div>
                <div><Link to="/about/workspace/yxlong">about/workspace:user(yxlong)>></Link></div>
                <div><Link to="/workspace/yxlong?account=banzuofan&pwd=10086">/workspace/yxlong?account=banzuofan&pwd=10086</Link></div>
                <div><Link to="/home">home>></Link></div>
                <div><Link to="/about">about>></Link></div>
                <div><Link to="/home/about">home/about>></Link></div>
                <div><Link to="/renderfunc">renderfunc>></Link></div>
                <div><Link to="/home/item3">item3>></Link></div>
                <div><Link to="/commentapp">/commentapp>></Link></div>
                <div><Link to="/facebook_org">/facebook>></Link></div>
            </div>
        )
    }
}
