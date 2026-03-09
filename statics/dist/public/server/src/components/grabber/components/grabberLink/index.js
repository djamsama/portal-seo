"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _formattedHTMLMessage = _interopRequireDefault(require("../../../formattedHTMLMessage"));
var _grabberLink = require("./styles/grabberLink");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Lien d'ajout/suppression d'un produit au grabber.
 */
var GrabberLink = /*#__PURE__*/function (_PureComponent) {
  function GrabberLink(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, GrabberLink);
    _this = _callSuper(this, GrabberLink, [props, state]);
    _this.state = {};
    _this.isPresentInGrabber = _this.isPresentInGrabber.bind(_this);
    return _this;
  }

  /** L'entité courante est-elle déjà présente dans le grabber. */
  (0, _inherits2["default"])(GrabberLink, _PureComponent);
  return (0, _createClass2["default"])(GrabberLink, [{
    key: "isPresentInGrabber",
    value: function isPresentInGrabber() {
      var _this$props = this.props,
        entityId = _this$props.entityId,
        grabberEntities = _this$props.grabberEntities;
      return grabberEntities && undefined !== grabberEntities.find(function (entity) {
        return entity.id === entityId.toString();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        entityId = _this$props2.entityId,
        entityImageUrl = _this$props2.entityImageUrl,
        entityLabel = _this$props2.entityLabel,
        onAddToGrabber = _this$props2.onAddToGrabber,
        onRemoveFromGrabber = _this$props2.onRemoveFromGrabber;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.isPresentInGrabber() && /*#__PURE__*/_react["default"].createElement(_grabberLink.LinkContainer, {
        onClick: function onClick() {
          return onRemoveFromGrabber(entityId.toString(), entityImageUrl, entityLabel, intl);
        },
        "data-cy": "compareLink"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa-stack selected"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-columns fa-stack-1x grabber-icon"
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_comparator_product_remove"
      })), !this.isPresentInGrabber() && /*#__PURE__*/_react["default"].createElement(_grabberLink.LinkContainer, {
        onClick: function onClick() {
          return onAddToGrabber(entityId.toString(), entityImageUrl, entityLabel, intl);
        },
        "data-cy": "compareLink"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa-stack"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-columns fa-stack-1x grabber-icon"
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_comparator_product_add"
      })));
    }
  }]);
}(_react.PureComponent);
var _default = exports["default"] = GrabberLink;