import { addComtType, increaseType} from '../Actions/CommentActionTypes';

export function addComment (comment) {
    return { type: addComtType, value: comment};
}

export function increaseAction(){
    return { type: increaseType }
}