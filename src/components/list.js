import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/index';
import { db } from '../firebase';
import Add from './add_form';
import Confirm from './confirm';

class List extends Component {
    componentWillMount(){
        db.ref('todos/').on('value', (snapshot) => {
            this.props.getTodos(snapshot.val());
        });
    }

    handleDelete(id){
        this.props.deleteTodo(id);
    }

    render(){
        const { list } = this.props;
        const listElements = Object.keys(list).map((key, index) =>{
            const item = list[key];
            return (
                <li key={index} className="list-group-item">
                    <div className="col-6">
                        <Link to={`/todo/${key}`}>{item.title}</Link>
                    </div>
                    <div className="col-4">
                        <span className={item.complete ? 'text-success' : 'text-danger'}>{item.complete ? 'Completed' : 'Incomplete'}</span></div>
                    <div className="col-2">
                        <Confirm className="btn btn-outline-danger" message={item.title} title="Are you sure you want to delete todo item:" text="Delete" onClick={() => this.handleDelete(key)}/>
                    </div>
                </li>
            )
        })
        return (
            <div>
                <h1>To Do List</h1>
                <Add/>
                <ul className="list-group">
                    { listElements }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        list: state.todos.list
    }
}

export default connect(mapStateToProps, {getTodos, deleteTodo})(List);
