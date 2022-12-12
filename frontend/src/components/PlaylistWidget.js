import React from 'react';

import './PlaylistWidget.css'

const PlaylistWidget = ({ playlist }) => {
    if (playlist) {
        return (
            <div className="playlist-widget">
                <div className="img-container">
                    <img src={playlist.images[0].url} />
                </div>
                <div className="playlist-info">
                    <a href={playlist.href}>
                        <h2 className="playlist-title">{playlist.name}</h2>
                    </a>

                    <p className="playlist-owner-line">
                        By <a href={playlist.owner.href} className="playlist-owner">
                            {playlist.owner.display_name}
                        </a>
                    </p>

                    <p className="playlist-description">
                        {playlist.description}
                    </p>

                    <p>Tracks: {playlist.tracks.total}</p>
                </div>
            </div >
        );
    }
}

export default PlaylistWidget;