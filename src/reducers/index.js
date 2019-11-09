import { combineReducers } from "redux";
import ReducerPost from "../reducers/reducer-posts";

const rootReducer = combineReducers({
  posts: ReducerPost
});

export default rootReducer;
