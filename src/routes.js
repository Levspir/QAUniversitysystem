import React from 'react';
// eslint-disable-next-line to
import { BrowserRouter, Route,  } from 'react-router-dom';
import Home from './components/Home';
// import more components
export default (
    <BrowserRouter >
        <div>
            <Route path='/' component={Home} />
        </div>
    </BrowserRouter>
);
