import React, { useState } from 'react';
import NoteSquare from './NoteSquare';
import Grid from '@mui/material/Grid';
import { useMutation } from '@apollo/client';
import { CREATE_TRACK, CREATE_NOTE_BY_NAME, ADD_NOTE_TO_TRACK }  from '../../utils/mutations'



const SequencerPanel =  () => {
    // const [createTrack, { error }] = useMutation(CREATE_TRACK);
    // const t = await createTrack({
    //     variables: {
    //         trackType: "sequencer"
    //     }
    // })
    // const [trackObj, setTrackObj] = useState(t);

    const noteNames = ["Bb","C", "D", "F", "G", "Bb"];
    // 4 - floor(index%16 / 5)

    let index = 0;
    const width = 16;
    const height = 16;
    const noteSquareGrid = [];
    for (let row=0; row < width; row ++) {
        
        const noteSquareCol = [];
        for (let col = 0; col < height; col++) {
            const numComp = 5 - Math.floor(index%16 / 5);
            const letCompOffset = 0 - Math.floor(index/16);
            const letComp = noteNames[(5-((index+letCompOffset)%5))%5]
            const noteName = `${letComp}${numComp}`
            
            noteSquareCol.push(
            <Grid key={index}>
                <NoteSquare
                textContent = {noteName}
                />
                
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