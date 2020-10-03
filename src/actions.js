export const requestAccessToken = () => ({ type: "REQUEST_ACCESS_TOKEN" });

// this is going to put token into state
export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = (erorr) => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
  erorr,
});

export const requestArtistInfo = () => ({ type: "REQUEST_ARTIST_INFO" });

export const recieveArtistInfo = (artistInfo) => ({
  type: "RECEIVE_ARTIST_INFO",
  artistInfo,
});

export const recieveArtistInfoError = (erorr) => ({
  type: "RECEIVE_ARTIST_INFO_ERROR",
  erorr,
});
