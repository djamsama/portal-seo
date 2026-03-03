"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../components/formattedHTMLMessage"));
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../../components/contextComponent");
var _map = require("./styles/map");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Map = /*#__PURE__*/function (_ContextComponent) {
  function Map() {
    (0, _classCallCheck2["default"])(this, Map);
    return _callSuper(this, Map, arguments);
  }
  (0, _inherits2["default"])(Map, _ContextComponent);
  return (0, _createClass2["default"])(Map, [{
    key: "render",
    value: function render() {
      var nbVisitorLetter = this.context.initData.nbVisitorLetter;
      return /*#__PURE__*/_react["default"].createElement(_map.ExhibitMapSection, null, /*#__PURE__*/_react["default"].createElement(_map.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_fa_block_map_title",
        values: {
          0: nbVisitorLetter,
          1: this.context.config.portal.siteLabel
        }
      })), /*#__PURE__*/_react["default"].createElement(_map.MapWrapper, null, /*#__PURE__*/_react["default"].createElement(_map.Africa, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_map_africa"
      })), /*#__PURE__*/_react["default"].createElement(_map.Asia, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_map_asia"
      })), /*#__PURE__*/_react["default"].createElement(_map.Oceania, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_map_australia"
      })), /*#__PURE__*/_react["default"].createElement(_map.Europe, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_map_europe"
      })), /*#__PURE__*/_react["default"].createElement(_map.NorthAmerica, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_map_northAmerica"
      })), /*#__PURE__*/_react["default"].createElement(_map.SouthAmerica, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_map_latinAmerica"
      })), /*#__PURE__*/_react["default"].createElement("img", {
        src: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/exhibit/map.png"),
        alt: "map"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Map;