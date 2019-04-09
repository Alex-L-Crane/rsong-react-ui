import { axiosInstance } from "../helpers/axiosHelper";

export const fetchSong = (id) => {
    return {
        type: 'GET_SONG',
        payload: axiosInstance.get('/songs', {
            id
        })
    }
}

export const updateSong = (data) => {
    return {
        type: 'UPDATE_SONG',
        payload: axiosInstance.put(
            'songs', {
                data
            }
        )
    }
}

export const addSong = (data, genres) => {
    const formData = transformSongData(data, genres);
    return axiosInstance.post('/songs', formData, {
        headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`}
    });
}

export const updateSongData = (data) => {
    return {
        type: 'UPDATE_SONG_DATA',
        payload: data
    }
}

export const resetSongData = () => {
    return {
        type: 'RESET_SONG_DATA',
        payload: {}
    }
}

const transformSongData = (data, genres) => {
    const formData = new FormData();

    formData.append('title', data.songTitle);
    formData.append('song_subtitle', data.songSubTitle);
    formData.append('song_file', data.songFile);

    const genresFormat = [];
    if (data.genres.genres1 !== '') {
        for (const genre of genres) {
            if (genre.name === data.genres.genres1) {
                genresFormat.push(genre._id);
            }
        }
    }
    if (data.genres.genres2 !== '') {
        for (const genre of genres) {
            if (genre.name === data.genres.genres2) {
                genresFormat.push(genre._id);
            }
        }
    }
    if (data.genres.genres3 !== '') {
        for (const genre of genres) {
            if (genre.name === data.genres.genres3) {
                genresFormat.push(genre._id);
            }
        }
    }
    formData.append('genres', JSON.stringify(genresFormat));

    formData.append('main_artist_name', data.mainArtist);

    const additionalArtistsFormat = [];
    for (const additionalArtist of data.additionalArtists) {
        let additionalArtistFormat = {};
        additionalArtistFormat['name'] = additionalArtist.formTitle;
        additionalArtistsFormat.push(additionalArtistFormat);
    }
    formData.append('artists', JSON.stringify(additionalArtistsFormat));

    formData.append('album_art_image_file', data.albumArt);
    formData.append('release_date', data.releaseDate);

    const songWritersFormat = [];
    for (const songWriter of data.songWriters) {
        let songWriterFormat = {};
        songWriterFormat['name'] = songWriter.formTitle;
        songWriterFormat['publisher'] = songWriter.publisherName;
        songWriterFormat['percentage_100_total_song'] = songWriter.songwriterPercentage;
        songWriterFormat['percentage_100_publisher'] = songWriter.publisherPercentage;
        songWriterFormat['publisher_rights_organization'] = songWriter.pro;
        songWriterFormat['rev_email'] = songWriter.email;
        songWriterFormat['iswc'] = songWriter.iswc;
        songWritersFormat.push(songWriterFormat);
    }
    formData.append('song_writers', JSON.stringify(songWritersFormat));

    const ownersFormat = [];
    for (const owner of data.owners) {
        let ownerFormat = {};
        ownerFormat['name'] = owner.formTitle;
        ownerFormat['role'] = owner.role;
        ownerFormat['percentage_100'] = owner.ownerPercentage;
        ownerFormat['rev_wallet_address'] = owner.wallet;
        ownerFormat['rev_email'] = owner.email;
        ownerFormat['isrc'] = owner.isrc;
        ownersFormat.push(ownerFormat);
    }
    formData.append('sound_owners', JSON.stringify(ownersFormat));

    const collaboratorsFormat = [];
    for (const collaborator of data.collaborators) {
        let collaboratorFormat = {};
        collaboratorFormat['name'] = collaborator.formTitle;
        collaboratorFormat['role'] = collaborator.role;
        collaboratorFormat['percentage_100'] = collaborator.ownerPercentage;
        collaboratorFormat['rev_wallet_address'] = collaborator.wallet;
        collaboratorFormat['rev_email'] = collaborator.email;
        collaboratorFormat['isrc'] = collaborator.isrc;
        collaboratorsFormat.push(collaboratorFormat);
    }
    formData.append('collaborators', JSON.stringify(collaboratorsFormat));

    return formData;
}