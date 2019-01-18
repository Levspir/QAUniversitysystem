import React, { Component } from 'react';
import axios from 'axios';
import FaqPanel from "../FaqPanel/FaqPanel";

export default class QuestionInput extends Component {
    state = {
        question: '',
        answer: '',
        visible: false
    };


    showAnswer = (answer) => {
        this.setState({answer: answer});
    };
    handleChange = event => {
        this.setState({question: event.target.value});
    };
    handleSubmit = event => {
        event.preventDefault();
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const question_text = {
            question_text: this.state.question
        };
        //const str = JSON.stringify(question_text);

        axios.post(`https://qauniversity.cfapps.eu10.hana.ondemand.com/answer`, question_text, axiosConfig)
            .then(res => {
                const answer = res.data.answer;
                this.setState({ answer });

            });

        console.log(this.state);
    };

    toggle = ()=> {
        this.setState((state) => {
            return{
                visible: !state.visible
            };
        });
    };

    render() {

        const { answer } = this.state;
        return (
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="qs"> </label>
                    Задайте ваш вопрос:
                    <input type="text" className="form-control mb-2" name="name" id="qs" onChange={this.handleChange}/>

                    <button className="btn btn-outline-secondary" type="submit"> Задать вопрос </button>
                </form>
                <div className="card-body">{answer}</div>
                <span className="btn btn-primary " onClick={this.toggle}>FAQ</span>
                { this.state.visible ? <FaqPanel/> : null }
            </div>

        )
    }
}
