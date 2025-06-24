import { Box, Button } from '@mui/material';
import rozetkaLogo from '../../images/rozetkaLogoWhite.png';
import Person from '@mui/icons-material/PersonOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import ProductsTable from './productsTable';
import EditProductModal from '../editModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/productsSlice';

function Products({ goToPreviewPage }) {

    const [openAddModal, setOpenAddModal] = useState(false);
    const dispatch = useDispatch();

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };
    
    const handleAddSubmit = (product) => {
        const newProduct = { ...product, id: Date.now().toString() };
        dispatch(addProduct(newProduct))
        handleCloseAddModal()
  }
    
    return (
        <>
            <Box
                component='img'
                src={rozetkaLogo} 
                sx={{
                    width: '240px',
                    height: '40px',
                    marginLeft: '29px',
                    marginTop: '20px',
                    marginBottom: '32px'
                  }}
            />
            <Box
                sx={{
                    marginLeft: '70px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginRight: '77px'
                }}
            >
            <Button
                onClick={goToPreviewPage}    
                variant="contained"
                startIcon={<Person sx={{ color: 'black', width: 25, height: 25 }}/>}
                sx={{
                    textTransform: 'none',
                    width: '179px',
                    height: '52px',
                    background: '#FFFFFF',
                    borderRadius: 0,
                    font: 'Inter',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#05BC52',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                  }}
            >Preview
            </Button>
            <Button
                onClick={handleOpenAddModal}
                variant="contained"
                startIcon={<AddIcon sx={{ color: 'black', width: 25, height: 25}} />}
                sx={{
                    textTransform: 'none',
                    width: '179px',
                    height: '52px',
                    background: '#FFFFFF',
                    borderRadius: 0,
                    font: 'Inter',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: '#05BC52',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                  }}
            >Add Product
            </Button>
            </Box>
            <Box>
                <h1 style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: '64px', color: '#FFFFFF', marginTop: 5, marginBottom: 75, textAlign: 'center' }}>Products</h1>
                <ProductsTable />
            </Box>
            <EditProductModal
                open={openAddModal}
                onClose={handleCloseAddModal}
                product={null}
                onSubmit={handleAddSubmit}
            />
        </>
    )
};

export default Products;