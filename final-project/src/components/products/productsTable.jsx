import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { sortByField, deleteProduct, editProduct } from '../../store/productsSlice';
import DeleteModal from '../deleteModal';
import { useState } from 'react';
import EditProductModal from '../editModal';
  
  const headerStyle = {
    backgroundColor: '#0EC86F',
    color: '#726969',
    fontWeight: 700,
    fontSize: '14px',
    height: 39,
    lineHeight: '39px',
    padding: '0 16px',
  };
  
  function ProductsTable() {
    const { items, sortField, sortAsc } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [selectedId, setSelectedId] = useState(null)
    const [editOpen, setEditOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleOpenModal = (id) => {
      setSelectedId(id)
      setOpen(true)
    }

    const handleCloseModal = () => {
      setOpen(false)
      setSelectedId(null)
    }
  
    const handleSort = (field) => () => {
      dispatch(sortByField(field));
    };

    const handleDelete = (id) => {
      dispatch(deleteProduct(id))
      handleCloseModal()
    };

    const handleOpenEdit = (product) => {
      setSelectedProduct(product);
      setEditOpen(true);
    };
    
    const handleCloseEdit = () => {
      setSelectedProduct(null);
      setEditOpen(false);
    };

    const handleUpdateProduct = (updatedProductData) => {
      const updatedProduct = {
        ...selectedProduct,
        ...updatedProductData,
      };
      dispatch(editProduct(updatedProduct));
      handleCloseEdit();
    };
    
    
  
    const headers = ['id', 'category', 'name', 'quantity', 'price'];
  
    return (
      <>
      <TableContainer
        component={Paper}
        sx={{
          width: 872,
          margin: '30px auto',
        }}
      >
        <Table sx={{ width: '872px', tableLayout: 'fixed' }} aria-label="products table">
          <TableHead>
            <TableRow sx={{ height: 39 }}>
              {headers.map(field => (
                <TableCell key={field} sx={headerStyle}>
                  <TableSortLabel
                    active={sortField === field}
                    direction={sortField === field && sortAsc ? 'asc' : 'desc'}
                    onClick={handleSort(field)}
                    sx={{ color: '#726969', '& svg': { color: '#726969' } }}
                  >
                    {field === 'price' ? 'Price (₴)' : field.charAt(0).toUpperCase() + field.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell sx={headerStyle}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  height: 39,
                  backgroundColor: index % 2 === 0 ? '#3CD78C' : '#D9D9D9',
                  '& td': {
                    color: index % 2 === 0 ? '#A58F8F' : '#FFFFFF',
                    padding: '0 16px',
                  },
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.price.toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenEdit(row)} size="small" sx={{ color: 'black' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenModal(row.id)} size="small" sx={{ color: 'black' }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        <DeleteModal
          open={open}
          onClose={handleCloseModal}
          onConfirm={() => handleDelete(selectedId)}
        />
        <EditProductModal
          open={editOpen}
          onClose={handleCloseEdit}
          product={selectedProduct}
          onSubmit={handleUpdateProduct}
        />
      </>
    );
  }
  
  export default ProductsTable;
  