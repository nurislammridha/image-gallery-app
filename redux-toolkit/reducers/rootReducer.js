import { combineReducers } from "redux";
import gallerySlice from "../../features/gallerySlice";

// combine all of the reducers here
const rootReducer = combineReducers({
    posts: gallerySlice
});

export default rootReducer;
