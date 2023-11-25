import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ButtonGroup from '@mui/material/ButtonGroup';


function PacienteComponent() {
  const location = useLocation();
//parametros que va a llevar el modulo de pacientes
  const [paciente, setPaciente] = useState({
    id: 0,
    nombre: '',
    edad: '',
    nss: '',
    domicilio: ''
  });

  const [loading, setLoading] = useState(false);

  const fnObtenerDatos=async()=>{
    await axios.get('http://127.0.0.1:8000/api/paciente',{
      params:{
        id: location.state.id
      }
    }).then((response)=>{
      console.log(response.data)
      setPaciente(response.data)
      setLoading(false)
    })
  }

  //GUARDAR DATOS
  //Se vueleve a utilizar la setPaciente((prevState)) para recopilar los datos de paciente
  //name represente el nombre del campo y value se utiliza para el nuevo valo ingresado
  const handleGuardar = (event) => {
    const { name, value } = event.target;
    setPaciente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  ///BOTON GUARDAR
  const GuardarDatos = async () => {
    setLoading(true);
      await axios.post('http://127.0.0.1:8000/api/paciente/crear', paciente);
      console.log('Datos guardados correctamente');
    {
      setLoading(false);
      navigate("/home");
    }
  };
  const navigate = useNavigate();
  ///BOTON REGRESAR
  const fnRegresar = () => {
    navigate("/home");
  };

  
  //ELIMINAR DATOS
  const eliminarDatos = async () => { 
    setLoading(true);
    await axios.post('http://127.0.0.1:8000/api/paciente/borrar',paciente);
    console.log('Datos eliminados correctamente');
    setLoading(false);
    navigate("/home");
  };

  useEffect(() => {
    console.log('Render');
    if (location.state.id !== 0) {
      fnObtenerDatos();
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
        <p></p>           
        <li>
          
          <div class="container">
            <h1 contenteditable>DATOS DEL PACIENTE</h1>
          </div>

          <TextField
            required
            id="outlined-required"
            label="Nombre"
            name="nombre"
            value={paciente.nombre}
            onChange={handleGuardar}
            style={{ backgroundColor: '#ffffff', color: '#ffffff'  }}
          />
        </li>
        <p></p>
        <li>
          <TextField
            required
            id="outlined-required"
            label="Edad"
            name="edad"
            value={paciente.edad}
            onChange={handleGuardar}
            style={{ backgroundColor: '#ffffff', color: '#ffffff'  }}
          />
        </li>
        <p></p>
        <li>
          <TextField
            required
            id="outlined-required"
            label="NSS"
            name="nss"
            value={paciente.nss}
            onChange={handleGuardar}
            style={{ backgroundColor: '#ffffff', color: '#ffffff'  }}
          />
        </li>
        <p></p>
        <li>
          <TextField
            required
            id="outlined-required"
            label="Domicilio"
            name="domicilio"
            value={paciente.domicilio}
            onChange={handleGuardar}
            style={{ backgroundColor: '#ffffff', color: '#ffffff'  }}
          />
        </li>
        <p></p>
        
        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}>

        
        <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button variant="contained" style={{ backgroundColor: 'green', marginRight: '10px' }} onClick={GuardarDatos}startIcon={<SaveIcon />}>
          Guardar
        </Button>
        <Button variant="contained" style={{ backgroundColor: 'red', marginRight: '10px' }}onClick={eliminarDatos} startIcon={<DeleteIcon />}>
          Eliminar
        </Button>
        <Button variant='outlined' style={{backgroundColor: '#e49100', color: 'white', marginRight: '10px'}} onClick={fnRegresar} startIcon={<ArrowBackIcon/>}> REGRESAR </Button>
        </ButtonGroup>

        </Box>
        
        <p></p>
        {loading ? <Box sx={{ width: '100%' }}>
         <LinearProgress />
        </Box> :''}
      </ul>
    </div>
  );
}

export default PacienteComponent;
