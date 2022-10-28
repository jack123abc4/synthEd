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