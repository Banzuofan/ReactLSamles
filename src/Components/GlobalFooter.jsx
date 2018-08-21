import React from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { fmDate1} from '../Util/Util';


class GlobalFooter extends React.Component {

        state = {
                tickCount:0,
        };

        render() {
                return (
                        <div style={{ backgroundColor: '#1c2330', padding: '10px', textAlign: 'center', color: 'white' }} >
                                <Icon name="github" size='big' />{fmDate1(new Date())}
                        </div>
                );
        }

        tick = () =>{
                this.setState({
                        tickCount: ++this.state.tickCount
                });
        }

        componentDidMount() {
                let _self = this;
                this.timerID = setInterval(function(){
                        _self.tick();
                }, 1000);
        }

        componentWillMount() {
                clearInterval(this.timerID);
        }
}


export default GlobalFooter;