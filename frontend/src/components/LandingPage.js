import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './LandingPage.css'

const LandingPage = () => {
    // Define variables for Spotify API access
    const client_id = "f5996dbb6e8b40978186c7cd1cabe92b";
    const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${process.env.REACT_APP_HOST_URL}/`;

    let [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    console.log("HOST_URL", process.env.REACT_APP_HOST_URL);

    // Receive Spotify's access token
    useEffect(() => {
        // After the user accepts Spotify's API usage
        if (searchParams.get("code")) {
            console.log(process.env.REACT_APP_SERVER_URL + "/code?code=" + searchParams.get("code"));

            // Call to Express server to receive the access token
            fetch(process.env.REACT_APP_SERVER_URL + "/code?code=" + searchParams.get("code"))
                .then(response => {
                    console.log("RESPONSE", response)
                    return response.json();
                })
                .then(token => {
                    console.log("ACCESS TOKEN", token);
                    localStorage.setItem("spotify_access_token", token)
                })
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