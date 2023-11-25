import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { useNavigate } from 'react-router-dom';

const Login_Component = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false); // Agregar estado para Snackbar

  const [errLogin, setErrLogin] = useState({ 
    visible : false,
    detalle: '',
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const navigate = useNavigate();

  const fnLogin = async (e) => {
    e.preventDefault();

    console.log('Usuario: ' + email);
    console.log('Contraseña: ' + password);
    await axios
      .post('http://127.0.0.1:8000/api/login', { email, password })
      .then((response) => {
        console.log('Validando Acceso..');
        console.log(response.data);
        if (response.data.token !== '') {
          console.log('OK');
          secureLocalStorage.setItem('token', response.data.yoken);
          setOpen(true); // Mostrar Snackbar en caso de éxito
          navigate("/menu");

        } else {
          console.log('Error' + response.data.error);
        }
      })
      .catch((error) => {});
  };

  return (
    <div class="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={2} direction="column">
        <Stack spacing={2} sx={{ width: 300, marginTop: '200px' }}>
          <h1 style={{ textAlign: 'center' }}>WELCOME</h1>
          <TextField label="Usuario" name="email" value={email} onChange={handleEmailChange} />
          <TextField
        
            label="Password"
            type="password"
       
            name="passwors"
            value={password}
            onChange={handlePasswordChange}
          />
        </Stack>
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <Button class="close" variant="outlined" onClick={fnLogin}>
            INGRESAR
          </Button>
        </Stack>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          sx={{
            bottom: '0%',
            right: '50%',
            transform: 'translate(230%, -660%)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Alert severity="success">{errLogin.detalle}</Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default Login_Component;
