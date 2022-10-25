import { gql } from '@apollo/client';

export const QUERY_NOTES = gql`
  query allNotes {
    notes {
      _id
      freq
      type
      gain
      decay
      position
      length
      track
    }
  }
`;

export const QUERY_NOTES_BY_TRACK = gql`
  query allNotesByTrack($_id: String) { 
    tracks(_id: $_id) {
      notes {
        freq
        type
        gain
        decay
        position
        length
      }
    }
  }
`;


