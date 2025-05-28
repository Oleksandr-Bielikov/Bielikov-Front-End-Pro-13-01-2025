import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({onDelete, index}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <React.Fragment>
          <Button sx={{ backgroundColor:'#e70606'}} variant="contained" onClick={handleClickOpen}>
        Видалити
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Видалення контакту"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ви дійсно бажаєте видалити цей контакт?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Відхилити</Button>
                  <Button onClick={() => {
                      onDelete(index);
                      handleClose()
                  }} autoFocus>
            Підтвердити
          </Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
    </>
  );
}
