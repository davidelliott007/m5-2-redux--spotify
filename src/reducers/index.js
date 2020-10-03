import { combineReducers } from "redux";

import auth from "./auth_reducer";
import artists from "./artists-reducer";

export default combineReducers({ auth, artists });
