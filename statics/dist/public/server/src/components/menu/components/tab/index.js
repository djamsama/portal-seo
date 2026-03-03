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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _globalHelper = require("../../../../helpers/globalHelper");
var _contextComponent = require("../../../contextComponent");
var _tab = require("./styles/tab");
var _ratingBlock = _interopRequireDefault(require("../../../ratingBlock"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Tab = exports["default"] = /*#__PURE__*/function (_ContextComponent) {
  function Tab() {
    (0, _classCallCheck2["default"])(this, Tab);
    return _callSuper(this, Tab, arguments);
  }
  (0, _inherits2["default"])(Tab, _ContextComponent);
  return (0, _createClass2["default"])(Tab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        tag = _this$props.tag,
        active = _this$props.active,
        doNotShowStatus = _this$props.doNotShowStatus;
      var components = {
        empty: _tab.DivLeftGrey,
        factory: _tab.DivLeftGreyFactory,
        factory2: _tab.DivLeftGreyFactory2,
        market: _tab.DivLeftGreyMarket
      };
      var TagLeftName = components[tag || "empty"];
      var item = this.props.item;
      if (!item) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      return isMobile ? /*#__PURE__*/_react["default"].createElement(_tab.SpanMobile, null, item.name, !doNotShowStatus && item.statut.labelStatut && /*#__PURE__*/_react["default"].createElement(_tab.SpanStatutMobile, null, item.statut.labelStatut)) : /*#__PURE__*/_react["default"].createElement(_tab.TabDiv, null, /*#__PURE__*/_react["default"].createElement(TagLeftName, {
        disable: item.disable
      }), /*#__PURE__*/_react["default"].createElement(_tab.TabContainer, {
        disable: item.disable,
        active: active
      }, /*#__PURE__*/_react["default"].createElement(_tab.ImgCompagny, {
        src: item.logo,
        alt: item.name
      }), !doNotShowStatus && /*#__PURE__*/_react["default"].createElement(_tab.DivStatut, null, /*#__PURE__*/_react["default"].createElement("span", null, item.statut.labelStatut)), item.rating && /*#__PURE__*/_react["default"].createElement(_tab.RatingContainer, null, /*#__PURE__*/_react["default"].createElement(_ratingBlock["default"], {
        starSize: 16,
        hideRating: item.rating.hideRating,
        satisfactionRating: item.rating.satisfactionRating,
        reactivityInterval: item.rating.reactivityInterval,
        satisfactionCount: item.rating.satisfactionCount,
        disableReactivityTooltip: false
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
Tab.propTypes = {
  /**
   * Item contenant les infos necessaires a l'onglet
   */
  item: _propTypes["default"].shape({
    logo: _propTypes["default"].string,
    // url du log a affiché (optionnal)
    name: _propTypes["default"].string,
    // nom de l'item (optionnal)
    statut: _propTypes["default"].shape({
      labelStatut: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string])
    }) // statut de l'item
  }).isRequired,
  /**
   *  Contenu de l'onglet
   */
  tag: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string]),
  /**
   * Est ce que l'onglet concerne une demande cloturée
   */
  disable: _propTypes["default"].bool,
  /**
   * Est ce que l'onglet est actif
   */
  active: _propTypes["default"].bool
};

// $FlowFixMe
Tab.defaultProps = {
  tag: "",
  disable: false,
  active: false
};