import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'
import thunk from 'redux-thunk';
import Root from "./routes";
import reducer from "./reducer";
import { createStore, applyMiddleware } from 'redux'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
