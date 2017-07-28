import types from '../actions/types';
const DEFAULT_STATE = { list: [], single: null };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_LIST:
            console.log('Get List Action:', action);
            return { ...state, list: action.payload.data.todos };
        case types.GET_SINGLE:
            console.log('Get single resp:', action);
            return {...state, single: action.payload.data.todo};
        case types.TOGGLE_COMPLETE:
            console.log('TOGGLE COMPLETE reducer:', action);
            return {...state, single: action.payload.data.todo};
        default:
            return state;
    }
}
