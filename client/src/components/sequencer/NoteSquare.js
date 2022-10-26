import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import { useQuery } from '@apollo/client';
import { QUERY_NOTE_BY_ID } from '../../utils/queries.js';


const NoteSquare = (props) => {
    const [active, setActive] = useState(false);
    const [noteObj, setNoteObj] = useState(props.noteObj);
    const [textContent, setTextContent] = useState(props.noteName);

    const handleClick = (event) => {
      console.log(`Clicked! Changed state ${active} to ${!active}`);
      setActive(!active);
    }
    
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
        >{textContent}</Box>
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
        >{textContent}</Box>
      );
    }
    
    
}

export default NoteSquare