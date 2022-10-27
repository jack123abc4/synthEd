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
    }
  }
`;

export const QUERY_TRACKS = gql`
  query allTracks {
    tracks {
      _id
    }
  }
`

export const QUERY_TRACK_BY_TYPE = gql`
  query getTrackByType($trackType: String) {
    trackByType(type: $trackType) {
      _id
    }
  }
`


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

export const QUERY_NOTE_BY_ID = gql`
  query getNoteById($_id: String) {
    note(_id: $_id) {
      freq
      position
      _id
      track {
        _id
      }
    }
  }
`

