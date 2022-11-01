import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { QUERY_TRACKS, QUERY_NOTES, QUERY_NOTES_BY_TRACK, QUERY_TRACK_BY_TYPE, QUERY_ALL_ACTIVE_NOTES_BY_TRACK } from '../../utils/queries';
import { DELETE_NOTES } from '../../utils/mutations'


import SequencerPanel from './SequencerPanel'

const Loader = (props) => {
    const { loading, error, data } = useQuery(
        QUERY_ALL_ACTIVE_NOTES_BY_TRACK, {
        variables: {trackId: props.trackId}})
    
    if(data) {
        console.log("LOADER DATA",data)
        return(
            <div>
            <SequencerPanel 
                        trackId = {props.trackId} load={true} activeNotes={data.allActiveNotesByTrack}/>
            </div>
            )
    }
    
}

export default Loader;