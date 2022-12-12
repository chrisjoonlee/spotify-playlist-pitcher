import React, { useEffect, useState } from 'react';

import { useCategory } from '../context/CategoryContext';

import CategoriesNav from './CategoriesNav';
import PlaylistWidget from './PlaylistWidget';
import './Playlists.css'
import './CategoriesNav.css'

const Playlists = () => {
    const { category } = useCategory();

    const [categories, setCategories] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    // Info for fetching from Spotify API
    const baseUrl = "https://api.spotify.com/v1/browse"
    const categoriesUrl = baseUrl + "/categories?limit=50"
    const auth_str = "Bearer " + localStorage.getItem("spotify_access_token");

    // FETCH CATEGORIES
    useEffect(() => {
        // Fetch categories using 2 fetch calls
        Promise.all([
            fetch(categoriesUrl, {
                method: "GET",
                headers: {
                    "Authorization": auth_str
                }
            }),
            fetch(categoriesUrl + "&offset=50", {
                method: "GET",
                headers: {
                    "Authorization": auth_str
                }
            })
        ]).then(([response1, response2]) => {
            return Promise.all([response1.json(), response2.json()])
        }).then(([data1, data2]) => {
            console.log(data1)
            console.log(data2)
            // Store the categories in state
            setCategories(data1.categories.items.concat(data2.categories.items))
        }).catch(err => {
            setCategories([])
        })
    }, []);

    // FETCH PLAYLISTS BASED ON CATEGORY
    useEffect(() => {
        const playlistsUrl = `${baseUrl}/categories/${category}/playlists?limit=50`
        fetch(playlistsUrl, {
            method: "GET",
            headers: {
                "Authorization": auth_str
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPlaylists(data.playlists.items);
            })
            .catch(err => {
                setPlaylists([])
            })
    }, [category]);

    return (
        <div className="playlists-page">
            <h1>PLAYLISTS</h1>
            <div className="playlists-interface">
                <button className="nav-toggle">
                    GENRES
                </button>

                <CategoriesNav categories={categories}
                    className="categories-nav" />

                <div className="playlists-container">
                    {
                        playlists.length > 0 &&
                        playlists.map((playlist, i) => <PlaylistWidget key={i} playlist={playlist} />
                        )
                    }

                    {
                        categories.length == 0 &&
                        <h2>There was a problem connecting to Spotify's API</h2>
                    }

                    {
                        categories.length > 0 && playlists.length == 0 &&
                        <h2 className="no-playlists-msg">No playlists found.</h2>
                    }
                </div>
            </div>
        </div>
    );
}

export default Playlists;