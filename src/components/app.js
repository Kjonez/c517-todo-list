import React from 'react';
import List from './list';
import { Route, Link } from 'react-router-dom';
import AddForm from './add_form';

const App = () => (
    <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add" component={AddForm}/>
    </div>
);

export default App;
