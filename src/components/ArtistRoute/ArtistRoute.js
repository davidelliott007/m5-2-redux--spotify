import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ArtistRoute() {
  let accessToken = useSelector((state) => state.auth.token);

  return <div>{accessToken}</div>;
}

export default ArtistRoute;
