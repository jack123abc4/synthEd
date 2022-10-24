const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Track {
    _id: ID
    name: String
    bpm: Int
    length: Int
    notes: [Note]
  }

  type Note {
    _id: ID
    freq: Float
    type: String
    gain: Float
    decay: Float
    length: Int
    position: Int
    track: Track
  }

  type Query {
    tracks: [Track]
    notes: [Note]
  }
`;

module.exports = typeDefs;
