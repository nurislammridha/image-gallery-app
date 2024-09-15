import { combineReducers } from "redux";
import postsSlice from "../../features/imageGallerySlice";

// combine all of the reducers here
const rootReducer = combineReducers({
    posts: postsSlice
});

export default rootReducer;
