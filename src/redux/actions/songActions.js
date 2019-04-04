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

export const addSong = (data) => {
    console.log(data)
    const formData = transformSongData(data);
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

const transformSongData = (data) => {
    const formData = new FormData();

    formData.append('title', data.songTitle);
    formData.append('song_file', data.songFile);

    // const genresFormat = [];
    // if (data.genres1 !== '') {
    //     genresFormat.push();
    // }
    // if (data.genres2 !== '') {
    //     genresFormat.push();
    // }
    // if (data.genres3 !== '') {
    //     genresFormat.push();
    // }
    // formData.append('genres', genresFormat);

    formData.append('genres', ["5ca5ff3b6fb25b17d88d7826"]);
    formData.append('main_artist_name', data.mainArtist);

    const additionalArtistsFormat = [];
    for (const additionalArtist of data.additionalArtists) {
        let additionalArtistFormat = {};
        additionalArtistFormat['name'] = additionalArtist.formTitle;
        additionalArtistsFormat.push(additionalArtistFormat);
    }
    formData.append('artists', additionalArtistsFormat);

    formData.append('album_art_image_file', data.albumArt);

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
    formData.append('song_writers', songWritersFormat);

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
    formData.append('sound_owners', ownersFormat);

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
    formData.append('collaborators', collaboratorsFormat);

    return formData;
}