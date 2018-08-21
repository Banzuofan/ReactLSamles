import { combineReducers } from 'redux';
import { 
    Fetch_Repos_Start, 
    Fetch_Repos_Succeed, 
    Fecth_Repos_Failed, 
    Fetch_Org_Succeed, 
    Fetch_Org_Failed } from './actionTypes';

import * as NetworkStatus from '../Util/NetworkStatus';

const repos = (state = { status: NetworkStatus.StatusLoading}, action) => {
    switch (action.type){
        case Fetch_Repos_Start:{
            return {
                status: NetworkStatus.StatusLoading
            }
        }
        case Fetch_Repos_Succeed: {
            return {
                ...state,
                status: NetworkStatus.StatusSuccess,
                result: action.result
            }
        }
        case Fecth_Repos_Failed: {
            return {
                status: NetworkStatus.StatusFailed,
                error: action.error
            }
        }
        default:{
            return state;
        }
    }
}

const initialProfile = {
    id: 0,
    name: '', 
    avatar_url: '', 
    description: '', 
    location: '',
    repos_url: '',
    created_at: '',
    profile_status: NetworkStatus.StatusLoading,
}

const profile = (state = initialProfile, action) => {
    switch (action.type){
        case Fetch_Org_Succeed:{
            const { 
                id, 
                name, 
                avatar_url, 
                description, 
                location, 
                repos_url, 
                created_at} = action.result
            return {
                ...state,
                id,
                name,
                avatar_url, 
                description,
                location,
                repos_url,
                created_at,
                profile_status: NetworkStatus.StatusSuccess
            }
        }
        case Fetch_Org_Failed: {
            return {
                 ...state,
                profile_status: NetworkStatus.StatusFailed
            }
        }
        default:{
            return state;
        }
    }
}

const FBOrgApp = combineReducers({
    profile,
    repos
});

export default FBOrgApp;

