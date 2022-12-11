import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const LandingPage = () => {
    const client_id = "23a3c6f9357c415085bd245ca334cfab";
    const redirect_uri = "http://127.0.0.1:3000/";
    const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;

    let [searchParams, setSearchParams] = useSearchParams();

    // Landing page
    if (!searchParams.get("code")) {
        return (
            <>
                <h1>Spotify Playlist Pitcher</h1>
                <button onClick={() => {
                    console.log("ouch")
                    window.location.replace(url);
                }}>
                    Access the Spotify API
                </button>
            </>
        )
    }
    // If "code" appears in the url params
    else {
        return (
            <>next stop</>
        )
    }
};

export default LandingPage;