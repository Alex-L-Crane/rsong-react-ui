export const validateSongInfoForm = (song) => {
    let errors = {};
    if (song.songTitle === '') {
        errors.songTitle = true;
    }
    if (song.songFile) {
        errors.songFile = true;
    }    
    if (Object.keys(song.genres).length === 0 && song.genres.constructor === Object) {
        errors.genres = true;
    }
    if (song.mainArtist === '') {
        errors.mainArtist = true;
    }
    if (song.albumArt) {
        errors.albumArt = true;
    }
    return errors;
}