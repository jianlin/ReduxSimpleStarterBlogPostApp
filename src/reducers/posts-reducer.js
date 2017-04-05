import { FETCH_POSTS } from "../actions/index";

const INITIAL_STATE = {
    all: [],
    post: null
};

export default function(state = INITIAL_STATE, action) {
  console.log("inside reducer, action is", action, action.type, "HM", FETCH_POSTS);
  switch(action.type) {
    case FETCH_POSTS:
      console.log("this is the data", action.payload.data)
      return { all: action.payload.data, post: null};
    default:
      return state;
  }
return state;
}
