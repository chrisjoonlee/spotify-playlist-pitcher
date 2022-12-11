import React from 'react'
import { useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Playlists from './components/Playlists'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </div>
  );
}

export default App;
