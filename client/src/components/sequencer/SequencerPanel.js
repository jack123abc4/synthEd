import React, { useState } from 'react';
import NoteSquare from './NoteSquare';
import Grid from '@mui/material/Grid';
import { useMutation } from '@apollo/client';
import CREATE_TRACK from '../../utils/mutations'
import CREATE_NOTE_BY_NAME from '../../utils/mutations'
import ADD_NOTE_TO_TRACK from '../../utils/mutations'


const SequencerPanel = async () => {
    const [createTrack, { error }] = useMutation(CREATE_TRACK);
    const t = await createTrack({
        variables: {
            type: "sequencer"
        }
    });
    const [trackObj, setTrackObj] = useState(t);
    
    let index = 0;
    const width = 16;
    const height = 16;
    const noteSquareGrid = [];
    for (let row=0; row < width; row ++) {
        
        const noteSquareCol = [];
        for (let col = 0; col < height; col++) {
            noteSquareCol.push(
            <Grid key={index}>
                <NoteSquare></NoteSquare>
                
            </Grid>)
            index++;
        }
        noteSquareGrid.push(
        <Grid>
            {noteSquareCol.map(function(square) {
                return(square)
            })}
            </Grid>)
    }
    return(<Grid container>
        {noteSquareGrid.map(function(col) {
            return (col)
        })}
    </Grid>)
};

export default SequencerPanel;