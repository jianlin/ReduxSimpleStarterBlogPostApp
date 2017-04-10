import { FETCH_POST } from "../actions/index";

const INITIAL_STATE = null;


export default function(state = INITIAL_STATE, action) {
  console.log("inside PostReducer, action is", action, action.type, "HM", FETCH_POST);
  switch(action.type) {
    case FETCH_POST:
      console.log("this is the data", action.payload.data)
      return action.payload.data;
    default:
      return state;
  }
}
