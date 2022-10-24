const { Track, Note } = require('../models');

const resolvers = {
  Query: {
    // schools: async () => {
    //   return await School.find({}).populate('classes').populate({
    //     path: 'classes',
    //     populate: 'professor'
    //   });
    // },
    tracks: async () => {
      return await Track.find({}).populate('notes');
    },
    notes: async () => {
      return await Note.find({});
    }
  }
};

module.exports = resolvers;
