import React, { useEffect, useState } from 'react';

import PlaylistWidget from './PlaylistWidget';

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
        <>
            <h1>Playlists</h1>
            {
                playlists.length > 0 && playlists.map(playlist => <PlaylistWidget playlist={playlist} />
                )
            }
        </>
    );
}

export default Playlists;