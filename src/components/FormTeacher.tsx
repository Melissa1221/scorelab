import { Box, Button, Input, StepContent, TextField, Typography } from "@mui/material"
import '../styles/formTeacher.css'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

interface FormsProps {
  setIsVisible: (isVisible: boolean) => void;
  setResponse: (response: any) => void;
  setId: (id: string) => void;
}

const FormTeacher: React.FC<FormsProps> = ({ setIsVisible, setResponse, setId}) => {



  const [tema, setTema] = React.useState('');
  const [subtemas, setSubtemas] = React.useState('');
  const [tipoPregunta, setTipoPregunta] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTipoPregunta(event.target.value as string);
  };
  
  
  const handleSubmit = async () => {
    const quizData = {
      theme: tema,
      subThemes: subtemas.split(', ').filter(Boolean), 
      kind: 2,
      content: content
    }
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/api/questionnaires/create`, quizData);
      console.log(response.data);
      setResponse(response.data.res)
      setId(response.data.id)
      console.log(response.data.id)
  
    } catch (error) {
      console.error("Error al enviar datos", error);
    }
  };

  const handleButtonClick = async () => {

    await handleSubmit();

    setIsVisible(true);
  };

  



  return (
    <>
      <Box sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      alignItems: 'left',
      justifyContent: 'left',
      backgroundColor: '#DFE8F6',
      paddingTop: '1rem',
      paddingBottom: '1.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      borderRadius: '40px',
      width:'60%',

    }}>
      <Typography sx={{mt:'1rem'}} className="title-form">Crea tu quiz personalizado</Typography>
      <TextField
        id="outlined-controlled"
        label="Tema de la clase"
        value={tema}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTema(event.target.value);
        }}
        sx={{bgcolor:'#F7F9FC', width:'100%' }}
      />
      <TextField
        id="outlined-controlled"
        label="Ingrese los subtemas de clase, separados uno a uno por comas"
        value={subtemas}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSubtemas(event.target.value);
        }}
        sx={{bgcolor:'#F7F9FC', width:'100%'}}
      />
      <TextField
        id="outlined-controlled"
        label="Ingrese el contenido de la clase"
        value={content}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setContent(event.target.value);
        }}
        sx={{bgcolor:'#F7F9FC', width:'100%'}}
      />
       
      <Box sx={{ minWidth: 120, bgcolor: '#F7F9FC', width:'100%'}}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Elija el formato de preguntas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipoPregunta}
          label="Format"
          onChange={handleChange}
        >
          <MenuItem value={'opcion-multiple'}>Opcion múltiple</MenuItem>
          <MenuItem value={'v-f'}>Verdadero/Falso</MenuItem>
          <MenuItem value={'texto-corto'}>Respuesta corta</MenuItem>
        </Select>
      </FormControl>
    </Box>
      
      
        <label className="custum-file-upload" >
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
          </div>
          <div className="text">
            <span>Click to upload file</span>
            </div>
            <Input type="file" id="file"/>
    </label>
    <Button  onClick={handleButtonClick} variant="contained" sx={{bgcolor:'#043C7C', color:'#fff', borderRadius:'20px', marginTop:'1rem', border:'none'}}>Generar preguntas</Button>


    </Box>
    </>
    
  )
}

export default FormTeacher