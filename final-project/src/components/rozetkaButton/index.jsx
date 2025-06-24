import { useNavigate } from 'react-router';
import rozetkaLogo from '../../images/rozetkaLogoWhite.png';
import { Box } from '@mui/material';

function RozetkaButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/products')
    }
    
    return (
        <>
        <button onClick={handleClick} style={{border: 'none', backgroundColor: '#44B26F'}}>
        <Box
        component='img'
        src={rozetkaLogo}
        sx={{
        width: '240px',
        height: '40px',
        marginLeft: '29px',
        marginTop: '20px',
        marginBottom: '32px',
      }}
      />
      </button>
        </>
     )
}

export default RozetkaButton;