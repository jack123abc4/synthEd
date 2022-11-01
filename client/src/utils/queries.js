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
  query getTrackByType($trackType: String, $wipe:Boolean) {
    trackByType(type: $trackType, wipe:$wipe) {
      _id
    }
  }
`

export const QUERY_TRACKS_BY_TYPE = gql`
  query getTracksByType($trackType: String) {
    tracksByType(type: $trackType) {
      _id
      name
      type
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

export const QUERY_ACTIVE_NOTES_BY_TRACK = gql`
query getActiveNotesByTrack($_id: String, $position: Int) { 
  activeNotesByTrack(_id: $_id,active: true, position: $position) {

      freq
      type
      gain
      decay
      position
      length
      name
    
  }
}
`;

export const QUERY_ALL_ACTIVE_NOTES_BY_TRACK = gql`
query getAllActiveNotesByTrack($_id: String) { 
  allActiveNotesByTrack(_id: $_id,active: true) {

      freq
      type
      gain
      decay
      position
      length
      name
    
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

export const QUERY_NOTE_BY_POSITION = gql`
  query getNoteByPosition($trackId: String, $noteName: String, $position: Int) {
    noteByPosition(trackId: $trackId, name: $noteName, position: $position) {
        _id
        active
      }
    }
  

`



