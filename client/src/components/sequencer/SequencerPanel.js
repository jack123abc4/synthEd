import React, { useState, useEffect } from 'react';
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
    const [measure, setMeasure] = useState(5);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
    let loop;
    let timer = null;

    useEffect(() => {
        Tone.start();
        loop = new Tone.Loop((time) => {
            // triggered every eighth note.
            console.log(measure)
            changeMeasure(1);
        }, "4n");
    },[]);
        
    
    // loop.start(0);
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

    const changeMeasure = (step) => {
        if (step === -1) {
            if (measure > 0) {
                setMeasure(measure-1);
                
            }
            else {
                setMeasure(15);
            }
            console.log("measure:",measure)
        }
        else if (step === 1) {
            if (measure < 15) {
                console.log("measure forward",measure,measure+1);
                setMeasure(measure+1);
            }
            else {
                console.log("measure wrapped",measure);
                setMeasure(0);
            }
        }
    }
    const handleMeasureBack = () => {
        if (measure > 0) {
            setMeasure(measure-1);
            
        }
        else {
            setMeasure(15);
        }
        console.log("measure:",measure)
    }

    

    const handleMeasureForward = () => {
        if (measure < 15) {
            console.log("measure forward",measure);
            setMeasure(measure+1);
        }
        else {
            console.log("measure wrapped",measure);
            setMeasure(0);
        }
        
        
    }

    const handlePlay = async (event) => {
        
        // await Tone.start();

        Tone.start();
        console.log(`Clicked! Changed state ${currentlyPlaying} to ${!currentlyPlaying}`);
        setCurrentlyPlaying(!currentlyPlaying);
        if (!currentlyPlaying) {
            Tone.Transport.start();
            loop.start(measure);
            
        }
        else {
            Tone.Transport.stop();
            
        }

    }
    let playState = !currentlyPlaying ? "Play" : "Pause";
    return(
        <>
    <button onClick={handlePlay}>{playState}</button>
    <h2>Measure: {measure}</h2>
    <button onClick={handleMeasureBack}>Back</button>
    <button onClick={handleMeasureForward}>Forward</button>
    <Grid container>
        {noteSquareGrid.map(function(col) {
            return (col)
        })}
    </Grid>
    </>)
};

export default SequencerPanel;