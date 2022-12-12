import React, { useState } from 'react';

import { Modal } from '../context/Modal';
import PlaylistDetails from './PlaylistDetails';
import './PlaylistWidget.css'

const PlaylistWidget = ({ playlist }) => {
    if (playlist) {
        const [showModal, setShowModal] = useState(false);

        return (
            <>
                <div className="playlist-widget"
                    onClick={() => setShowModal(true)}>

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
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}
                        children={PlaylistDetails}>
                        <PlaylistDetails playlistId={playlist.id} />
                    </Modal>
                )}
            </>
        );
    }
}

export default PlaylistWidget;