import { combineReducers } from "redux";
import ReducerPost from "../reducers/reducer-posts";
import ReducerActivePost from "../reducers/reducer-active-post";

const rootReducer = combineReducers({
  posts: ReducerPost,
  activePost: ReducerActivePost
});

export default rootReducer;
