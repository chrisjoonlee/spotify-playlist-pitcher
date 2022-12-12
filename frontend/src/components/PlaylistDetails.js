import React, { useEffect, useState } from 'react';

import './PlaylistDetails.css'

const PlaylistDetails = ({ playlistId }) => {
    const [playlist, setPlaylist] = useState({});

    const commaFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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
            <div className="playlist-details-container">
                <h1>{playlist.name}</h1>
                <p className="playlist-details-owner-line">
                    By <a href={playlist.owner.external_urls.spotify}
                        className="playlist-details-owner">
                        {playlist.owner.display_name}
                    </a></p>

                <a href={playlist.external_urls.spotify} target="_blank">
                    <div className="playlist-details-img-container">
                        <img src={playlist.images[0].url} />
                        <div className="img-link-msg">GO TO SPOTIFY</div>
                    </div>
                </a>

                <p className="follower-count">FOLLOWERS: {commaFormat(playlist.followers.total)}</p>
                <p className="playlist-details-description">{playlist.description}</p>

                <h2>TRACKS</h2>
                {/* <ul>
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
                </ul> */}
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