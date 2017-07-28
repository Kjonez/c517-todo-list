import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../actions/index';
import Modal from './modal';

class List extends Component {
    componentWillMount(){
        this.props.getTodos();
    }

    handleDelete(id, title){
        if(confirm(`Are you sure you want to delete todo item:\n\n${title}`)){
            this.props.deleteTodo(id).then(() => {
                this.props.getTodos();
            });
        }
    }

    render(){
        const listElements = this.props.list.map((item, index) =>{
            return (
                <li key={index} className="list-group-item">
                    <div className="col-6">
                        <Link to={`/todo/${item._id}`}>{item.title}</Link>
                    </div>
                    <div className="col-4"><span className={item.complete ? 'text-success' : 'text-danger'}>{item.complete ? 'Completed' : 'Incomplete'}</span></div>
                    <div className="col-2">
                        <button onClick={() => { this.handleDelete(item._id, item.title) }} className="btn btn-outline-danger">Delete</button>
                    </div>
                </li>
            )
        })
        return (
            <div>
                <Link to="/add" className="btn btn-outline-success my-2">Add Item</Link> 
                <h1>To Do List</h1>
                <ul className="list-group">
                    { listElements }
                </ul>
                <Modal/>
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
