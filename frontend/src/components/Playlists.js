import React, { useEffect, useState } from 'react';

import CategoriesNav from './CategoriesNav';
import PlaylistWidget from './PlaylistWidget';
import './Playlists.css'

const Playlists = () => {
    const [categories, setCategories] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        // GET CATEGORIES
        const baseUrl = "https://api.spotify.com/v1/browse"
        const categoriesUrl = baseUrl + "/categories?limit=50"
        const auth_str = "Bearer " + localStorage.getItem("spotify_access_token");

        // Fetch all categories using 2 fetch calls
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
        })

        // fetch(categoriesUrl, {
        //     method: "GET",
        //     headers: {
        //         "Authorization": auth_str
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("FIRST 50 CATEGORIES", data);
        //         setCategories(data.categories.items);
        //     })

        // Fetch remaining categories
        // fetch(categoriesUrl + "&offset=50", {
        //     method: "GET",
        //     headers: {
        //         "Authorization": auth_str
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("REMAINING CATEGORIES", data)
        //         setCategories(categories.concat(data));
        //     });



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