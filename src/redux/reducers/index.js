import { combineReducers } from 'redux';
import { countries } from './countriesReducer';
import { genres } from './genresReducer';
import { kyc } from './kycReducer';
import { song } from './songReducer';
import { songs } from './songsReducer';

export const rootReducer = combineReducers({
    countries,
    genres,
    kyc,
    song,
    songs,
});