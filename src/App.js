import React, { Component } from 'react';
import {
  Route, Switch, Link, Redirect, withRouter
} from 'react-router-dom'

import { Grid, Menu, Segment, Button, Tab, Icon, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import logo from './logo.svg';
import './App.css';

import HomePage from './Home/index';
import WorkspacePage from './Workspace/index';
import AboutPage from './About/index';
import NotMatchPage from './NotMatch/index';
import CommentApp from './Comment/CommentApp';
import { StatRoute, StatManager} from './Components/StatRoute';
import StatSwitch from './Components/StatSwitch';
import FBOrgApp from './FBOrg/views/FBOrgApp';

import GlobalHeader from './Components/GlobalHeader';
import GlobalFooter from './Components/GlobalFooter';
import PageNavigator from './Components/PageNavigator';




class App extends Component {

  state = {
    activeItem: 'home',
    navigator_title: 'home'
  }

  handleItemClick = (e, { name }) => {

    const { history, location } = this.props;

    let changed = false;
    let navigator_title = "";
    if (history){
      if (name == 'home' && location.pathname !="/") {
        navigator_title = 'home';
        history.replace('/');
        changed = true;
      }
      else if (name == 'about' && location.pathname != "/about") {
        navigator_title = 'about';
        history.replace('/about');
        changed = true;
      }
      else if (name == 'renderfunc' && location.pathname != "/renderfunc") {
        navigator_title = 'renderfunc';
        history.replace('/renderfunc');
        changed = true;
      }
    }

    if (changed){
      this.setState({
        navigator_title,
        activeItem: name
      });
    }
    
  }

  componentWillReceiveProps(nextProps){
    
    const {location} = nextProps;
    if(location){
      if (location.pathname==='/'){
        this.setState({
          navigator_title: 'home',
          activeItem: 'home'
        })
      }
      else if (location.pathname==='/about'){
        this.setState({
          navigator_title: 'about',
          activeItem: 'about'
        })
      }
      else if (location.pathname === '/renderfunc') {
        this.setState({
          navigator_title: 'renderfunc',
          activeItem: 'renderfunc'
        })
      }
      else {
        this.setState({
          navigator_title: location.pathname,
        })
      }
    }
  }

  componentDidMount(){
    this.unlisten = this.props.history.listen((location) => {
      console.log("<this.props.history.listen> location:"+JSON.stringify(location));
    });
  }

  componentWillUnmount(){
    if(this.unlisten){
      this.unlisten();
    }
  }

  popToRoot = () => {
    const stackLen = this.props.history.length;
    console.log("stackLen :" + stackLen);
    this.props.history.push({pathname:"/"});
  }

  render() {

    const { activeItem, navigator_title } = this.state;

    return (
      <div className="wrapper">

        <div><GlobalHeader onclick={this.popToRoot} /></div>
        
        <div className="content">
          <Grid padded >
            <Grid.Column width={4} style={{ padding: '0px', margin: '0px' }}>
              <Menu vertical fluid tabular  color='grey' >
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
                <Menu.Item name='renderfunc' active={activeItem === 'renderfunc'} onClick={this.handleItemClick} />
              </Menu>
            </Grid.Column>

            <Grid.Column width={12} style={{ padding: '0px', textAlign:'center' }}>
              <PageNavigator title={navigator_title} />

              {/* 1.相对精确的路径靠上放置 */}
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/home/item3" render={() => <div>item3</div>} />
                <Route path="/home/about" component={AboutPage} />
                <Route path="/home" component={HomePage} />
                
                <Route path="/about" component={AboutPage} />
                <Route path="/renderfunc" render={() => <div>render function</div>} />
                <Route path="/com/app/workspace/:user" component={WorkspacePage} />
                <Route path="/app/workspace/:user" component={WorkspacePage} />
                <Route path="/about/workspace/:user" component={WorkspacePage} />
                <Route path="/workspace/:user" component={WorkspacePage} />
                <Route path="/notmatch" component={NotMatchPage}/>

                {/* 普通跳转 */}
                <Route path="/facebook_org" component={FBOrgApp} />
                {/* 带状态检测逻辑的跳转 */}
                <StatRoute path="/commentapp" component={CommentApp} />
                {/* 用于模拟登陆请求 */}
                <Route path="/statswitch" component={StatSwitch}/>
                {/* 找不到匹配路径 */}
                <Redirect path="*" to="/notmatch" />
              </Switch>

            </Grid.Column>
          </Grid>
        </div>

        <footer className="page-footer">
          <GlobalFooter />
        </footer>
      </div>
    );
  }
}

export default App;
