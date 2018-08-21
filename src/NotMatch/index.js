
import React, { Component } from 'react'

export default class NotMatchPage extends Component {

    render() {
        const {location, match} = this.props;
        console.log(`<NotMatchPage-location>: ${JSON.stringify(location)}`);
        console.log(`<NotMatchPage-match>: ${JSON.stringify(match)}`);
        return (
            <div style={{color:'red', fontWeight:'bold', fontSize:'21px'}}>
                404 error, not found page 
            </div>
        )
    }
}