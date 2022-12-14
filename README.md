# Spotify Playlists

This is a simple React app that connects to Spotify's API to present Spotify's editorial playlists to the user. After connecting to and getting authorized by the Spotify API, the user can navigate through different music categories, which update the playlists visible to the viewer through React context. The user can click on a playlist to see more detailed information, including a track list and links to the actual playlist on Spotify. All playlist data is fetched directly from Spotify's API following RESTful API protocols. The app also utilizes a backend Express server initially to access Spotify's access token for authorization.

## What I Learned
* React & React Context
* Express
* Spotify API
* RESTful API 
* Docker & Docker Compose
* Responsive CSS

## How to use

IMPORTANT: Please create an `.env` file in the backend folder and in the frontend folder, imitating the `.env.example` files provided. A client ID and client secret for the Spotify API can be obtained through their website for developers: https://developer.spotify.com/dashboard/login

### Option 1)
Go to the online app phere](http://chrisjoonlee-spotify-playlists.herokuapp.com/)
(Deployed through Heroku)

### Option 2)

Navigate to the root folder and run the following command:
* `docker-compose up`

To clean up, run the following commands:
* `docker-compose down`
* `docker image rm spotify-playlists-frontend-1`
* `docker image rm spotify-playlists-backend-1`

### Option 3)

Navigate to the backend folder and run the following commands:
* `npm install`
* `npm start`

In another terminal window, navigate to the frontend folder and run the following commands:
* `npm install`
* `npm start`

The React app can be accessed at localhost:3000
