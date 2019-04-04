export const validateSongWriterForm = (song) => {
    let errors = {
        songWriters: [],
    };

    const songWriters = [ ...song.songWriters ];
    let songwriterPercentageSum = 0;
    for (const [index, writer] of songWriters.entries()) {
        errors.songWriters[index] = {};
        if (writer.songwriterPercentage === '') {
            errors.songWriters[index].songwriterPercentage = true;
        }
        if (writer.email === '') {
            errors.songWriters[index].email = true;
        }
        if (Number(writer.publisherPercentage) > 100) {
            errors.songWriters[index].publisherPercentage = true;
        }
        songwriterPercentageSum = songwriterPercentageSum + Number(writer.songwriterPercentage);
    }
    if (songwriterPercentageSum !== 100) {
        for (const [index, writer] of songWriters.entries()) {
            errors.songWriters[index].songwriterPercentage = true;
        }
    }

    return errors;
}