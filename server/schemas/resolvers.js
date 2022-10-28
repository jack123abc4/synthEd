const { Track, Note } = require('../models');

const resolvers = {
  Query: {
    // schools: async () => {
    //   return await School.find({}).populate('classes').populate({
    //     path: 'classes',
    //     populate: 'professor'
    //   });
    // },
    track: async(parent, {_id}) => {
      const params = _id ? { _id } : {};
      return await Track.find(params).populate('notes');
    },
    tracks: async () => {
      return await Track.find({}).populate('notes');
    },
    note: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return await Note.find(params);
    },
    notes: async () => {
      return await Note.find({});
    },
    trackByType: async(parent, {type}) => {
      const params = type ? { type } : {};
      return await Track.findOne(params);
    }

  },

  Mutation: {
    createNoteByName: async (parent, {noteName}) => {
      return await Note.create({name: noteName});
    },
    addNoteToTrack: async (parent, { trackId, noteId, position }) => {
      const note = await Note.findOneAndUpdate({_id: noteId},{position: position},{new:true})
      return await Track.findOneAndUpdate(
        {_id: trackId},
        {
          $addToSet: { notes: note}
        }
      )
    },
    createTrack: async (parent, {trackType}) => {
      return await Track.create({type: trackType})
    }
  }
};

module.exports = resolvers;
