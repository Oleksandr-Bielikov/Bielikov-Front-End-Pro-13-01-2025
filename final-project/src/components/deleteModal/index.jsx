import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function DeleteModal({ open, onClose, onConfirm }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"     
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{color: '#05BC52', font: 'Inter', fontWeight: 700, fontSize: '16px'}}>
        Are u sure you want to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
              <Button variant='contained' onClick={onClose} sx={{ backgroundColor: '#D8D5D5', borderRadius: 0, textTransform: 'none' }}>Cancel</Button>
        <Button variant='contained' onClick={onConfirm} sx={{backgroundColor: '#FB0000', borderRadius: 0, textTransform: 'none' }} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
