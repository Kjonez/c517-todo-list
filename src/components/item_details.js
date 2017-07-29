import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Confirm from './confirm';

class Details extends Component {
    componentWillMount(){
        const { id } = this.props.match.params;

        this.props.getSingleTodo(id);
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.single || !nextProps.single.item){
            this.props.history.push('/');
        }
    }

    tsToTime(ts){
        return new Date(parseInt(ts)).toLocaleString();
    }

    handleDelete(id){
        this.props.deleteTodo(id);
    }

    render(){
        const { single } = this.props;
        if(!single || !single.item){
            return <h1>Loading...</h1>
        }
        const { item, key } = single;
        return (
            <div className="card mt-5">
                <div className="card-block">
                    <h2 className="card-title">Item Title: {item.title}</h2>
                    <h4 className="card-subtitle mb-2 text-muted">Item Details: {item.details}</h4>
                    <p>Created: {this.tsToTime(item.created)}</p>
                    <p>Item {item.complete ? `was completed ${this.tsToTime(item.completed)}` : 'is not completed'}</p>
                    <Link to="/" className="btn btn-outline-primary mr-2">Go Back</Link>
                    <Confirm message={item.title} title="Are you sure you want to delete todo item:" text="Delete" onClick={() => { this.handleDelete(key) }} className="btn btn-outline-danger mr-2"/>
                    <Confirm message={item.title} title={`Are you sure you want to ${item.complete ? 'restore' : 'complete'} list item:`} text={ item.complete ? 'Reopen' : 'Complete'} onClick={() => { this.props.toggleTodo(key, item.complete) }} className={`btn btn-outline-${ item.complete ? 'warning' : 'info'}`}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        single: state.todos.single
    }
}

export default connect(mapStateToProps, actions)(Details);
