import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import check from '../../images/PatchCheck.png';
import RozetkaButton from '../rozetkaButton';

function ProductPreview() {
  const { id } = useParams();
  const product = useSelector(state => state.products.items.find(p => p.id === Number(id)));
  const navigate = useNavigate()
  if (!product) return <Typography>Товар не знайдено</Typography>;

    const buttonClick = () => {
      navigate('/preview-page')
    }
    
  return (
    <>
      <RozetkaButton/>
    <Box sx={{paddingTop: '20px', paddingLeft: '38px', backgroundColor: 'white' }}>
        <Typography variant="h4" style={{ fontWeight: 500, fontSize: '32px', display: 'flex', alignItems: 'center', gap: '40px' }} mt={2}><button onClick={buttonClick} style={{ border: 'none', backgroundColor: 'white' }}><KeyboardBackspaceIcon sx={{ width: '76px', height: '60px' }} /></button>{product.name}</Typography>
    </Box>
    <Box sx={{height: '100%', backgroundColor: 'white', paddingTop: '24px', paddingLeft: '69px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <img src={product.image} alt={product.name} style={{ width: 300 }} />
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '75px', gap: '26px'}}>
                      <Typography sx={{fontWeight: 500, fontSize: '36px'}} variant="h6" color="#3CD78C"><span style={{marginRight: '10px'}}><img width='30px' src={check} /></span>Є в наявності</Typography>
                <Typography variant="h5" color="#FC5B00" sx={{fontWeight: 500, fontSize: '36px'}}>{product.price}<span style={{fontWeight: 700, fontSize: '24px'}}>₴</span></Typography>
                <Typography sx={{fontWeight: 500, fontSize: '24px'}}>Кількість: {product.quantity}</Typography>
            </div>
      </div>
              <Typography variant="h6" sx={{marginTop: '70px', fontWeight: 500, fontSize: '32px'}}>Опис <span style={{color: '#D9D9D9', fontWeight: 500, fontSize: '32px', marginLeft: '20px'}}>{ product.name }</span></Typography>
              {product.description.map((block, index) => (
                <Box key={index} sx={{ mb: 3, mt: '48px' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>{block.title}</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: '24px' }}>{block.text}</Typography>
                </Box>
))}
    </Box>
    </>
  );
}

export default ProductPreview;
