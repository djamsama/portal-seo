"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _homeActions = require("../actions/homeActions");
var _index = _interopRequireDefault(require("../index"));
/**
 * Redux MapStateToProps
 * @param {VeHomeState} homeDatas
 */
var mapStateToProps = function mapStateToProps(_ref) {
  var homeDatas = _ref.homeDatas;
  return {
    projects: homeDatas ? homeDatas.projects : null,
    products: homeDatas ? homeDatas.products : null,
    trends: homeDatas ? homeDatas.trends : null,
    emags: homeDatas ? homeDatas.emags : null,
    guides: homeDatas ? homeDatas.guides : null,
    submitting: homeDatas ? homeDatas.submitting : false
  };
};

/**
 * Redux mapDispatchToProps
 * @param {Dispatch<VeAction>} dispatch
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getItems: _homeActions.getItems,
    getEmags: _homeActions.getEmags,
    getGuides: _homeActions.getGuides
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_index["default"]);