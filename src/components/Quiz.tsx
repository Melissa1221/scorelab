import { Box, Button, Typography } from '@mui/material'
import {Grid, Paper} from '@mui/material'
import QuestionMultiple from './QuestionMultiple';
import '../styles/formTeacher.css'
import '../styles/quiz.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation  } from 'react-router-dom'

interface PropsData {
  pregunta:string,
  respuesta: string,
  opciones: string[]
}

const Quiz = () => {
  const location = useLocation()
  const rutaActual = location.pathname
  const id = rutaActual.substring(rutaActual.lastIndexOf('/') + 1)

  const [tema, setTema] = useState('');
  const [response, setResponse] = useState<PropsData[]>([]);

  useEffect(() => {
    
    axios.get(`${import.meta.env.VITE_REACT_API_URL}/api/questionnaires/${id}`)
    .then((response) => {
      console.log(response.data);
      setTema(response.data.title);
      setResponse(response.data.questions.questions);
    }).then((error) => {
      console.log(error);
      
    })
  
  
  }, [id]); 



  return (
    
    <Grid className='quiz-container' item xs={12} sm={8} md={5} component={Paper} elevation={6} square 
    sx={{
        bgcolor:'#F7F9FC', gap:'1rem', width:'100%', alignItems:'center', display:'flex', flexDirection:'column',
        borderRadius:'40px', mt:'1.5rem'}}>
            <Typography sx={{mt:'2rem', mb:'0'}} className="title-form">{tema}</Typography>
          <Box
            className='question-box'
            sx={{
                my: 3,
                mx: 4,
              display: 'flex',
              flexDirection: 'column',
              pl:'1rem',
              p: { xs: '1rem', sm: '2rem', md: '1rem' },
              
            }}
          >
          {
            response.map((question, index) => {
              return (
                <Box key={index} sx={{display:'flex', flexDirection: 'column', gap:'1rem', alignItems:'start', justifyContent:'left', justifyItems:'left'}}>
                  
                  <QuestionMultiple question={question.pregunta} options={question.opciones} answer={question.respuesta}/>
                  
                </Box>
              )
            })
          }

          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            enviar
          </Button>
          
           
          </Box>
        </Grid>
  )
}

export default Quiz 