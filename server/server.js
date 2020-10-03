const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = new express();
const port = 5678;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/spotify_access_token", async (req, res, next) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_SECRET;

  let data = clientId + ":" + clientSecret;
  let buff = new Buffer(data);
  let base64data = buff.toString("base64");
  const body = "grant_type=client_credentials";

  try {
    // const headers: {
    //   Authorization: `Basic ${base64data}`,
    //   "Content-Type": "application/x-www-form-urlencoded",
    // };

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "post",
      body: body,
      headers: {
        Authorization: `Basic ${base64data}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const json = await response.json();

    console.log(json);
    return res.send(json);
  } catch (error) {
    console.log(error);

    res.send({ error });
  }
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
