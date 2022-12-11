import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const client_id = "23a3c6f9357c415085bd245ca334cfab";
  const redirect_uri = "localhost:3000/"
  const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`

  useEffect(() => {
    window.location.href = url
  }, []);

  return (
    <div>
      <h1>Hey baby</h1>
    </div>
  );
}

export default App;
