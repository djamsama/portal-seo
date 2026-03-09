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
var _thumbnailQuotation = require("./styles/thumbnailQuotation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Affichage de la vignette devis dans l'historique des messages
 */
var ThumbnailQuotation = /*#__PURE__*/function (_React$Component) {
  function ThumbnailQuotation() {
    (0, _classCallCheck2["default"])(this, ThumbnailQuotation);
    return _callSuper(this, ThumbnailQuotation, arguments);
  }
  (0, _inherits2["default"])(ThumbnailQuotation, _React$Component);
  return (0, _createClass2["default"])(ThumbnailQuotation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        attachment = _this$props.attachment,
        selector = _this$props.selector;
      var name = attachment.name;
      var icon = {
        quotation: "fa-calculator",
        invoice: "fa-file-text-o",
        priceList: "fa-list",
        attachment: "fa-file-o"
      };
      var selectedIconClass = icon[selector] || "fa-paperclip";
      var renderThumbnail = function renderThumbnail() {
        return /*#__PURE__*/_react["default"].createElement(_thumbnailQuotation.ThumbnailDiv, null, /*#__PURE__*/_react["default"].createElement(_thumbnailQuotation.ThumbnailName, null, name), /*#__PURE__*/_react["default"].createElement(_thumbnailQuotation.ThumbnailImg, {
          src: attachment.thumbnail
        }));
      };
      var renderIcon = function renderIcon() {
        return /*#__PURE__*/_react["default"].createElement(_thumbnailQuotation.IconDiv, null, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa ".concat(selectedIconClass)
        }), /*#__PURE__*/_react["default"].createElement(_thumbnailQuotation.AttachmentName, null, name));
      };
      if (selector === "quotation" && attachment !== null && attachment !== void 0 && attachment.thumbnail) {
        return renderThumbnail();
      }
      return renderIcon();
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = ThumbnailQuotation;