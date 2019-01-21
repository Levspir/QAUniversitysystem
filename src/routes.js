import React from 'react';
// eslint-disable-next-line to
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';
import Reddit from './components/Reddit';

// import more components
const Root =({ store }) => (
    <Provider store={store}>
    <Router >
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/reddit' component={Reddit} />
        </div>
    </Router>
        </Provider>
);

export default Root;
