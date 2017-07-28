import React from 'react';
import List from './list';
import { Route, Link } from 'react-router-dom';
import AddForm from './add_form';
import Details from './item_details';

const App = () => (
    <div className="container">
        <Route exact path="/" component={List}/>
        <Route path="/add" component={AddForm}/>
        <Route path="/todo/:id" component={Details}/>
    </div>
);

export default App;
