import * as types from './actionTypes';
import _ from 'lodash';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    topicsByUrl: {},
    selectedTopicUrls: []
});

const reducer = (state=initialState, action) => {
switch (action.type) {
    case 'TOGLE_FAQ':
        return state;
    case types.TOPICS_FETCHED:
        return state.merge({
            topicsByUrl: action.topicsByUrl
        });
    default:
        return state;
}
};
export function getTopicsByUrl(state) {
    return state.topicsByUrl;
}

export function getTopicsUrlArray(state) {
    return _.keys(state.topicsByUrl);
}

export default reducer;