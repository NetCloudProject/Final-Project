import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Schedule from './routes/Schedule';
import Shopping from './routes/Shopping';
import Travel from './routes/Travel';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/travel' element={<Travel/>} />
        <Route path='/shopping' element={<Shopping/>} />
        <Route path='/schedule' element={<Schedule/>} />
      </Routes>
    </>
  );
}

export default App;
