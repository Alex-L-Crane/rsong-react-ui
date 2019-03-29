import { combineReducers } from 'redux';

import { addKyc } from './addKycReducer';
import { addSong } from './addSongReducer';
import { countries } from './countriesReducer';
import { genres } from './genresReducer';
import { kyc } from './fetchKycReducer';
import { song } from './songReducer';
import { songs } from './songsReducer';
import { updateKyc } from './updateKycReducer';
import { updateSong } from './updateSongReducer';

export const rootReducer = combineReducers({
    addKyc,
    addSong,
    countries,
    genres,
    kyc,
    song,
    songs,
    updateKyc,
    updateSong,
});