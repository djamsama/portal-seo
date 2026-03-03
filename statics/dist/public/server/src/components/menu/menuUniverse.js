"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuUniverseComponent = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _chunk = _interopRequireDefault(require("lodash/chunk"));
var _contextComponent = require("../contextComponent");
var _universGroup = require("./styles/universGroup");
var _universGroupSubMenu = require("./styles/universGroupSubMenu");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MenuUniverseComponent = exports.MenuUniverseComponent = /*#__PURE__*/function (_ContextComponent) {
  function MenuUniverseComponent() {
    (0, _classCallCheck2["default"])(this, MenuUniverseComponent);
    return _callSuper(this, MenuUniverseComponent, arguments);
  }
  (0, _inherits2["default"])(MenuUniverseComponent, _ContextComponent);
  return (0, _createClass2["default"])(MenuUniverseComponent, [{
    key: "render",
    value: function render() {
      var _this = this;
      if (this.props.menu !== undefined && this.props.menu.subMenuItems && this.props.menu.subMenuItems.length > 0) {
        var items = (0, _chunk["default"])(this.props.menu.subMenuItems, Math.round(this.props.menu.subMenuItems.length / 2));
        var Wrapper = this.props.wrapper || _styledComponents["default"].div.withConfig({
          componentId: "sc-10tgqhe-0"
        })(["width:100%;margin:auto;li:hover span{color:", ";}"], function (props) {
          return props.theme.mainLight;
        });
        var label = this.props.menu.label;
        var _this$props = this.props,
          handleClose = _this$props.handleClose,
          isHome = _this$props.isHome;
        var ParentMenu = isHome ? _universGroup.ParentMenu : _universGroupSubMenu.ParentMenu;
        var MenuRow = isHome ? _universGroup.MenuRow : _universGroupSubMenu.MenuRow;
        var MenuColumn = isHome ? _universGroup.MenuColumn : _universGroupSubMenu.MenuColumn;
        var onclick = {};
        if (handleClose) {
          onclick.onClick = function () {
            return handleClose();
          };
        }
        return /*#__PURE__*/_react["default"].createElement(Wrapper, null, label && /*#__PURE__*/_react["default"].createElement(ParentMenu, onclick, " ", label, " "), /*#__PURE__*/_react["default"].createElement(MenuRow, null, items.map(function (column, indexColumn) {
          return /*#__PURE__*/_react["default"].createElement(MenuColumn, {
            widthCustom: {
              xs: 12,
              sm: 6,
              md: 6,
              lg: 6
            },
            key: column[indexColumn] ? column[indexColumn].id : "menuColumn".concat(indexColumn)
          }, column.map(function (item, index) {
            return _this.props.generator(item, index);
          }));
        })));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);