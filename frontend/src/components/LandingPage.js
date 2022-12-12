import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './LandingPage.css'

const LandingPage = () => {
    // Define variables for Spotify API access
    const client_id = "23a3c6f9357c415085bd245ca334cfab";
    const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://127.0.0.1:3000/`;

    let [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    // Receive Spotify's access token
    useEffect(() => {
        // After the user accepts Spotify's API usage
        if (searchParams.get("code")) {
            // Call to Express server to receive the access token
            fetch("http://localhost:3001/code?code=" + searchParams.get("code"))
                .then(response => response.json())
                .then(token => localStorage.setItem("spotify_access_token", token))
                .then(() => {
                    navigate("/playlists")
                })
                .catch(err => {
                    console.error(err)
                    navigate("/access-error")
                });
        }
    }, [searchParams])

    // Landing page
    if (!searchParams.get("code")) {
        return (
            <div className="landing-page-container">
                <h1>SPOTIFY PLAYLISTS</h1>
                <button className="access-btn" onClick={() => {
                    window.location.replace(url);
                }}>
                    Access the Spotify API
                </button>
            </div>
        )
    }
    // If "code" appears in the url params
    else {
        return (
            <div className="landing-page-container">
                <p className="processing-msg">Processing request...</p>
            </div>
        )
    }
};

export default LandingPage;