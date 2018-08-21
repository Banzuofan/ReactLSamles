import { 
    Fetch_Repos_Start, 
    Fetch_Repos_Succeed, 
    Fecth_Repos_Failed, 
    Fetch_Org_Succeed, 
    Fetch_Org_Failed } from './actionTypes';


export const fetchReposDidBegin = () => ({
    type: Fetch_Repos_Start
})

export function fecthReposWithSuccess(result){
    return {
        type: Fetch_Repos_Succeed,
        result: result
    }
}

export const fetchReposWithError = (error) => ({
    type: Fecth_Repos_Failed,
    error
})

export function fetchOrgWithSuccess(result){
    return{
        type: Fetch_Org_Succeed,
        result
    }
}

export function fetchOrgWithError(error){
    return{
        type: Fetch_Org_Failed,
        error
    }
}


const queryUrl_FBProfile = 'https://api.github.com/orgs/facebook';
const queryUrl_FBRepos = 'https://api.github.com/orgs/facebook/repos';

export const fetchFBRepos = () => {
    return (dispatch) => {
        dispatch(fetchReposDidBegin());
        return fetch(queryUrl_FBRepos).then((response) => {
            if(response.status !== 200){
                throw new Error('Request failed with status '+response.status);
            }
            response.json().then((jsonResult) => {
                dispatch(fecthReposWithSuccess(jsonResult));
            }).catch((error) => {
                dispatch(fetchReposWithError(error));
            });
        }).catch((error) => {
            dispatch(fetchReposWithError(error));
        });
    };
}

export const fetchFBProfile = () => {
    return (dispatch) => {
        return fetch(queryUrl_FBProfile).then((response) => {
            if (response.status !== 200) {
                throw new Error('Request failed with status ' + response.status);
            }
            response.json().then((jsonResult) => {
                dispatch(fetchOrgWithSuccess(jsonResult));
            }).catch((error) => {
                dispatch(fetchOrgWithError(error));
            });
        }).catch((error) => {
            dispatch(fetchOrgWithError(error));
        });
    };
}