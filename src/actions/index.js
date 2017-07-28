import axios from 'axios';
import types from './types';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=demouser517';

export function getTodos(){
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);
    return {
        type: types.GET_LIST,
        payload: request
    }
}

export function addTodo(item){
    const request = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: request
    }
}

export function getSingleTodo(id){
    const request = axios.get(`${BASE_URL}/todos/${ id + API_KEY}`);

    return {
        type: types.GET_SINGLE,
        payload: request
    }
}

export function deleteTodo(id){
    const request = axios.delete(`${BASE_URL}/todos/${ id + API_KEY}`);

    return {
        type: types.DELETE_ITEM,
        payload: request
    }
}

export function toggleTodo(id){
    const request = axios.put(`${BASE_URL}/todos/${ id + API_KEY}`);

    return {
        type: types.TOGGLE_COMPLETE,
        payload: request
    }
}
