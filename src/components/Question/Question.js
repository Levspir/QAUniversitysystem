import React, { Component } from 'react';
import axios from 'axios';

export default class Question extends Component {
    state = {
        person: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res);
                this.setState({person: res.data});
            });
    }
    render() {
        return (
            <ul>
                {this.state.person.map(person => <li key={person.id}>{person.question}</li> )}
            </ul>

        )
    }
}
