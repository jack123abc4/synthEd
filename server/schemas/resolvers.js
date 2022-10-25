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
    notes: async () => {
      return await Note.find({});
    }

  }
};

module.exports = resolvers;
