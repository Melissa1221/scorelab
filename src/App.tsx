import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Sidebar from './components/Sidebar';
import LoginTeachers from './components/LoginTeachers';
import Quiz from './components/Quiz';

import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginTeachers/>}/>
          <Route path="/login/generador" element={<Sidebar/>}/>
          <Route path="/questionnaires/:id" element={<Quiz/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
