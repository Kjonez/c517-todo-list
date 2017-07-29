import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class Add extends Component {

    submitForm(vals, reset){
        this.props.addTodo(vals);
        reset();
    }

    renderInput({input, label, meta: { touched, error}}){
        return (
            <div className="form-group">
                <label className="mr-2">{label}</label>
                <input {...input} name={input.name} type="text" className="form-control mr-2"/>
                {/*<p className="form-text text-danger">{touched && error}</p>*/}
            </div>
        )
    }
    
    render(){
        const { handleSubmit, reset } = this.props;
        return (
            <div className="my-5">
                <form className="form-inline" onSubmit={handleSubmit((values) => this.submitForm(values, reset))}>
                    <Field name="title" label="Title" component={this.renderInput}/>
                    <Field name="details" label="Details" component={this.renderInput}/>
                    <button className="btn btn-outline-success mr-2">Add Item</button>
                    <button onClick={reset} type="button" className="btn btn-outline-danger">Reset</button>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};

    if(values.title && values.title.length < 3){
        errors.title = 'Title must be at least 3 characters';
    }

    if(!values.title){
        errors.title = 'Please enter a title';
    }
    if(!values.details){
        errors.details = 'Please enter some details about your to do item';
    }

    return errors;
}

Add = reduxForm({
    form: 'add-item',
    validate: validate
})(Add);

export default connect(null, {addTodo})(Add);
