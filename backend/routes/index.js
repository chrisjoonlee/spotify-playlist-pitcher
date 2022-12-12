const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

// Define variables for Spotify API access
const client_id = "f5996dbb6e8b40978186c7cd1cabe92b";
const client_secret = "f36dc175d76f45f1bf719e6b50320166";
const auth_str = "Basic " +
  Buffer.from(client_id + ":" + client_secret).toString('base64');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express server');
});

router.get('/code', async function (req, res) {
  // Receive code from front-end
  const code = req.query.code;
  console.log("Code", code);

  // console.log("OPTIONS", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Authorization": auth_str
  //   },
  //   body: `grant_type=authorization_code&code=${code}&redirect_uri=http://127.0.0.1:3000/`
  // });

  // Send token request to Spotify API
  // const response = await fetch('https://accounts.spotify.com/api/token', {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Authorization": auth_str
  //   },
  //   body: `grant_type=authorization_code&code=${code}&redirect_uri=http://127.0.0.1:3000/`
  // });
  // const data = await response.json();

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: "POST",
    headers: {
      "Authorization": auth_str,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  const data = await response.json();
  console.log(data);

  // If the response status isn't 200, send an error message
  if (response.status != 200) {
    console.log("Error", response);
    res.json(new Error(response));
    return
  }

  // Send access token to the front end
  if (data.access_token) {
    console.log("ACCESS TOKEN:", data.access_token);
    return res.json(data.access_token);
  }
});

module.exports = router;
