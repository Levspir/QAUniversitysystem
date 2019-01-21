import _ from 'lodash';
import * as types from './actionTypes';
import redditService from './services/reddit';

export const fetchTopics =() => {
    return async(dispatch, getState) => {
        try {
            const subredditArray = await redditService.getDefaultSubreddits();
            const topicsByUrl = _.keyBy(subredditArray, (subreddit) => subreddit.url);
            console.log('Done');
            dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
        } catch (error) {
            console.error(error);
        }
    };
};

