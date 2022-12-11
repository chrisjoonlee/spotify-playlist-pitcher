import React, { useEffect, useState } from 'react';

import PlaylistWidget from './PlaylistWidget';
import './Playlists.css'

const Playlists = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const url = 'https://api.spotify.com/v1/browse/featured-playlists';
        const auth_str = "Bearer " + localStorage.getItem("spotify_access_token");

        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": auth_str
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPlaylists(data.playlists.items)
            })
    }, []);

    return (
        <div className="playlists-page">
            <h1>PLAYLISTS</h1>
            <div className="playlists-container">
                {
                    playlists.length > 0 && playlists.map(playlist => <PlaylistWidget playlist={playlist} />
                    )
                }
            </div>
        </div>
    );
}

export default Playlists;