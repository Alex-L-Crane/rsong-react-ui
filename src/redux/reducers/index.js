import { combineReducers } from 'redux';

import { addKyc } from './addKycReducer';
import { addSong } from './addSongsReducer';
import { countries } from './countriesReducer';
import { genres } from './genresReducer';
import { kyc } from './fetchKycReducer';
import { song } from './fetchSongReducer';
import { songs } from './songReducer';
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