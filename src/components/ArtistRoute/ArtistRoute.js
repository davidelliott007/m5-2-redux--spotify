import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchArtistProfile,
  abbreviateNumber,
} from "../../helpers/api-helpers";

import {
  requestArtistInfo,
  recieveArtistInfo,
  recieveArtistInfoError,
} from "../../actions";

function ArtistRoute(artistID) {
  const dispatch = useDispatch();

  let accessToken = useSelector((state) => state.auth.token);
  let artistInfo = useSelector((state) => state.artists.artistInfo);

  React.useEffect(() => {
    async function getArtistPage() {
      console.log(accessToken);
      dispatch(requestArtistInfo());

      let profile = await fetchArtistProfile(accessToken, artistID.artistID);
      console.log(profile);
      dispatch(recieveArtistInfo(profile));
    }
    getArtistPage();
  }, [accessToken]);

  console.log(artistInfo);
  if (!artistInfo) {
    return <div>loading...</div>;
  }

  let first_two_genres = artistInfo.genres;
  // console.log(first_two_genres.slice(0, 2));
  return (
    <div>
      {artistInfo.name}
      {abbreviateNumber(artistInfo.followers.total)}
      <img src={artistInfo.images[0].url} />
      {first_two_genres.slice(0, 2).map((genre) => genre)}
    </div>
  );
}

export default ArtistRoute;
