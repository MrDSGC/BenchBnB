import React from 'react';
import * as Util from 'session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const recieveCurrentUser = (currentUser) => {
  type: RECEIVE_CURRENT_USER,
  currentUser
}

export const receiveErrors
