import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_TRACK }  from '../../utils/mutations'

const SaveModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [saveTrack, loading, error, data] = useMutation(SAVE_TRACK);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const textValue = document.getElementById('title-field').value
    console.log("SAVED",textValue)
    saveTrack({variables: {trackId: props.trackId, name:textValue}})
    setOpen(false);
    
  }

  React.useEffect(() => {
    if (loading) {
      console.log("Loading")
    }
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log("DATA: ", data);
      setOpen(false);
    } 
    
  },[loading, error, data])

  return (
    <div>
      <button onClick={handleClickOpen}>
        Save
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of your track
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title-field"
            label="Title"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SaveModal
