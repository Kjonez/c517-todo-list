import types from './types';
import data from './data';

export function getTodos(){
    return {
        type: types.GET_LIST,
        payload: data
    }
}
