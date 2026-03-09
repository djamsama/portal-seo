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
var _contextComponent = require("../../../components/contextComponent");
var _themeLayout = require("../../../layouts/styles/themeLayout");
var _pageLayout = _interopRequireDefault(require("../../../layouts/pageLayout"));
var _intro = _interopRequireDefault(require("./components/intro"));
var _exhibitFormContainer = _interopRequireDefault(require("./components/form/containers/exhibitFormContainer"));
var _mission = _interopRequireDefault(require("./components/mission"));
var _map = _interopRequireDefault(require("./components/map"));
var _testimonials = _interopRequireDefault(require("./components/testimonials"));
var _crisp = _interopRequireDefault(require("../../../components/crisp"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ExhibitPageComponent = /*#__PURE__*/function (_ContextComponent) {
  function ExhibitPageComponent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, ExhibitPageComponent);
    _this = _callSuper(this, ExhibitPageComponent, [props, context]);
    var match = props.match;
    var siteLabel = match.params.siteLabel;
    _this.state = {
      siteLabel: siteLabel
    };
    return _this;
  }
  (0, _inherits2["default"])(ExhibitPageComponent, _ContextComponent);
  return (0, _createClass2["default"])(ExhibitPageComponent, [{
    key: "render",
    value: function render() {
      var isOptimizationToFAFormEnabled = this.context.initData.isOptimizationToFAFormEnabled;
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], {
        theme: _themeLayout.ThemeLayoutFullWidth,
        brands: false
      }, /*#__PURE__*/_react["default"].createElement(_intro["default"], null), /*#__PURE__*/_react["default"].createElement(_exhibitFormContainer["default"], null), !isOptimizationToFAFormEnabled && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mission["default"], null), /*#__PURE__*/_react["default"].createElement(_map["default"], null)), /*#__PURE__*/_react["default"].createElement(_testimonials["default"], null), /*#__PURE__*/_react["default"].createElement(_crisp["default"], {
        fa: true
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ExhibitPageComponent);