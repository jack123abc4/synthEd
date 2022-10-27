import React, { useState } from 'react';
import NoteSquare from './NoteSquare';
import Grid from '@mui/material/Grid';
import { useMutation } from '@apollo/client';
import { GET_TRACK_BY_TYPE } from '../../utils/queries';
import { CREATE_TRACK, CREATE_NOTE_BY_NAME, ADD_NOTE_TO_TRACK }  from '../../utils/mutations'
import * as Tone from 'tone';
import { letterSpacing } from '@mui/system';


const SequencerPanel = () => {
    // const [createTrack, { error }] = useMutation(CREATE_TRACK);
    // const [createNote, { error }] = useMutation(CREATE_NOTE_BY_NAME);
    // const t = await createTrack({
    //     variables: {
    //         trackType: "sequencer"
    //     }
    // })
    // const [trackObj, setTrackObj] = useState(t);
    const [measure, setMeasure] = useState(0);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
    const noteNames = ["Bb","C", "D", "F", "G"];
    // 4 - floor(index%16 / 5)
    const synth = new Tone.Synth().toDestination();
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
                noteName = {noteName}
                position = {row}
                measure = {measure}
                currentlyPlaying = {currentlyPlaying}
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

    const playNote = (event) => {

    }

    const measureBack = (event) => {
        if (measure > 0) {
            setMeasure(measure-1);
        }
        else {
            setMeasure(15);
        }
    }

    const measureForward = (event) => {
        if (measure < 15) {
            setMeasure(measure+1);
        }
        else {
            setMeasure(0);
        }
        
    }

    const handleClick = (event) => {
        console.log(`Clicked! Changed state ${currentlyPlaying} to ${!currentlyPlaying}`);
        setCurrentlyPlaying(!currentlyPlaying);

    }
    let playState = currentlyPlaying ? "Play" : "Pause";
    return(
        <>
    <button onClick={handleClick}>Play</button>
    <h2 >{playState}</h2>
    <h2>Measure: {measure}</h2>
    <button onClick={measureBack}>Back</button>
    <button onClick={measureForward}>Forward</button>
    <Grid container>
        {noteSquareGrid.map(function(col) {
            return (col)
        })}
    </Grid>
    </>)
};

export default SequencerPanel;