import React, { Component } from 'react';
import './NoticeBoard.css';
import PropTypes from 'prop-types'

export default class NoticeBoard extends Component {

    render(){
        const {header, items} = this.props;
        return (
            <div className='noticeboard'>
                <div className='header'>{header}</div>
                <div className='content'>
                    {items.map((item) => <div>{item}</div>)}
                </div>
            </div>
        );
    }
}