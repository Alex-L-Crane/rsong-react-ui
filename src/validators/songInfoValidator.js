export const validateSongInfoForm = (song) => {
    let errors = {};
    if (song.songTitle === '') {
        errors.songTitle = true;
    }
    if (song.songFile === null) {
        errors.songFile = true;
    }    
    if (song.genres.genres1 === '' && song.genres.genres2 === '' && song.genres.genres3 === '') {
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