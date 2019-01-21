import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import { createStore } from 'redux';
import reduces from '../../reducer';
import { togleVisibleFaq} from "../../actions";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
