import React, { Component } from 'react'
import {getParamVal} from '../Util/Util'

export default class WorkspacePage extends Component {

    render() {
        const { match, location } = this.props; 
        console.log(`match: ${JSON.stringify(match)}`);
        console.log(`location: ${JSON.stringify(location)}`);
        return (
            <div style={{textAlign:"left", paddingLeft:"4px"}}>
                <div>path: {match.params.user}</div>
                {location.search.length>0 ? <div>account: {getParamVal(location.search, 'account')}</div>:null}
                {location.search.length>0 ? <div>password: {getParamVal(location.search, 'pwd')}</div>:null}
            </div>
        )
    }
}

WorkspacePage.defaultProps = {
    user : "admin"
};