import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import ProductCard from './productCard';
import RozetkaButton from '../rozetkaButton';

function PreviewPage() {
  const products = useSelector(state => state.products.items);

  return (
    <>
        <RozetkaButton />
        <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        flexWrap: 'wrap',
        padding: '20px',
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>  
    </>
  );
}

export default PreviewPage;
