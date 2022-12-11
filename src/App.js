import React from 'react'
import { useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import './App.css';

function App() {
  const client_id = "23a3c6f9357c415085bd245ca334cfab";
  const redirect_uri = "http://127.0.0.1:3000/"
  const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // window.location.href = url
  }, []);

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
