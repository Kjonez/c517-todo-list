import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTodos } from '../actions/index';

class List extends Component {
    componentWillMount(){
        this.props.getTodos();
    }

    render(){
        const listElements = this.props.list.map((item, index) =>{
            return (
                <li key={index}>
                    <Link to={`/todo/${item._id}`}>{item.title}</Link>
                </li>
            )
        })
        return (
            <div>
                <Link to="/add" className="btn btn-outline-success my-2">Add Item</Link> 
                <h1>To Do List</h1>
                <ul>
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

export default connect(mapStateToProps, {getTodos: getTodos})(List);
