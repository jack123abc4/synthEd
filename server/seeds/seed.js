const db = require('../config/connection');
const {Note, Track} = require('../models');

const trackData = require('./trackData.json');
const noteData = require('./noteData.json');
console.log(trackData);
console.log(noteData);
db.once('open', async () => {
    await Track.deleteMany({});
    await Note.deleteMany({});

    const tracks = await Track.insertMany(trackData);
    const notes = await Note.insertMany(noteData);

    const defaultTrack = tracks[0];

    for (const note of notes) {
        defaultTrack.notes.push(note._id);
        await defaultTrack.save();

        note.track = defaultTrack._id;
        await note.save();

    }

    process.exit(0);
});