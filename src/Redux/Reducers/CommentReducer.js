import { combineReducers } from 'redux'
import { addComtType, increaseType } from '../Actions/CommentActionTypes';


function loadComments(){
    let commentData = localStorage.getItem('comments');
    if (commentData) {
        let _comments = JSON.parse(commentData);
        return _comments;
    }
    return [];
}

const initialState = {
    comments: [],
    count: 0
}

if(initialState.comments !== undefined){
    initialState.comments = loadComments();
}

///Reducer拆分时每个单独reducer的名字和State结构里状态的key值保持一致，这样组装才能成功
function count(state = 0, action) {
    if(action.type === increaseType){
        return state+1;
    }
    return state;
}

function comments(state = initialState.comments, action) {
    // console.log(state);
    if(action.type === addComtType){
        return [
            ...state,
            action.value
        ];
    }
    return state;
}

// function CommentReducer(state = initialState, action){

//     const {count, comments} = state;

//     switch (action.type) {
//         case addComtType:
//             return {
//                 count: count,
//                 comments: [
//                     ...comments,
//                     action.value]
//             }
//         case increaseType:
//             return Object.assign({}, state, {
//                 count: count + 1
//             })
//         default:
//             return state
//         }
// }

// export default CommentReducer;

const CommentReducer = combineReducers({
        count, 
        comments
});

export default CommentReducer;