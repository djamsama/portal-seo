"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandProductState = exports.StandProductReducerName = exports.StandProductReducer = void 0;
/**
 * Reducer utile pour les StateData de java.
 */
var StandProductReducerName = exports.StandProductReducerName = "StandProduct";
var StandProductState = exports.StandProductState = {};
var StandProductReducer = exports.StandProductReducer = function StandProductReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StandProductState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    default:
      return state;
  }
};