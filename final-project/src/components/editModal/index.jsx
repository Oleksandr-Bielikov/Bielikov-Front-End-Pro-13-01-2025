import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Button, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function EditProductModal({ open, onClose, product, onSubmit }) {
  const [form, setForm] = useState({
    id: '',
    category: '',
    name: '',
    quantity: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    if (product) {
      const { id, category, name, quantity, price, description } = product;
  
      const formattedDescription = Array.isArray(description)
        ? description.map(({ title, text }) => `${title}\n\n${text}`).join('\n\n\n')
        : (description || '');
  
      setForm({
        id,
        category,
        name,
        quantity,
        price,
        description: formattedDescription
      });
    } else {
      setForm({
        id: '',
        category: '',
        name: '',
        quantity: '',
        price: '',
        description: ''
      });
    }
  }, [product]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const lines = form.description.split('\n\n\n');
    const descriptionArray = lines.map(block => {
      const [title, ...textLines] = block.trim().split('\n\n');
      return {
        title: title.trim(),
        text: textLines.join('\n\n').trim(),
      };
    });

    const productData = {
      ...form,
      quantity: Number(form.quantity),
      price: Number(form.price),
      description: descriptionArray
    };

    if (onSubmit) {
      onSubmit(productData);
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{ sx: { width: '430px', height: '532px' } }}>
      <DialogTitle sx={{ height: '25px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <span style={{ fontWeight: 'bold', fontSize: 20, color: '#d3d3d3' }}>
            {product ? 'Edit product' : 'Add new product'}
          </span>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ background: '#D9D9D9', paddingTop: 2 }}>
        <TextField
          fullWidth
          margin="dense"
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
          sx={{ input: { color: '#0EC86F', fontWeight: 'bold' } }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          sx={{ input: { color: '#0EC86F', fontWeight: 'bold' } }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Quantity"
          name="quantity"
          type="text"
          value={form.quantity}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Price"
          name="price"
          type="text"
          value={form.price}
          onChange={handleChange}
          sx={{ input: { color: '#0EC86F', fontWeight: 'bold' } }}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Description"
          name="description"
          multiline
          rows={3}
          value={form.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'end', background: '#D9D9D9', paddingBottom: 2, paddingRight: 3 }}>
        <Button onClick={onClose} sx={{ background: '#726969', color: 'white', width: 116, borderRadius: 0 }}>Cancel</Button>
        <Button onClick={handleSubmit} sx={{ background: '#0EC86F', color: 'white', width: 116, borderRadius: 0 }}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
