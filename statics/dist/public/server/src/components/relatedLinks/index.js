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
var _contextComponent = require("../contextComponent");
var _relatedLinks = require("./styles/relatedLinks");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var RelatedLinks = /*#__PURE__*/function (_ContextComponent) {
  function RelatedLinks(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, RelatedLinks);
    _this = _callSuper(this, RelatedLinks, [props, state]);
    _this.state = {};
    return _this;
  }
  (0, _inherits2["default"])(RelatedLinks, _ContextComponent);
  return (0, _createClass2["default"])(RelatedLinks, [{
    key: "render",
    value: function render() {
      // $FlowFixMe
      var intl = this.props.intl;
      var kwrefMainList = this.context.initData.kwrefMainList;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, kwrefMainList && kwrefMainList.length > 0 && /*#__PURE__*/_react["default"].createElement(_relatedLinks.RelatedLinksWrapper, {
        scaleRatio: "1"
      }, /*#__PURE__*/_react["default"].createElement(_relatedLinks.Title, {
        "data-cy": "relatedLinksTitle"
      }, intl.formatMessage({
        id: "fo_stand_exhibitor_keywords"
      })), /*#__PURE__*/_react["default"].createElement(_relatedLinks.Links, {
        "data-cy": "relatedLinksContent"
      }, kwrefMainList.map(function (kwref) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: kwref.url
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: kwref.url
        }, kwref.label));
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(RelatedLinks);