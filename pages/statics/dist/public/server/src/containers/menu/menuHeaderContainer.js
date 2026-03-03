"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _menuActions = require("../../actions/menuActions");
var _menuHeader = _interopRequireDefault(require("../../components/menu/menuHeader"));
// eslint-disable-next-line
/**
 * Redux MapStateToProps
 * @param {MenuState} menu
 */
var mapStateToProps = function mapStateToProps(_ref) {
  var Menu = _ref.Menu;
  return {
    currentMenuItem: Menu ? Menu.menuItemActive : null,
    menuItems: Menu ? Menu.menuItems : null
  };
};

/**
 * Redux mapDispatchToProps
 * @param {Dispatch<VeAction>} dispatch
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    loadMenu: _menuActions.menuRequestLoad,
    selectMenu: _menuActions.selectMenu,
    resetMenu: _menuActions.resetMenu
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_menuHeader["default"]);