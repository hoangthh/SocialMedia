import { INIT_STATE } from "../../constant";
import { createPost, getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest()):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess()):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure()):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess()):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}
