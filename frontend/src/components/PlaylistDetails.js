import React, { useEffect, useState } from 'react';

const PlaylistDetails = ({ playlistId }) => {
    const [playlist, setPlaylist] = useState({});

    // FETCH PLAYLIST DETAILS
    useEffect(() => {
        const url = "https://api.spotify.com/v1/playlists/" + playlistId

        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("spotify_access_token")
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPlaylist(data);
            })
            .catch(err => {
                console.error(err);
                setPlaylist({});
            })
    }, []);

    if (Object.keys(playlist).length > 0) {
        console.log(playlist)
        return (
            <div>
                <h1>Playlist Details</h1>
                <p>By <a href={playlist.owner.external_urls.spotify}>{playlist.owner.display_name}</a></p>
                <img src={playlist.images[0].url} />
                <p>{playlist.description}</p>
                <a href={playlist.external_urls.spotify}>Link</a>
                <p>Followers: {playlist.followers.total}</p>

                <h2>Tracks</h2>
                <ul>
                    {playlist.tracks.items.map((item, i) =>
                        <a href={item.track.external_urls.spotify}>
                            <div key={i} className="track-widget">
                                <img src={item.track.album.images[0].url} />
                                <p>{item.track.name}</p>
                                <p>Album: <a href={item.track.album.external_urls.spotify}>
                                    {item.track.album.name}
                                </a></p>
                                <p>Popularity: {item.track.popularity}</p>

                                <audio
                                    controls
                                    src={item.track.preview_url}>
                                </audio>
                            </div>
                        </a>
                    )}
                </ul>
            </div>
        );
    }
    else {
        return (
            <h1>Sorry, playlist details not available.</h1>
        );
    }
}

export default PlaylistDetails;