import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../actions";

import { useDispatch } from "react-redux";

import ArtistRoute from "../ArtistRoute/";
const DEFAULT_ARTIST_ID = "4C50EbCS11M0VbGyH3OfLt";
const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());
    console.log("use effect");
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.access_token);
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receiveAccessTokenError(JSON.stringify(err)));
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ArtistRoute artistID={DEFAULT_ARTIST_ID} />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;
