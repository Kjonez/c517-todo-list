import React, { Component } from 'react';
import List from './list';
import Add from './add_todo';
import { todo_data } from './dummy_data';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: todo_data
        }
    }

    addTodo(item){
        const { list } = this.state;

        this.setState({
            list: [item, ...list]
        });
    }
    
    render(){
        return (
            <div className="container">
                <h1>Todo List</h1>
                <Add add={(i) => this.addTodo(i)}/>
                <List list={this.state.list}/>
            </div>
        );
    }
}

export default App;
