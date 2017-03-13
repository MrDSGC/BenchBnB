import * as Util from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const recieveCurrentUser = (currentUser) => {
  return{
    type: RECEIVE_CURRENT_USER,
    currentUser

  }
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


export const login = (formUser) => (dispatch) => {
  return Util.postSession(formUser)
    .then( response => dispatch(recieveCurrentUser(response)) )
    .fail( response => dispatch(receiveErrors(response)) );
};

export const logout = () => (dispatch) => {
  return Util.deleteSession()
    .then( response => dispatch(recieveCurrentUser(null)) )
};

export const signup = (formUser) => (dispatch )=> {
  return Util.postUser(formUser)
    .then( response => dispatch (recieveCurrentUser(response)) )
    .fail( response => dispatch(receiveErrors(response)) );
};
