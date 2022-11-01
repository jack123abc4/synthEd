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
    trackByType: async(parent, {type,wipe}) => {
      const params = type ? { type } : {};
      const t = await Track.findOne(params);
      if (wipe) {
        await Note.deleteMany({trackId: t._id})
      }
      return t;
    },
    activeNotesByTrack: async(parent, {_id, active, position}) => {
      return await Note.find({trackId: _id, active, position})
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
    },
    toggleNote: async (parent, {noteId}) => {
      const note = await Note.find({_id:noteId});
      const activeState = !note.active
      console.log(note,activeState);

      return await Note.findOneAndUpdate({_id: noteId}, {active:activeState},{new:true})
    },
    deleteNotes: async(parent, {trackId}) => {
      await Note.deleteMany({trackId: trackId});
      return await Track.find({_id: trackId});
    }
  }
};

module.exports = resolvers;
