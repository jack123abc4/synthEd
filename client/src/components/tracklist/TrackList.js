import React, { useState, useEffect, useRef } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import './trackList.scss'
import Demo from './Demo'
import {  QUERY_TRACKS_BY_TYPE } from '../../utils/queries';
import { Navigate, Link, useNavigate } from 'react-router-dom';


const TrackList = () => {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [load,setLoad] = useState(null);
  const navigate = useNavigate();

  // const generate = (element) => {
  //   return [0, 1, 2].map((value) =>
  //     React.cloneElement(element, {
  //       key: value,
  //     }),
  //   );
  // }
  const { loading, error, data } = useQuery( QUERY_TRACKS_BY_TYPE, { variables: {trackType:"sequencer"}})

  const handleDelete = (event) => {
    const trackId = event.target.id.split("-")[1]
    console.log(trackId);
  }

  const handleLoad = (event) => {
    const trackId = event.target.id.split("-")[1]
    console.log(trackId);
    // setLoad(<Navigate to="/play" />);
    navigate('/play',{state:{trackId:trackId}});
  }
  if (loading) {
    return(
      <h1>LOADING</h1>
    )
  }
  if (data) {
    console.log("DATA", data);
    const trackList = [];
    for (const track of data.tracksByType) {
      trackList.push(track)
    }
      return (
      
      <Box className="track-list" sx={{ flexGrow: 1, maxWidth: 752 }}>
        
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={12}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Avatar with text and icon
            </Typography>
            <div className="track-list">
              <List dense={true}>
              {trackList.map(function(track) {
            return (<ListItem className='del-list'
              secondaryAction={
                <button id={`delete-${track._id}`} onClick={handleDelete}>DELETE</button>
                // <IconButton edge="end" aria-label="delete">
                //   <DeleteIcon />
                // </IconButton>
              }
              id={track._id}
            >
              <ListItemAvatar>
                {load}
                {/* <Avatar>
                  <FolderIcon />
                </Avatar> */
                <button id={`load-${track._id}`} onClick={handleLoad}>LOAD</button>
                }
              </ListItemAvatar>
              <ListItemText
                primary={track.name}
                secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>)
        })}
                  
                
              </List>
            </div>
          </Grid>
        </Grid>
      </Box>
    )
                    }
}
 export default TrackList;