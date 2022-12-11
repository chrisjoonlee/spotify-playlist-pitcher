import React from 'react';

const PlaylistWidget = ({ playlist }) => {
    return (
        <div className="playlist-widget">
            <a href={playlist.href}>
                <h2>{playlist.name}</h2>
            </a>
            <a href={playlist.owner.href}>
                Owner: {playlist.owner.display_name}
            </a>
            <img src={playlist.images[0].url} />
            <p>{playlist.description}</p>
        </div>
    );
}

export default PlaylistWidget;