import { combineReducers } from "redux";
import ReducerPosts from "../reducers/reducer-posts";
import ReducerActivePost from "../reducers/reducer-active-post";
import { reducer as ReducerForm } from "redux-form";

const rootReducer = combineReducers({
  posts: ReducerPosts,
  activePost: ReducerActivePost,
  form: ReducerForm
});

export default rootReducer;
