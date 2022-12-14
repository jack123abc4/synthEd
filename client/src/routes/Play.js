import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import './play.scss'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { QUERY_TRACKS, QUERY_NOTES, QUERY_NOTES_BY_TRACK, QUERY_TRACK_BY_TYPE } from '../utils/queries';
import { DELETE_NOTES } from '../utils/mutations'

import NoteSquare from '../components/sequencer/NoteSquare'
import SequencerPanel from '../components/sequencer/SequencerPanel'
import Loader from '../components/sequencer/Loader'
import {useLocation} from 'react-router-dom';

const Play = () => {
    // const { trackLoading, trackData } = useQuery(QUERY_TRACKS);
    // const trackList = trackData;
    const [deleteNotes, { noteError }] = useMutation(DELETE_NOTES);
        const { loading, error, data } = useQuery(
            QUERY_TRACK_BY_TYPE, {
            variables: {trackType:"sequencer_main", wipe:true}
        });
        useEffect(() => {
            // if (data) {
            //     console.log("TRACK ID", data.trackByType._id)
            //     deleteNotes({variables: {trackId: data.trackByType._id}});
            // }
            
        }, [data])
        const location = useLocation();
        console.log("STATE", location.state)
    if (location.state) {
        console.log("LOCATION",location.state.trackId)
    }
    
    if (location.state === null) {
        
        

        console.log("Importing...");
        console.log(data);
        // const noteList = data?.notes || [];
        // const noteList = noteData;
        // console.log(noteList);
        if (loading) return (<div >Loading...</div>);
        if (error) return (<div> Error: {error.message} </div>)
        if (data) {
            
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
                trackId = {data.trackByType._id} load={false}/>
            </div>
            </div>
            
        )
            return(
                <div>
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
        }


        
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
    else {
        console.log(location.trackId)
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
            
                <Loader
                trackId = {location.state.trackId} load={true}/>
            </div>
            </div>
    )}
}

export default Play;