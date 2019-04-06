import { combineReducers } from 'redux';
import { countries } from './countriesReducer';
import { errorModal } from './errorModalReducer';
import { genres } from './genresReducer';
import { kyc } from './kycReducer';
import { kycStatus } from './kycStatusReducer';
import { song } from './songReducer';
import { songs } from './songsReducer';

export const rootReducer = combineReducers({
    countries,
    errorModal,
    genres,
    kyc,
    kycStatus,
    song,
    songs,
});