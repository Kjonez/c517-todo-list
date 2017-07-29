import axios from 'axios';
import types from './types';
import { db } from '../firebase';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=demouser517';

export function getTodos(snapshot){
    
    return {
        type: types.GET_LIST,
        payload: snapshot
    }
}

export function addTodo(item){
    const newItem = {
        complete: false,
        completed: null,
        created: new Date().getTime(),
        ...item
    }

    db.ref('todos/').push(newItem);

    return {
        type: types.ADD_ITEM
    }
}

export function getSingleTodo(id){
    return dispatch => {
        db.ref(`todos/${id}`).on('value', snap => {
            dispatch(
                {
                    type: types.GET_SINGLE,
                    payload: {
                        item: snap.val(),
                        key: snap.key
                    }
                }
            )
        });
    }
}

export function deleteTodo(id){
    
    db.ref(`todos/${id}`).set(null);

    return {
        type: types.DELETE_ITEM
    }
}

export function toggleTodo(id, complete){
    const updates = {
        complete: !complete,
        completed: complete ? null : new Date().getTime()
    }
    
    db.ref(`todos/${id}`).update(updates);

    return {
        type: types.TOGGLE_COMPLETE
    }
}
