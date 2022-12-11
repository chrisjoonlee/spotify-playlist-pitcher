import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const LandingPage = () => {
    const client_id = "23a3c6f9357c415085bd245ca334cfab";
    const client_secret = "aa5e3e7a7313476dbe60910e78022075";
    const redirect_uri = "http://127.0.0.1:3000/";
    const base_url = "https://accounts.spotify.com";
    const url = `${base_url}/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const auth_str = "Authorization: Basic " +
            Buffer.from(client_id + ":" + client_secret).toString('base64');

        if (searchParams.get("code")) {
            console.log("url:", `${base_url}/api/token`);
            console.log("auth_str:", auth_str);
            console.log("code:", searchParams.get("code"));

            const request = new Request(`${base_url}/api/token`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": auth_str
                }),
                body: JSON.stringify({
                    grant_type: "authorization_code",
                    code: searchParams.get("code"),
                    redirect_uri
                })
            });

            console.log("REQUEST:", request);

            fetch(request).then(response => console.log("RESPONSE:", response));

            // fetch(`${base_url}/api/token`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/x-www-form-urlencoded",
            //         "Authorization": auth_str
            //     },
            //     body: JSON.stringify({
            //         grant_type: "authorization_code",
            //         code: searchParams.get("code"),
            //         redirect_uri
            //     })
            // }).then(response => console.log("RESPONSE:", response));
        }
    }, [searchParams])

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