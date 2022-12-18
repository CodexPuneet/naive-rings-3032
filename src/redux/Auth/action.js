import * as types from "./actionTypes";

const getAuthRequest = () => {
  return { type: types.GET_AUTH_REQUEST };
};

const getAuthSuccess = (payload) => {
  return { type: types.GET_AUTH_SUCCESS, payload };
};

const getAuthError = () => {
  return { type: types.GET_AUTH_FAILURE };
};

export { getAuthError, getAuthRequest, getAuthSuccess };
