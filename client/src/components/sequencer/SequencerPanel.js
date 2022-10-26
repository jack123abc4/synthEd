import React, { useState } from 'react';
import NoteSquare from './NoteSquare';
import Grid from '@mui/material/Grid';

function SequencerPanel() {
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