import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client'
import Box from '@mui/material/Box';
import { CREATE_NOTE_BY_NAME, ADD_NOTE_TO_TRACK, TOGGLE_NOTE } from '../../utils/mutations';

// import { useQuery } from '@apollo/client';
import { QUERY_NOTE_BY_ID, QUERY_NOTE_BY_POSITION } from '../../utils/queries.js';
import * as Tone from 'tone';

// notesquare
const NoteSquare = (props) => {
    const [active, setActive] = useState(props.active);
    const [createNoteObj, { data, loading, error }] = useMutation(CREATE_NOTE_BY_NAME);
    const [addNoteToTrack, {trackData, trackLoading, trackError}] = useMutation(ADD_NOTE_TO_TRACK);
    const [toggleNote, {noteData, noteLoading, noteError}] = useMutation(TOGGLE_NOTE);
    
    const [noteObj, setNoteObj] = useState(null);
    const noteObjInit = async() => {
      const tempNoteObj = await (await createNoteObj({variables: {noteName: props.noteName}})).data.createNoteByName;
      console.log("Mutated! :",tempNoteObj)
      addNoteToTrack({variables: {trackId: props.trackId, noteId: tempNoteObj._id, position: props.position}})
      setNoteObj(tempNoteObj);
    };
    const { activeLoading, activeError, activeData } = useQuery(
      QUERY_NOTE_BY_POSITION, {
      variables: {trackId: props.trackId, noteName:props.noteName,position:props.position}})
    // useEffect( () => {
    //   noteObjInit();
    // },[])
    // const [noteObj, setNoteObj] = useState({

    //   name: props.noteName,

    // });
    // const [textContent, setTextContent] = useState(props.noteName);
    
    const handleClick = async (event) => {
      
      console.log("Note obj",noteObj);
      // const synth = new Tone.Synth().toDestination();
      // synth.triggerAttackRelease(props.noteName,"8n"); 
      console.log(`Clicked! Changed state ${active} to ${!active}\nNoteObj: ${props.noteName}\nPosition:${props.position}\nCurrently Playing: ${props.currentlyPlaying}`);
      setActive(!active);
      toggleNote({variables: {_id:noteObj._id,position:props.position}});
      
      // setNoteObj(noteObj ? )
    }

    // useEffect(() => {
    //   // console.log(`Pos ${props.position} Measure ${props.measure} Currently Play ${props.currentlyPlaying}` )
      
    //   const synth = new Tone.AMSynth().toDestination();
      
    //   if (active && props.position === props.measure && props.currentlyPlaying) {
    //     synth.triggerAttackRelease(props.noteName,"8n"); 
    //   }
    //   },[props.measure]);
    useEffect(() => {
      if (noteObj === null) {
        noteObjInit();
      }
      console.log("IS ACTIVE",active);
      if (active && props.position === props.measure) {
        console.log(props.noteName);
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(props.noteName, "8n");
      }
      
    },[props.measure]);





    if (!active) {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 50,
            height: 50,
            border: '1px solid white',
            borderRadius: '1.5px',
            backgroundColor: 'rgb(15, 248, 229)',
            opacity: [0.5, 0.5, 0.5],
            transition: '0.3s ease',
            '&:hover': {
              backgroundColor: 'rgb(15, 248, 229)',
              opacity: [0.8,0.8,0.8]
              
            },

          }} 
          onClick = {handleClick}
        ></Box>
      );
    }
    else {
      return (
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: 'rgb(15, 248, 229)',
            transition: '0.3s ease',
            '&:hover': {
              backgroundColor: 'rgb(15, 248, 229)',
              opacity: [0.8,0.8,0.8],
              
            },

          }} 
          onClick = {handleClick}
        ></Box>
      );
    }
    
    
}

export default NoteSquare