
import React, { Component } from 'react'
import {
    Route, Link, Switch
} from 'react-router-dom'
import FBOrgApp from '../FBOrg/views/FBOrgApp';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import WorkspacePage from '../Workspace/index';


// const Dialog = ({title, msg, cancel, confirm}) => (
//     <Modal trigger={<Button>Show Modal</Button>} closeIcon>
//         <Header icon='archive' content={title} />
//         <Modal.Content>
//             <p>{msg}</p>            
//         </Modal.Content>
//         <Modal.Actions>
//             <Button color='red'>
//                 <Icon name='remove' /> {cancel}
//                         </Button>
//             <Button color='green'>
//                 <Icon name='checkmark' /> {confirm}
//                         </Button>
//         </Modal.Actions>
//     </Modal>
// )

export default class AboutPage extends Component {

    render() {
        const {match} = this.props;
        return (
            <div>
                {/* <div>
                    <Dialog title="title" msg="Would you like us to enable automatic archiving of old messages?" cancel="NO" confirm="YES" />
                </div> */}
                <div><Link to={`${match.url}/workspace/yxlong`}>match.url/workspace/:user</Link></div>
                <div><Link to={`${match.url}/workspace/yxlong?account=xx&pwd=yy`}>match.url/workspace/:user?account=xx&pwd=yy</Link></div>
                <div><Link to={`${match.url}/fborgapp`}>match.url/fborgapp</Link></div>
                <div><Link to={`${match.url}/phonenumer`}>match.url/phonenumer</Link></div>
                <div><Link to={`${match.url}/about`}>match.url/about</Link></div>
                <div><Link to={`${match.url}/about/1`}>match.url/about/1</Link></div>
                <div><Link to="/404error">/404Error</Link></div>
                <hr />
                <Switch>
                    <Route path={`${match.url}/workspace/:user`} component={WorkspacePage} />
                    <Route path={`${match.url}/fborgapp`} component={FBOrgApp} />
                    <Route exact path={`${match.url}/about`} component={AboutPage} />
                    <Route path={`${match.url}/phonenumer`} render={() => <div>18618399965</div>} />
                </Switch>
            </div>
        )
    }
}
