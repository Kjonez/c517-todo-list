import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class Add extends Component {

    submitForm(vals){
        this.props.addTodo(vals).then(() => {
            this.props.history.push('/');
        });
    }
    
    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <Link to="/" className="btn btn-outline-primary my-2">Go Back</Link>
                <h1>Add item</h1>
                <form onSubmit={handleSubmit((values) => this.submitForm(values))}>
                    <div className="form-group">
                        <label>Title</label>
                        <Field name="title" component="input" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Details</label>
                        <Field name="details" component="input" type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-outline-success">Add Item</button>
                </form>
            </div>
        )
    }
}

Add = reduxForm({
    form: 'add-item'
})(Add);

export default connect(null, {addTodo})(Add);
