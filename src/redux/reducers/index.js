import { combineReducers } from 'redux';

import { songs } from './songsReducer';

export const rootReducer = combineReducers({
    songs
});