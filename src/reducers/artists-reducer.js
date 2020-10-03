const initialState = {
  artistInfo: null,
  status: "idle",
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_INFO": {
      return {
        ...state,
        status: `loading`,
      };
    }

    case "RECEIVE_ARTIST_INFO": {
      console.log(action);
      return {
        ...state,
        artistInfo: action.artistInfo,
        status: "idle",
      };
    }

    case "RECEIVE_ARTIST_INFO_ERROR": {
      return {
        ...state,
        error: action.error,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
