import _ from 'lodash';
import React, { Component } from 'react';

export default class TopicList extends Component {

    render() {
        return (
            <ul className="list-group">
                {console.log(this.props)}{_.map(this.props.rowsIdArray, this.renderRowById.bind(this))}
            </ul>
        );
    }

    renderRowById(rowId) {
        return (
            <li className="list-group-item" key={rowId}>
               {this.props.renderRow(_.get(this.props.rowsById, rowId))}
            </li>
        );
    }

}