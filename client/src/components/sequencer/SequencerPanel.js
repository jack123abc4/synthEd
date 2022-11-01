import React, { useState, useEffect, useRef } from 'react';
import NoteSquare from './NoteSquare';
import SaveModal from './SaveModal'
import Grid from '@mui/material/Grid';
import './sequencer.scss';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TRACK_BY_TYPE, QUERY_ACTIVE_NOTES_BY_TRACK } from '../../utils/queries';
import { CREATE_TRACK, CREATE_NOTE_BY_NAME, ADD_NOTE_TO_TRACK, DELETE_NOTES }  from '../../utils/mutations'
import * as Tone from 'tone';
import { letterSpacing } from '@mui/system';


const SequencerPanel = (props) => {
    // const [createTrack, { error }] = useMutation(CREATE_TRACK);
    // const [createNote, { error }] = useMutation(CREATE_NOTE_BY_NAME);
    // const t = await createTrack({
    //     variables: {
    //         trackType: "sequencer"
    //     }
    // })
    // const [trackObj, setTrackObj] = useState(t);
    const [deleteNotes, { noteError }] = useMutation(DELETE_NOTES);
    const [measure, setMeasure] = useState(0);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [queuedAttack, setQueuedAttack] = useState([]);
    const { loading, error, data, refetch } = useQuery(
        QUERY_ACTIVE_NOTES_BY_TRACK, {
        variables: {_id: props.trackId, position:measure+1}})
    // const [nextNotes, setNextNotes] = useQuery(
    //     QUERY_ACTIVE_NOTES_BY_TRACK, {
    //     variables: {position:nextMeasure}});
    let [timer,createTimer] = useState(null);
    
    // const { loading, error, data } = useQuery(
    //     QUERY_TRACK_BY_TYPE, {
    //     variables: {trackType:"sequencer_main"}
    // });
  const getTime = async () => {
    let currentTime = new Date();
    currentTime = currentTime.getTime()/1000;
    const nextMeasure = Math.floor(currentTime-startTime)%16;
    setMeasure(nextMeasure);
    console.log(measure,queuedAttack);
    const synth = new Tone.PolySynth().toDestination();
    synth.triggerAttackRelease(queuedAttack, "8n");
    console.log(startTime,currentTime)
    console.log("tick",nextMeasure);
    const newData = await refetch({})
    // setQueuedAttack(await refetch({}))
    if (newData.data.activeNotesByTrack.length > 0) {
        const newAttack = [];
        for (const note of newData.data.activeNotesByTrack) {
            console.log(note.name)
            newAttack.push(note.name)
        }
        console.log("NEW ATTACK",newAttack);
        setQueuedAttack(newAttack)

        
    }
    else {
        console.log("EMPTY");
    }
    console.log(queuedAttack);
    
    
  };
  
  useEffect(() => {
    
    // const interval = createTimer(setInterval(() => getTime(), 1000));
    // const currentStartTime = new Date();
    // setStartTime(currentStartTime.getTime()/1000)
    
    // return () => clearInterval(interval);
  }, []);

    

    // useEffect(() => {
    //     loop = new Tone.Loop((time) => {
    //         // triggered every eighth note.
    //         // console.log(time)
    //         const currentMeasure = measure
    //         console.log(currentMeasure,currentMeasure+1)
    //         // setTime(time);
    //         // const newMeasure = Math.floor(time-startTime)%16
    //         setMeasure(currentMeasure+1)
    //     }, "8n").start(0);
    // },[]);

    // useEffect(() => {
    //     Tone.start();
    //     loop = new Tone.Loop((time) => {
    //         // triggered every eighth note.
    //         console.log(measure)
    //         changeMeasure(2);
    //     }, "4n").start(measure);
    // },[]);
        
    
    // loop.start(0);

    const noteNames = ["Bb","C", "D", "F", "G"];
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
                noteName = {noteName}
                position = {row}
                measure = {measure}
                currentlyPlaying = {currentlyPlaying}
                trackId = {props.trackId}
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
        const currentMeasure = measure
        // console.log("measure at top: ",measure);
        if (step === -1) {
            if (currentMeasure > 0) {
                setMeasure(currentMeasure-1);
                
            }
            else {
                setMeasure(15);
            }
            // console.log("measure:",currentMeasure)
        }
        else if (step === 1) {
            
            if (currentMeasure < 15) {
                // console.log("measure forward",currentMeasure,currentMeasure+1);
                setMeasure(currentMeasure+1);
            }
            else {
                // console.log("measure wrapped",currentMeasure);
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
        // console.log("measure:",measure)
    }

    

    const handleMeasureForward = () => {
        if (measure < 15) {
            // console.log("measure forward",measure);
            setMeasure(measure+1);
        }
        else {
            // console.log("measure wrapped",measure);
            setMeasure(0);
        }
        
        
    }

    const handlePlay = async (event) => {
        
        // await Tone.start();

        Tone.start();
        console.log(`Clicked! Changed state ${currentlyPlaying} to ${!currentlyPlaying}`);
        setCurrentlyPlaying(!currentlyPlaying);
        if (!currentlyPlaying) {
            console.log("Started!")
            const interval = createTimer(setInterval(() => getTime(), 1000));
            const currentStartTime = new Date();
            setStartTime(currentStartTime.getTime()/1000)
            
            
            
        }
        else {
            console.log("Stopped!")
            clearInterval(timer);
            createTimer(null);
            // await Tone.context.close();
            
            
        }

    }
    const handleSave = async(event) => {

    }
    let playState = !currentlyPlaying ? "Play" : "Pause";
    return(
        <>
    <button className='playBtn' onClick={handlePlay}>{playState}</button>
    <SaveModal></SaveModal>
    <Grid container>
        {noteSquareGrid.map(function(col) {
            return (col)
        })}
    </Grid>
    </>)
};

export default SequencerPanel;