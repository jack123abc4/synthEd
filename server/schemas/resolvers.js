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
    tracksByType: async(parent, {type}) => {
      console.log("TYPE: ",type)
      const params = type ? { type } : {};
      const tList = await Track.find({type});
  
      return tList;
    },
    activeNotesByTrack: async(parent, {_id, active, position}) => {
      return await Note.find({trackId: _id, active, position})
    },
    allActiveNotesByTrack: async(parent, {_id, active}) => {
      return await Note.find({trackId: _id, active})
    },
    noteByPosition: async(parent, {trackId, name, position}) => {
      return await Note.findOne({trackId: trackId, name:name, position:position});
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
    },
    saveTrack: async(parent, {trackId, name}) => {
        const oldTrack = await Track.find({_id: trackId});
        
        // if (oldTrack.type === "sequencer_main") {
          return await Track.create({name:name, notes: oldTrack.notes, type:"sequencer"})
        // }
        // return oldTrack;
    },
    deleteTrack: async(parent, {trackId}) => {
      return await Track.deleteOne({_id:trackId})
    }
  }
};

module.exports = resolvers;
