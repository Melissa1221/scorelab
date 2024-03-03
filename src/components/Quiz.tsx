import { Box, Button, Typography } from '@mui/material'
import {Grid, Paper} from '@mui/material'
import QuestionMultiple from './QuestionMultiple';
import '../styles/formTeacher.css'
import '../styles/quiz.css'
import * as React from 'react';

interface PropsData {
  tema: string, 
  question:string,
  answer: string,
  options: string[]
  data: object;
}

const response = [

  {
    "question": "¿Quién ideó la primera computadora mecánica?",
    "options": [
      "Charles Babbage",
      "Alan Turing",
      "Ada Lovelace"
    ],
    "answer": "Charles Babbage"
  },
  {
    "question": "¿Qué sistema operativo dominó el mercado después de UNIX?",
    "options": [
      "Microsoft Windows",
      "Linux",
      "Android"
    ],
    "answer": "Microsoft Windows"
  },
  {
    "question": "¿Qué tecnología permitió el intercambio instantáneo de información a escala global?",
    "options": [
      "Correo postal",
      "Teléfono",
      "Internet"
    ],
    "answer": "Internet"
  }

]

const Quiz = () => {




  const tema:string = 'Tecnología';




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
                  
                  <QuestionMultiple question={question.question} options={question.options} answer={question.answer}/>
                  
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