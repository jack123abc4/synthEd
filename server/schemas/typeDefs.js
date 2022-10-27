const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Track {
    _id: ID!
    name: String
    type: String
    bpm: Int
    length: Int
    notes: [Note]
  }

  type Note {
    _id: ID!
    freq: Float
    name: String
    type: String
    gain: Float
    decay: Float
    length: Int
    position: Int
    track: Track
  }

  type Query {
    track(_id: String): [Track]
    tracks: [Track]
    note(_id: String): [Note]
    notes: [Note]
    trackByType(type: String): Track
  }

  type Mutation {
    createNoteByName(noteName: String): Note
    addNoteToTrack(trackId: String, noteId: String): Track
    createTrack(trackType: String): Track
  }
`;

module.exports = typeDefs;
