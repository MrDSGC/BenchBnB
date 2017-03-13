import {RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';
const initialSession = {
  session: {
    currentUser: null,
    errors:[]
  }
};

const SessionReducer = (state = initialSession, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
   switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge(newState, action.currentUser)
      return newState
    case RECEIVE_ERRORS:
      newState = merge(newState,  action.errors)
      return newState
    default:
      return state;
  }

};

export default SessionReducer;
