import types from '../actions/types';
const DEFAULT_STATE = { list: [], single: null };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_LIST:
            return { ...state, list: action.payload };
        case types.GET_SINGLE:
            return {...state, single: action.payload};
        case types.DELETE_ITEM:
            return {...state, single: null};
        default:
            return state;
    }
}
