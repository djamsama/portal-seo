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
var _reactIntl = require("react-intl");
var _noResponse = require("./styles/noResponse");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant qui gère l'affichage d'une rfq sans réponse
 */
var MySpaceRFQNoResponse = /*#__PURE__*/function (_React$Component) {
  function MySpaceRFQNoResponse() {
    (0, _classCallCheck2["default"])(this, MySpaceRFQNoResponse);
    return _callSuper(this, MySpaceRFQNoResponse, arguments);
  }
  (0, _inherits2["default"])(MySpaceRFQNoResponse, _React$Component);
  return (0, _createClass2["default"])(MySpaceRFQNoResponse, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var urlImg = "".concat("https://img.virtual-expo.com", "/media/ps/images/common/rfq/");
      urlImg += this.props.closed ? "nofound.jpg" : "search.jpg";
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_noResponse.NoRFQDiv, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: this.props.closed ? "foj_myspace_rfqDetail_conv_history_noExchange" : "foj_myspace_rfqDetail_conv_history_waitingForExchange"
      }), /*#__PURE__*/_react["default"].createElement(_noResponse.ImgNoFound, {
        src: urlImg,
        alt: "noFound"
      })));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceRFQNoResponse);