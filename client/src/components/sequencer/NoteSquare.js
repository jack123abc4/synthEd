import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
// import { useQuery } from '@apollo/client';
import { QUERY_NOTE_BY_ID } from '../../utils/queries.js';
import * as Tone from 'tone';

// notesquare
const NoteSquare = (props) => {
    const [active, setActive] = useState(false);
    const [synth, setSynth] = useState(new Tone.AMSynth().toDestination())
    // const [noteObj, setNoteObj] = useState({

    //   name: props.noteName,

    // });
    // const [textContent, setTextContent] = useState(props.noteName);
    
    const handleClick = (event) => {

      // const synth = new Tone.Synth().toDestination();
      // synth.triggerAttackRelease(props.noteName,"8n"); 
      console.log(`Clicked! Changed state ${active} to ${!active}\nNoteObj: ${props.noteName}\nPosition:${props.position}\nCurrently Playing: ${props.currentlyPlaying}`);
      setActive(!active);
      
      // setNoteObj(noteObj ? )
    }
    useEffect(() => {
      // console.log(`Pos ${props.position} Measure ${props.measure} Currently Play ${props.currentlyPlaying}` )
      if (active && props.position === props.measure && props.currentlyPlaying) {
        synth.triggerAttackRelease(props.noteName,"8n"); 
      }
      },[props.measure]);
    
    if (!active) {
      return (
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: 'rgb(15, 248, 229)',
            opacity: [0.5, 0.5, 0.5],
            '&:hover': {
              backgroundColor: 'rgb(15, 248, 229)',
              opacity: [0.8,0.8,0.8]
              
            },
          }} 
          onClick = {handleClick}
        >{props.noteName}</Box>
      );
    }
    else {
      return (
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: 'rgb(15, 248, 229)',
            '&:hover': {
              backgroundColor: 'rgb(15, 248, 229)',
              opacity: [0.8,0.8,0.8]
              
            },
          }} 
          onClick = {handleClick}
        >{props.noteName}</Box>
      );
    }
    
    
}

export default NoteSquare