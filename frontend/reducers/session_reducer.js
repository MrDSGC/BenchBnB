import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const initialSession = {
  session: {
    currentUser: null,
    errors:[]
  }
};

const SessionReducer = (state = initialSession, action) => {
  Object.freeze(state);
   switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser
    case RECEIVE_ERRORS:
      return action.errors
    default:
    console.log("working");
    debugger
      return state;
  }

};

export default SessionReducer;
