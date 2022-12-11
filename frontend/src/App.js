import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AccessError from './components/AccessError'
import LandingPage from './components/LandingPage'
import Playlists from './components/Playlists'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/playlists" element={<Playlists />} />

        <Route path="/access-error" element={<AccessError />} />
      </Routes>
    </div>
  );
}

export default App;
