import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { StatManager } from './StatRoute';
import {
    Route,
    withRouter,
    Redirect
} from 'react-router-dom'

export default class StatSwitch extends Component {

    state = {
        changedState: false
    }

    handleSwitch = () => {
        StatManager.enableStat(
            this.setState({
                changedState: true
            })
        );
    }

    render() {
        console.log(`history: ${JSON.stringify(this.props.history)}`);
        console.log(`location: ${JSON.stringify(this.props.location)}`);
        console.log(`match: ${JSON.stringify(this.props.match)}`);

        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { changedState } = this.state;

        if(changedState){
            return (
                <div>
                    <Redirect to={from} />
                </div>
            )
        }
        
        return (
            <div>
                <Button onClick={this.handleSwitch}>switch</Button>
            </div>
        )
    }
}
