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
    active: Boolean
    track: Track

  }

  type Query {
    track(_id: String): [Track]
    tracks: [Track]
    note(_id: String): [Note]
    notes: [Note]
    trackByType(type: String, wipe:Boolean): Track
    tracksByType(type: String): [Track]
    activeNotesByTrack(_id: String, active: Boolean, position: Int): [Note]
    allActiveNotesByTrack(_id: String, active: Boolean): [Note]
    noteByPosition(trackId: String, name: String, position: Int): Note
 
  }

  type Mutation {
    createNoteByName(noteName: String): Note
    addNoteToTrack(trackId: String, noteId: String, position: Int): Track
    createTrack(trackType: String): Track
    toggleNote(noteId: String): Note
    deleteNotes(trackId: String): Track
    saveTrack(trackId: String, name: String): Track
    deleteTrack(trackId: String): Track
  }
`;

module.exports = typeDefs;
