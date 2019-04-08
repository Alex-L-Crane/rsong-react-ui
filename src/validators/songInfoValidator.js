export const validateSongInfoForm = (song) => {
    let errors = {};
    if (song.songTitle === '') {
        errors.songTitle = true;
    }
    if (song.songSubTitle === '') {
        errors.songSubTitle = true;
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
    if (song.albumArt === null) {
        errors.albumArt = true;
    }
    if (song.releaseDate === null) {
        errors.releaseDate = true;
    }
    return errors;
}