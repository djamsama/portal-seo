"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoaded = exports.saveData = exports.getComparatorData = exports.SETLOADED = exports.SAVEDATA = exports.GETCOMPARATORDATA = void 0;
var _comparatorService = _interopRequireDefault(require("../../../../../services/impl/comparatorService"));
var SAVEDATA = exports.SAVEDATA = "MYSPACE_COMPARATOR/SAVEDATA";
var saveData = exports.saveData = function saveData(data) {
  return {
    type: SAVEDATA,
    payload: {
      data: data
    }
  };
};
var GETCOMPARATORDATA = exports.GETCOMPARATORDATA = "GET_COMPARATOR_DATA";
var getComparatorData = exports.getComparatorData = function getComparatorData(products, context) {
  // productsComparator
  var comparatorService = new _comparatorService["default"](context);
  return function (dispatch) {
    return comparatorService.getComparatorData(products, context).then(function (_ref) {
      var data = _ref.data;
      if (data.errors.length > 0) {
        // error
      } else {
        // success
        dispatch(saveData(data));
      }
    });
  };
};
var SETLOADED = exports.SETLOADED = "SETLOADED";
var setLoaded = exports.setLoaded = function setLoaded() {
  return {
    type: SETLOADED
  };
};