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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _row = _interopRequireDefault(require("../../../../../../components/styles/row"));
var _subscriptionContainer = _interopRequireDefault(require("../../../../containers/subscriptionContainer"));
var _subscriptionTiles = require("./styles/subscriptionTiles");
var _contextComponent = require("../../../../../../components/contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/* eslint react/require-default-props: 0 */
var WrapperTiles = /*#__PURE__*/function (_ContextComponent) {
  function WrapperTiles(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, WrapperTiles);
    _this = _callSuper(this, WrapperTiles, [props, context]);
    _this.state = {
      data: _this.props.data ? _this.props.data : null
    };
    var _this$context$config$ = _this.context.config.portal,
      locale = _this$context$config$.locale,
      baseUrl = _this$context$config$.baseUrl;
    return _this;
  }
  (0, _inherits2["default"])(WrapperTiles, _ContextComponent);
  return (0, _createClass2["default"])(WrapperTiles, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement("div", null, this.props.title && /*#__PURE__*/_react["default"].createElement(_subscriptionTiles.TitleWrapper, null, /*#__PURE__*/_react["default"].createElement(_subscriptionTiles.Title, null, intl.formatMessage({
        id: this.props.title
      }))), /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_subscriptionTiles.TilesRowWrapper, {
        isLarge: this.props.isLarge
      }, this.state.data && this.state.data.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(_subscriptionContainer["default"], {
          imageHeight: _this2.props.imageHeight ? _this2.props.imageHeight : "auto",
          key: "MyspaceTile_".concat(item.name, "_").concat(index),
          item: item,
          isLarge: _this2.props.isLarge,
          onSubscriptionSubmit: function onSubscriptionSubmit(locale, baseUrl, notificationsOps, mediaType, subscribed, universId, auto) {
            return _this2.props.onSubscriptionSubmit(locale, baseUrl, notificationsOps, mediaType, subscribed, universId, auto);
          }
        });
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(WrapperTiles);
/* eslint react/forbid-prop-types: 0 */
WrapperTiles.propTypes = {
  /**
   *  Si true c'est une tuile large (100% du container)
   */

  isLarge: _propTypes["default"].bool,
  /**
   * Fonction passée par Redux
   */
  onSubscriptionSubmit: _propTypes["default"].func,
  /**
   *  titre de la tuile
   */
  title: _propTypes["default"].string,
  /**
   *  Données de la tuile (pour myspace par exemple on a déjà les données on les passe en paramètre)
   */
  data: _propTypes["default"].any
};