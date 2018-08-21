import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../action'
import { connect } from 'react-redux'
import { Grid, Table, Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import * as NetworkStatus from '../../Util/NetworkStatus'
import FBOrgProfile from './FBOrgProfile'
import FBOrgRepos from './FBOrgRepos'

class FBOrgApp extends Component {

    componentDidMount(){
        const { onLoadOrgRepos, onLoadOrgProfile } = this.props;
        onLoadOrgRepos();
        onLoadOrgProfile();
    }

    render() {
        const { repos, status, error, profile_status, profile } = this.props;

        return (
            <div>
                {/* loading indicator */}
                {status === NetworkStatus.StatusLoading && 
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>}

                {/* error message */}
                {status === NetworkStatus.StatusFailed && 
                <div style={{ color: 'red' }}>{error.message}</div>
                }

                <Grid celled>
                    <Grid.Column width={5}>
                        {profile_status === NetworkStatus.StatusSuccess && <FBOrgProfile profile={profile} />}
                        {profile_status === NetworkStatus.StatusFailed && <p style={{color:'grey'}}>暂无内容</p>}
                    </Grid.Column>
                    <Grid.Column width={10}>
                        {status === NetworkStatus.StatusSuccess && <FBOrgRepos repos={repos} />}
                        {status === NetworkStatus.StatusFailed && <p style={{ color: 'grey' }}>暂无内容</p>}
                    </Grid.Column>
                </Grid>
                
            </div>
        )
    }
}

FBOrgApp.propsTypes = {
    status: PropTypes.string.isRequired,
    profile_status: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired,
    onLoadData: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
}

FBOrgApp.defaultProps = {
    repos: [],
    profile: [],
    error: [],
    status: NetworkStatus.StatusLoading,
    profile_status: NetworkStatus.StatusLoading,
}

const mapStateToProps = (state) => {
    return {
        repos: state.FBOrgApp.repos,
        profile: state.FBOrgApp.profile,
        status: state.FBOrgApp.repos.status,
        profile_status: state.FBOrgApp.profile.profile_status,
        error: state.FBOrgApp.repos.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadOrgRepos: () => dispatch(actions.fetchFBRepos()),
        onLoadOrgProfile: () => dispatch(actions.fetchFBProfile())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(FBOrgApp);