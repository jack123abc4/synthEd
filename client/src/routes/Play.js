import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import './play.scss'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { QUERY_TRACKS, QUERY_NOTES, QUERY_NOTES_BY_TRACK, QUERY_TRACK_BY_TYPE } from '../utils/queries';

import NoteSquare from '../components/sequencer/NoteSquare'
import SequencerPanel from '../components/sequencer/SequencerPanel'


const Play = () => {
    // const { trackLoading, trackData } = useQuery(QUERY_TRACKS);
    // const trackList = trackData;

    const { loading, error, data } = useQuery(
        QUERY_TRACK_BY_TYPE, {
        variables: {trackType:"sequencer_main"}
    });

    console.log("Importing...");
    console.log(data);
    // const noteList = data?.notes || [];
    // const noteList = noteData;
    // console.log(noteList);
    if (loading) return (<div >Loading...</div>);
    if (error) return (<div> Error: {error.message} </div>)
    if (data)
    return(
        <div className='sequencer'>
            <h1>Sequencer</h1>
            
            {/* <ul>
                {noteList.map((note) => {
                    return (
                        <li id={note.freq}>
                            {note.freq}
                        </li>
                    )
                }
            )}
        </ul> */}
        
          <div>
            <SequencerPanel 
            trackId = {data.trackByType._id}/>
          </div>
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