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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../formattedHTMLMessage"));
var _globalHelper = require("../../../../helpers/globalHelper");
var _contextComponent = require("../../../contextComponent");
var _popup = _interopRequireDefault(require("../../../popup"));
var _supplierReview = _interopRequireDefault(require("../supplierReview"));
var _supplierDetails = require("../../styles/supplierDetails");
var _rate = _interopRequireDefault(require("../../../rate"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SupplierRating = /*#__PURE__*/function (_ContextComponent) {
  function SupplierRating(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, SupplierRating);
    _this = _callSuper(this, SupplierRating, [props, state]);
    _this.state = {};
    return _this;
  }
  (0, _inherits2["default"])(SupplierRating, _ContextComponent);
  return (0, _createClass2["default"])(SupplierRating, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        secondary = _this$props.secondary,
        supplier = _this$props.supplier,
        isReview = _this$props.isReview,
        wrap = _this$props.wrap,
        reco = _this$props.reco;
      var starsSize;
      if (reco) {
        starsSize = 14;
      } else {
        starsSize = secondary ? 18 : 24;
      }
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      return /*#__PURE__*/_react["default"].createElement(_supplierDetails.Rating, null, /*#__PURE__*/_react["default"].createElement(_popup["default"], {
        on: "hover",
        flowing: true,
        hoverable: true,
        position: "top left",
        contentstyle: {
          marginTop: "0"
        },
        trigger: /*#__PURE__*/_react["default"].createElement(_supplierDetails.RatingDetails, {
          wrap: wrap ? 1 : 0,
          className: isMobile ? "mobile rating" : "rating"
        }, supplier.satisfactionCount && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_rate["default"], {
          count: 5,
          edit: false,
          value: supplier.satisfactionRating,
          size: starsSize,
          color2: "#ffd700"
        }), isReview && /*#__PURE__*/_react["default"].createElement(_supplierReview["default"], {
          secondary: secondary,
          count: supplier.satisfactionCount,
          reco: reco
        })))
      }, /*#__PURE__*/_react["default"].createElement(_supplierDetails.RatingTooltip, {
        className: "rating-tooltip"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_rating_tooltip"
      }, function (txt) {
        return txt;
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = SupplierRating;
SupplierRating.defaultProps = {
  isReview: true,
  wrap: false,
  reco: false
};