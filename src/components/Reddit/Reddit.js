import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as topicsActions from '../../actions';
import * as topicsSelectors from '../../reducer'
import TopicList from "../TopicList";

class Reddit extends Component {

    componentDidMount() {
        this.props.dispatch(topicsActions.fetchTopics());
    }


    render() {
        if (!this.props.rowsById) return this.renderLoading();
        return (
            <div className="">
                <TopicList
                    rowsIdArray={this.props.rowsIdArray}
                    rowsById={this.props.rowsById}
                    renderRow={this.renderRow} />
                <div>{console.log(this.props)}</div>
            </div>
        );
    }



    renderRow(row) {
        return (
            <div>
                <h3>{row.title}</h3>
                <p>{row.description}</p>
            </div>
        )
    }

}


    function mapStateToProps(state) {
    return {
        rowsById: topicsSelectors.getTopicsByUrl(state),
        rowsIdArray: topicsSelectors.getTopicsUrlArray(state)
    };
}


export default connect(mapStateToProps)(Reddit);
