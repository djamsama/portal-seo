"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myspaceLinkRequestSuccess = exports.myspaceLinkRequestLoad = exports.myspaceLinkRequestError = exports.myspaceLinkLogOutSuccess = exports.myspaceLinkLogOut = exports.myspaceLinkGetInfos = exports["default"] = exports.MYSPACE_LINK_SIGNIN_SUCCESS = exports.MYSPACE_LINK_REQUEST_ERROR = exports.MYSPACE_LINK_LOGOUT_SUCCESS = exports.MYSPACE_LINK_LOGOUT = exports.MYSPACE_LINK_LOADING = exports.MYSPACE_LINK_GET_INFOS_SUCCESS = exports.MYSPACE_LINK_GET_INFOS = void 0;
var MYSPACE_LINK_LOADING = exports.MYSPACE_LINK_LOADING = "MYSPACE_LINK_LOADING";
var MYSPACE_LINK_GET_INFOS = exports.MYSPACE_LINK_GET_INFOS = "MYSPACE_LINK_GET_INFOS";
var MYSPACE_LINK_REQUEST_ERROR = exports.MYSPACE_LINK_REQUEST_ERROR = "MYSPACE_LINK_REQUEST_ERROR";
var MYSPACE_LINK_GET_INFOS_SUCCESS = exports.MYSPACE_LINK_GET_INFOS_SUCCESS = "MYSPACE_LINK_GET_INFOS_SUCCESS";
var MYSPACE_LINK_LOGOUT = exports.MYSPACE_LINK_LOGOUT = "MYSPACE_LINK_LOGOUT";
var MYSPACE_LINK_LOGOUT_SUCCESS = exports.MYSPACE_LINK_LOGOUT_SUCCESS = "MYSPACE_LINK_LOGOUT_SUCCESS";
var MYSPACE_LINK_SIGNIN_SUCCESS = exports.MYSPACE_LINK_SIGNIN_SUCCESS = "MYSPACE_LINK_SIGNIN_SUCCESS";
var myspaceLinkRequestLoad = exports.myspaceLinkRequestLoad = function myspaceLinkRequestLoad(token, site) {
  return {
    type: MYSPACE_LINK_LOADING,
    payload: {
      isLoading: true,
      token: token,
      site: site
    }
  };
};
var myspaceLinkRequestError = exports.myspaceLinkRequestError = function myspaceLinkRequestError(errors) {
  return {
    type: MYSPACE_LINK_REQUEST_ERROR,
    payload: {
      errors: errors,
      isLoading: false
    }
  };
};
var myspaceLinkGetInfos = exports.myspaceLinkGetInfos = function myspaceLinkGetInfos(visitor) {
  return {
    type: MYSPACE_LINK_GET_INFOS,
    payload: {
      isLoading: true,
      token: visitor.payload.token,
      site: visitor.payload.site
    }
  };
};
var myspaceLinkRequestSuccess = exports.myspaceLinkRequestSuccess = function myspaceLinkRequestSuccess(visitor) {
  return {
    type: MYSPACE_LINK_GET_INFOS_SUCCESS,
    payload: {
      isLoading: false,
      visitor: visitor
    }
  };
};
var myspaceLinkLogOut = exports.myspaceLinkLogOut = function myspaceLinkLogOut() {
  return {
    type: MYSPACE_LINK_LOGOUT,
    payload: {
      isLoading: true
    }
  };
};
var myspaceLinkLogOutSuccess = exports.myspaceLinkLogOutSuccess = function myspaceLinkLogOutSuccess() {
  return {
    type: MYSPACE_LINK_LOGOUT_SUCCESS,
    payload: {
      isLoading: false,
      logoutSuccess: true
    }
  };
};
var _default = exports["default"] = {};