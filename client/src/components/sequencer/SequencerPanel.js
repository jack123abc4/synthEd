import React, { useState, useEffect, useRef } from 'react';
import NoteSquare from './NoteSquare';
import SaveModal from './SaveModal'
import Grid from '@mui/material/Grid';
import './sequencer.scss';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TRACK_BY_TYPE, QUERY_ACTIVE_NOTES_BY_TRACK, QUERY_NOTE_BY_POSITION } from '../../utils/queries';
import { CREATE_TRACK, CREATE_NOTE_BY_NAME, ADD_NOTE_TO_TRACK, DELETE_NOTES }  from '../../utils/mutations'
import * as Tone from 'tone';
import { letterSpacing } from '@mui/system';
import { RowingSharp } from '@mui/icons-material';


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
    const [init, setInit] = useState(false);
    const { loading, error, data, refetch } = useQuery(
        QUERY_ACTIVE_NOTES_BY_TRACK, {
        variables: {_id: props.trackId, position:measure+1}})
    const { positionLoading, positionError, positionData } = useQuery(
        QUERY_NOTE_BY_POSITION
    )
    const [synth, setSynth] = useState(new Tone.Synth().toDestination());
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
    // const synth = new Tone.PolySynth().toDestination();
    // synth.triggerAttackRelease(queuedAttack, "8n");
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
  
//   useEffect(() => {
    
//     // const interval = createTimer(setInterval(() => getTime(), 1000));
//     // const currentStartTime = new Date();
//     // setStartTime(currentStartTime.getTime()/1000)
    
//     // return () => clearInterval(interval);
//   }, []);

    

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
    const noteNames = ["Bb","C", "D", "F", "G"];
    // 4 - floor(index%16 / 5)
    
    let index = 0;
    const width = 16;
    const height = 16;
    const noteSquareGrid = [];
    useEffect(() => {
        if (data) {
            setInit(true);
        }
    },[data]);
        
    
    // loop.start(0);

   

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

    // if (init) {
        
        const synths = [
            
        ];
        for (let row=0; row < width; row ++) {
            
            const noteSquareCol = [];
            
            
            console.log("DATA DATA DATA",data)
            // if (data.activeNotesByLength) {
            //     for (const note of data.activeNotesByLength) {
            //         if (note.name === props.name && note.position === props.position) {
            //             active = true;
            //         }
            //     }
            // }
            let active;
            for (let col = 0; col < height; col++) {
                const numComp = 5 - Math.floor(index%16 / 5);
                const letCompOffset = 0 - Math.floor(index/16);
                const letComp = noteNames[(5-((index+letCompOffset)%5))%5]
                const noteName = `${letComp}${numComp}`
                active = false;
                if (props.load) {
                    for (const activeNote of props.activeNotes) {
                        console.log(activeNote.name,noteName,activeNote.position,row)
                        if (activeNote.name === noteName && activeNote.position === row) {
                            active = true;
                        }
                        console.log(active);
                    }
                    
                 }
                 let addSynth = true;
                 let mySynth = null
                    for (const s of synths) {
                        if (s[0] === noteName) {
                            addSynth = false;
                            mySynth = s;
                        }
                    }
                    if (addSynth) {
                        mySynth = [noteName, new Tone.Synth(noteName).toDestination()]
                        synths.push(mySynth)
                    }
                
                noteSquareCol.push(
                
                <Grid key={index} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <NoteSquare
                    noteName = {noteName}
                    position = {row}
                    measure = {measure}
                    currentlyPlaying = {currentlyPlaying}
                    trackId = {props.trackId}
                    active= {active}
                    load={props.load}
                    synth={mySynth}
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

        let playState = !currentlyPlaying ? "Play" : "Pause";
    return(
        <>
    <button className='playBtn' onClick={handlePlay}>{playState}</button>
    <SaveModal trackId={props.trackId}></SaveModal>
    <Grid container>
        {noteSquareGrid.map(function(col) {
            return (col)
        })}
    </Grid>
    </>)
    }
    
    
// };

export default SequencerPanel;