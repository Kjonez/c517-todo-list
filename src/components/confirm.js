import React, { Component } from 'react';
import './confirm.css'

class Confirm extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false
        }
    }

    handleConfirm(){
        this.props.onClick();
        this.setState({showModal: false});
    }

    render(){
        const { text, className, message, title } = this.props;
        if(this.state.showModal){
            return (
                <div className="confirm-modal">
                    <div className="confirm-modal-content">
                        <p>{title}</p>
                        <p>{message}</p>
                        <button onClick={() => this.setState({showModal: false})} className="btn btn-outline-danger">Cancel</button>
                        <button onClick={() => this.handleConfirm()} className="btn btn-outline-success mr-2">Confirm</button>
                    </div>
                </div>
            )
        }
        return (
            <button className={className} onClick={() => this.setState({showModal: true})} >{text}</button>
        )
    }
}

export default Confirm;
