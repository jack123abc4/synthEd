import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { QUERY_TRACKS, QUERY_NOTES, QUERY_NOTES_BY_TRACK } from '../utils/queries';

import NoteSquare from '../components/sequencer/NoteSquare'

const Play = () => {
    const { trackLoading, trackData } = useQuery(QUERY_TRACKS);
    const trackList = trackData?.track || [];

    const { noteLoading, noteData } = useQuery(QUERY_NOTES);

    const noteList = noteData?.tech || [];
    return(
        <ul>
            {noteList.map((note) => {
                return (
                    <li>
                        {note.freq}
                    </li>
                )
            }
        )}
        </ul>
        

    )   
}

export default Play;