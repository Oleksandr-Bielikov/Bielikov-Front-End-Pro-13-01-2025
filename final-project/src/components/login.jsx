import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { TextField, IconButton, InputAdornment, Button, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import rozetkaLogo from '../images/rozetkaLogo.png';

function LoginForm({ login }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const onSubmit = async (values) => {
    const user = values?.user?.trim() || '';
    const password = values?.password?.trim() || '';
  
    if (user === '' || password === '') {
      alert('Введіть логін і пароль');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: values.user,
          password: values.password
        }),
      });

      if (!response.ok) {
        alert("Невірний логін або пароль");
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);

      login();
    } catch (error) {
      alert('Помилка мережі');
    }
  };

  const fieldStyles = {
    width: '277px',
    height: '56px',
    marginLeft: '116px',
    marginBottom: '46px',
    '& .MuiFilledInput-root': {
      '&:before': { borderBottom: 'none' },
      '&:after': { borderBottom: 'none' },
      '&:hover:before': { borderBottom: 'none' }
    },
    '& .MuiInputLabel-root': {
      color: '#44B26F',
      '&.Mui-focused': {
        color: '#44B26F',
      }
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: '500px',
            height: '670px',
            display: 'flex',
            flexDirection: 'column',
            background: '#F5F5F5',
          }}
        >
          <Box
            component='img'
            src={rozetkaLogo}
            sx={{
              width: '240px',
              height: '40px',
              marginTop: '80px',
              marginLeft: '135px',
              marginBottom: '85px'
            }}
          />

          <Field name="user">
            {({ input }) => (
              <TextField
                {...input}
                label="User Name"
                variant="filled"
                sx={{ ...fieldStyles, marginBottom: '46px' }}
              />
            )}
          </Field>

          <Field name="password">
            {({ input }) => (
              <TextField
                {...input}
                label="Password"
                variant="filled"
                type={showPassword ? 'text' : 'password'}
                sx={{ ...fieldStyles, marginBottom: '37px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleVisibility} edge="end">
                        {showPassword ? <VisibilityOff sx={{ color: '#44B26F' }} /> : <Visibility sx={{ color: '#44B26F' }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Field>

          <Button
            sx={{
              textTransform: 'none',
              width: '277px',
              height: '56px',
              marginLeft: '116px',
              background: '#44B26F',
              borderRadius: 0,
              fontWeight: 600,
              fontSize: '24px',
            }}
            variant="contained"
            type='submit'
          >
            Login
          </Button>
          </Box>
        </form>
      )}
    />
  );
}

export default LoginForm;
