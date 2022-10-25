import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

import { QUERY_TRACKS, QUERY_NOTES, QUERY_NOTES_BY_TRACK } from '../utils/queries';

import NoteSquare from '../components/sequencer/NoteSquare'
console.log("Hello, world!");
const Play = () => {
    // const { trackLoading, trackData } = useQuery(QUERY_TRACKS);
    // const trackList = trackData;

    const { loading, error, data } = useQuery(QUERY_NOTES);

    console.log("Importing...");
    console.log(data);
    const noteList = data?.notes || [];
    // const noteList = noteData;
    console.log(noteList);
    if (loading) return (<div >Loading...</div>);
    if (error) return (<div> Error: {error.message} </div>)
    if (data)
    return(
        <div>
            <h1>Done loading!</h1>
            
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
        </div>
    )
    // return(
        // <ul>
        //     {noteList.map((note) => {
        //         return (
        //             <li>
        //                 {note.freq}
        //             </li>
        //         )
        //     }
        // )}
        // </ul>
        

    // )   
}

export default Play;