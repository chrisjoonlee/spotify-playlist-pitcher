import React from 'react'
import { useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" />
      </Routes>
    </div>
  );
}

export default App;
