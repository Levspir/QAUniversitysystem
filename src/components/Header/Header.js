import React, { Component } from 'react';
import lion from '../../lion.jpg';
import {Link} from  'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header className= "bg-primary mb-5">
                <nav className="navbar navbar-expand-md navbar-light fixed-top py-2 " id="main-nav">
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            <img src={lion} alt="logo" style={ {width:120, height:110}} />
                        </a>
                        <button
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">



                                <li className="nav-item">
                                    <Link to="/reddit">Reddit </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
