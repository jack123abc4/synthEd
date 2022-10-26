import React, { useState } from 'react';
import NoteSquare from './NoteSquare';
import Grid from '@mui/material/Grid';

function SequencerPanel() {
    let index = 0;
    const width = 16;
    const height = 16;
    const noteSquareGrid = [];
    for (let row=0; row < width; row ++) {
        const noteSquareRow = [];
        for (let col = 0; col < height; col++) {
            noteSquareRow.push(
            <Grid key={index}>
                <NoteSquare>xs</NoteSquare>
                
            </Grid>)
            index++;
        }
        noteSquareGrid.push(noteSquareRow);
    }
    return(<Grid>
        {noteSquareGrid.map(function(row) {
            return (row)
        })}
    </Grid>)
};

export default SequencerPanel;