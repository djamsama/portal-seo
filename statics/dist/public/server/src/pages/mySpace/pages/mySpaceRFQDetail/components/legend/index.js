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
var _legend = require("./styles/legend");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant l'affichage de la légende des icônes des onglets rfq
 */
var MySpaceRFQDetailLegend = /*#__PURE__*/function (_React$Component) {
  function MySpaceRFQDetailLegend() {
    (0, _classCallCheck2["default"])(this, MySpaceRFQDetailLegend);
    return _callSuper(this, MySpaceRFQDetailLegend, arguments);
  }
  (0, _inherits2["default"])(MySpaceRFQDetailLegend, _React$Component);
  return (0, _createClass2["default"])(MySpaceRFQDetailLegend, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var legendManufacturers = intl.formatMessage({
        id: "foj_myspace_rfqDetail_tab_history_legendManufacturers"
      });
      var legendDistributors = intl.formatMessage({
        id: "foj_myspace_rfqDetail_tab_history_legendDistributors"
      });
      return /*#__PURE__*/_react["default"].createElement(_legend.LegendContainer, null, /*#__PURE__*/_react["default"].createElement(_legend.PLegend, null, /*#__PURE__*/_react["default"].createElement(_legend.ImgLegend, {
        src: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/pictos/factory.svg"),
        alt: legendManufacturers
      }), legendManufacturers), /*#__PURE__*/_react["default"].createElement(_legend.PLegend, null, /*#__PURE__*/_react["default"].createElement(_legend.ImgLegend, {
        src: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/pictos/market.svg"),
        alt: legendDistributors
      }), legendDistributors));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceRFQDetailLegend);