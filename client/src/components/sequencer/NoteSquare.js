import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import { useQuery } from '@apollo/client';
import { QUERY_NOTE_BY_ID } from '../../utils/queries.js';


function NoteSquare(props) {
    // const [active, setActive] = false;


    return (
        
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      );
    
}

export default NoteSquare