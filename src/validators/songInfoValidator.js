export const validateSongInfoForm = (song) => {
    let errors = {};
    if (song.songTitle === '') {
        errors.songTitle = true;
    }
    if (song.songFile === null) {
        errors.songFile = true;
    }    
    if (song.genres.genres1 === null && song.genres.genres2 === null && song.genres.genres3 === null) {
        errors.genres = true;
    }
    if (song.mainArtist === '') {
        errors.mainArtist = true;
    }
    if (song.releaseDate === null) {
        errors.releaseDate = true;
    }
    return errors;
}