import { gql } from '@apollo/client';

export const CREATE_TRACK = gql`
    mutation createTrack($trackType: String) {
        createTrack(trackType:$trackType) {
            _id
            name
            type
        }
    }
`

export const CREATE_NOTE_BY_NAME = gql`
    mutation createNote($noteName: String) {
        createNoteByName(noteName: $noteName) {
            _id
            name
        }
    }
`

export const ADD_NOTE_TO_TRACK = gql`
    mutation addNoteToTrack($trackId: String, $noteId: String, $position: Int) {
        addNoteToTrack(trackId: $trackId, noteId: $noteId, position: $position ) {
            name
            type
            _id
        }
    }
`
export const TOGGLE_NOTE = gql`
  
  mutation toggleNote($_id: String) {
    toggleNote(noteId: $_id) {
        _id
        active
    }
}
`;

export const DELETE_NOTES = gql`
  mutation deleteNotes($trackId: String) {
    deleteNotes(trackId: $trackId) {
        _id
    }
  }
`

export const SAVE_TRACK = gql`
  mutation saveTrack($name: String, $trackId: String) {
    saveTrack(trackId: $trackId, name:$name) {
        _id
        name
        type
    }
  }
`

export const DELETE_TRACK = gql`
  mutation deleteTrack($trackId: String) {
    deleteTrack(trackId: $trackId) {
        _id
    }
  }
`