import { combineReducers } from 'redux';

import { countries } from './countriesReducer';
import { genres } from './genresReducer';
import { addSong, songs } from './songsReducer';

export const rootReducer = combineReducers({
    addSong,
    countries,
    genres,
    songs,
});