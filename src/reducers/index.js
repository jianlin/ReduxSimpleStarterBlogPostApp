import { combineReducers } from 'redux';
import PostsReducer from "./posts-reducer";
import PostReducer from "./post-reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,   // must use the name 'form' for redux-form
  post: PostReducer
});

export default rootReducer;
