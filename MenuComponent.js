import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';
import paciente from './assets/paciente.png';
import doctor from './assets/doctor.png';
import enfermedad from './assets/enfermedad.png';
import cita from './assets/cita.png';
import salir from './assets/salir.png';
function MenuComponent() {
  const location = useLocation();
//funcion para navegar en el menu
  const navigate = useNavigate();

  const home = async () => { 
    navigate("/home");
  }

  const homedoctor = async () => { 
    navigate("/homedoctor");
  }
 
  const homeenfermedad = async () => { 
    navigate("/homeenfermedad");
  }

  const login = async () => { 
    navigate("/");
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
       

       

      <div class="ag-format-container">
  <div class="ag-courses_box">
    
    
    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title" style={{margin: '0%'}}>
          Gestionar:
              
        </div>
        <img src={paciente} style={{ height: '35%', width: '35%'}} />

        <div class="ag-courses-item_date-box">
        <Button variant="contained" style={{ backgroundColor: '#FF8C00', marginRight: '10px' }} onClick={home}>
          Pacientes
        </Button>
          
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title" style={{margin: '0%'}}>
          Gestionar: 
        </div>
        <img src={doctor} style={{ height: '35%', width: '35%'}} />
        <div class="ag-courses-item_date-box">
        <Button variant="contained" style={{ backgroundColor: 'green', marginRight: '10px' }}onClick={homedoctor}>
          Doctores
        </Button>
          
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title" style={{margin: '0%'}}>
          Gestionar: 
        </div>
        <img src={enfermedad} style={{ height: '35%', width: '35%'}} />
        <div class="ag-courses-item_date-box">
        <Button variant="contained" style={{ backgroundColor: '	#FF4500',marginRight: '10px' }}onClick={homeenfermedad}>
          Enfermedades
        </Button>
          
        </div>
      </a>
    </div>


    <div class="ag-courses_item">
      <a  class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title" style={{margin: '0%'}}>
          Gestionar: 
        </div>
        <img src={cita} style={{ height: '35%', width: '35%'}} />
        <div class="ag-courses-item_date-box">
        <Button variant="contained" style={{ backgroundColor: 'purple',marginRight: '10px' }}onClick={homeenfermedad}>
          Citas
        </Button>
          
        </div>
      </a>
    </div>

    <div class="ag-courses_item" >
      <a  class="ag-courses-item_link" >
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title" style={{margin: '0%'}}>
          Salir del sistema: 
        </div>
        
        <img src={salir} style={{ height: '35%', width: '35%'}} />
       
        <div class="ag-courses-item_date-box">
       
        <Button variant="contained" style={{ backgroundColor: 'red'}}onClick={login}>
          Salir
        </Button>
          
        </div>
      </a>
    </div>

  </div>
</div>






        
       
        
        
        <p></p>
      </ul>
    </div>
  );
}

export default MenuComponent;
