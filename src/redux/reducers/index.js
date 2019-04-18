import { combineReducers } from 'redux';
import { countries } from './countriesReducer';
import { genres } from './genresReducer';
import { loader } from './loaderReducer';
import { kyc } from './kycReducer';
import { kycStatus } from './kycStatusReducer';
import { song } from './songReducer';
import { songs } from './songsReducer';

export const rootReducer = combineReducers({
    countries,
    genres,
    loader,
    kyc,
    kycStatus,
    song,
    songs,
});