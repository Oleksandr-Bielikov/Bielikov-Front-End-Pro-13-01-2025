import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LoginForm from './components/login';
import Products from './components/products';
import PreviewPage from './components/previewPage';
import ProductPreview from './components/previewPage/productPreview';

function App() {
  const navigate = useNavigate();

  const login = () => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/products');
    } else {
      alert('Будь ласка, увійдіть у систему')
    }
  }

  const goToPreviewPage = () => {
    navigate('/preview-page')
  }

  return (
    <>
      <Routes>
        <Route index element={
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '170px',
            }}>
              <LoginForm
                login={login}
              />
            </Box>
          }
        />
        <Route path='/products' element={
          <Products
            goToPreviewPage={goToPreviewPage}
          />
        }
        />
        <Route path='/preview-page' element={
          <PreviewPage/>
        }
        />
        <Route path='/product/:id' element={
          <ProductPreview />
        }
        />
      </Routes>
    </>
  )
}

export default App
