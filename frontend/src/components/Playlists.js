import React, { useEffect, useState } from 'react';

import CategoriesNav from './CategoriesNav';
import PlaylistWidget from './PlaylistWidget';
import './Playlists.css'

const Playlists = () => {
    const [categories, setCategories] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const baseUrl = "https://api.spotify.com/v1/browse"
        const auth_str = "Bearer " + localStorage.getItem("spotify_access_token");

        // GET CATEGORIES
        let categoriesUrl = baseUrl + "/categories"
        categoriesUrl += "?limit=50"
        fetch(categoriesUrl, {
            method: "GET",
            headers: {
                "Authorization": auth_str
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("CATEGORIES", data);
                setCategories(data.categories.items);
            })

        // GET PLAYLISTS

        // let url = 'https://api.spotify.com/v1/browse/featured-playlists';
        // url += '?country=MX'
        // url += '&limit=50'

        const categoryId = "";
        const playlistsUrl = `${baseUrl}/categories/${categoryId}/playlists`

        // fetch(playlistsUrl, {
        //     method: "GET",
        //     headers: {
        //         "Authorization": auth_str
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setPlaylists(data.playlists.items)
        //     })
    }, []);

    return (
        <div className="playlists-page">
            <h1>PLAYLISTS</h1>

            <CategoriesNav categories={categories} />

            <div className="playlists-container">
                {
                    playlists.length > 0 &&
                    playlists.map((playlist, i) => <PlaylistWidget key={i} playlist={playlist} />
                    )
                }
            </div>
        </div>
    );
}

export default Playlists;