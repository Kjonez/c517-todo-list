import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleTodo } from '../actions/index';

class Details extends Component {
    componentWillMount(){
        const { id } = this.props.match.params;

        this.props.getSingleTodo(id);
    }
    render(){
        const { single } = this.props;
        if(!single){
            return <h1>Loading...</h1>
        }
        console.log('Item:', single);
        return (
            <div>
                <Link to="/" className="btn btn-outline-primary">Go Back</Link>
                <h1>Item Title: {single.title}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        single: state.todos.single
    }
}

export default connect(mapStateToProps, {getSingleTodo})(Details);
