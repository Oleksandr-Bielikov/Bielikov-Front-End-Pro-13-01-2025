import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import shoppingCart from '../../images/buy.png';
import { useNavigate } from 'react-router';

function ProductCard({ product }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }
    return (
        <Card onClick={handleClick} sx={{ width: '273px', height: '376px', cursor: 'pointer', m: 5}}>
        <CardMedia
          component="img" 
          sx={{ paddingTop: '37px', paddingLeft: '41px', height: "139px", width: "209px"}}
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '16px', textAlign: 'center', marginTop: '10px' }}>{product.name}</Typography>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '27px', marginTop: '22px', marginBottom: '39px'}}>
          <Typography variant="h6" color="#FC5B00" sx={{fontWeight: 500, fontSize: '24px'}}>{product.price}<span style={{fontWeight: 700, fontSize: '16px'}}>₴</span></Typography>
          <Typography color="text.secondary">Кількість: {product.quantity}</Typography>
          </div>
          <Typography color="#05BC52" sx={{ fontWeight: 500, fontSize: '15px', display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center'}}><img src={shoppingCart} style={{width: '28px', height: '28px'}}/>Готовий до відправки</Typography>
        </CardContent>
      </Card>
  );
}

export default ProductCard;
