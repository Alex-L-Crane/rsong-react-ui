export const validateSongWriterForm = (song) => {
    let errors = {
        songWriters: [],
    };

    const songWriters = [ ...song.songWriters ];
    let songwriterPercentageSum = 0;
    for (const [index, writer] of songWriters.entries()) {
        let error = {}
        if (writer.songwriterPercentage === '') {
            error.songwriterPercentage = true;
        }
        if (writer.email === '') {
            error.email = true;
        }
        if (Number(writer.publisherPercentage) > 100) {
            error.publisherPercentage = true;
        }
        songwriterPercentageSum = songwriterPercentageSum + Number(writer.songwriterPercentage);
        if (Object.keys(error).length > 0 && error.constructor === Object) {
            errors.songWriters[index] = error;
        }
    }
    if (songwriterPercentageSum !== 100 && songWriters.length > 0) {
        errors.songwriterPercentageSum = true;
    }

    return errors;
}