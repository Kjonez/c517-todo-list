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

    tsToTime(ts){
        return new Date(parseInt(ts)).toLocaleString();
    }

    handleDelete(id){
        this.props.deleteTodo(id).then(() => {
            this.props.history.push('/');
        });
    }

    render(){
        const { single } = this.props;
        if(!single){
            return <h1>Loading...</h1>
        }
        console.log('Item:', single);
        return (
            <div className="card mt-5">
                <div className="card-block">
                    <h2 className="card-title">Item Title: {single.title}</h2>
                    <h4 className="card-subtitle mb-2 text-muted">Item Details: {single.details}</h4>
                    <p>Created: {this.tsToTime(single.created)}</p>
                    <p>Item {single.complete ? `was completed ${this.tsToTime(single.completed)}` : 'is not completed'}</p>
                    <Link to="/" className="btn btn-outline-primary mr-2">Go Back</Link>
                    <Confirm message={single.title} title="Are you sure you want to delete todo item:" text="Delete" onClick={() => { this.handleDelete(single._id) }} className="btn btn-outline-danger mr-2"/>
                    <Confirm message={single.title} title={`Are you sure you want to ${single.complete ? 'restore' : 'complete'} list item:`} text={ single.complete ? 'Reopen' : 'Complete'} onClick={() => { this.props.toggleTodo(single._id) }} className={`btn btn-outline-${ single.complete ? 'warning' : 'info'}`}/>
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
