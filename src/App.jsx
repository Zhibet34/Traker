import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import History from './pages/History';
import Display from './pages/Display';
import Navbar from './components/Navbar';
import './css/index.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/history' element={<History />} />
        <Route path='/display' element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;