"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _tile = require("./styles/tile");
var _globalHelper = require("../../helpers/globalHelper");
var _collapseVe = _interopRequireDefault(require("../collapse/collapseVe"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Tile = /*#__PURE__*/function (_Component) {
  function Tile(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Tile);
    _this = _callSuper(this, Tile, [props]);
    _this.toogleDisplay = _this.toogleDisplay.bind(_this);
    _this.state = {
      opened: true
    };
    return _this;
  }
  (0, _inherits2["default"])(Tile, _Component);
  return (0, _createClass2["default"])(Tile, [{
    key: "toogleDisplay",
    value: function toogleDisplay() {
      var opened = this.state.opened;
      this.setState({
        opened: !opened
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        mediaTemplates = _this$props.mediaTemplates,
        scaleRatio = _this$props.scaleRatio,
        children = _this$props.children,
        className = _this$props.className,
        render = _this$props.render,
        comp = _this$props.comp,
        dataCy = _this$props.dataCy,
        title = _this$props.title,
        titleAs = _this$props.titleAs,
        closable = _this$props.closable;
      var opened = this.state.opened;
      if (closable) {
        return /*#__PURE__*/_react["default"].createElement(_tile.TileWrapper, {
          dataCy: dataCy,
          className: className,
          isIE: _globalHelper.GlobalHelper.isMicrosoft(),
          mediaTemplates: mediaTemplates
        }, comp, /*#__PURE__*/_react["default"].createElement(_tile.TileInset, {
          className: "TileInset",
          scaleRatio: scaleRatio
        }, title !== null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_tile.TileTitle, {
          as: titleAs,
          onClick: this.toogleDisplay
        }, title, !opened && /*#__PURE__*/_react["default"].createElement(_tile.StyledIcon, {
          name: "chevron down"
        }), opened && /*#__PURE__*/_react["default"].createElement(_tile.StyledIcon, {
          name: "chevron up"
        }))), /*#__PURE__*/_react["default"].createElement(_collapseVe["default"], {
          isOpened: opened
        }, render != null ? render() : children)));
      }
      return /*#__PURE__*/_react["default"].createElement(_tile.TileWrapper, {
        dataCy: dataCy,
        className: className,
        isIE: _globalHelper.GlobalHelper.isMicrosoft(),
        mediaTemplates: mediaTemplates
      }, comp, /*#__PURE__*/_react["default"].createElement(_tile.TileInset, {
        className: "TileInset",
        scaleRatio: scaleRatio
      }, title !== null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_tile.TileTitle, {
        closable: false,
        as: titleAs
      }, title)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, render != null ? render() : children))));
    }
  }]);
}(_react.Component); // $FlowFixMe
Tile.defaultProps = {
  mediaTemplates: {},
  scaleRatio: 1.05,
  className: "",
  render: null,
  comp: null,
  children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
  dataCy: "",
  title: null,
  titleAs: "div",
  closable: false
};
var _default = exports["default"] = Tile;