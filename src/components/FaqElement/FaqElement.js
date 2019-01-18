import React, {Component} from 'react';

 class FaqElement extends Component
{
    state ={
        nestedVisible: false
    };
    toggleNested = ()=> {
        this.setState((state) => {
            return{
               nestedVisible: !state.nestedVisible
            };
        });

    };
    render()
    {
        const { question, answer } = this.props;
        return (
            <span className=""
            onClick={this.toggleNested}>{question}

                { this.state.nestedVisible ? <span className="card card-body">{answer}</span> : null }
        </span>
        );
    }
}
export default FaqElement;