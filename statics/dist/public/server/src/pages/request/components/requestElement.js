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
var _formattedHTMLMessage = _interopRequireDefault(require("../../../components/formattedHTMLMessage"));
var _supplierRating = _interopRequireDefault(require("../../../components/supplierDetails/components/supplierRating"));
var _supplierReactivity = _interopRequireDefault(require("../../../components/supplierDetails/components/supplierReactivity"));
var _block = require("../styles/block");
var _contextComponent = require("../../../components/contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var isNotEmpty = function isNotEmpty(prop) {
  return prop && prop.length > 0;
};
var RequestElementComponent = exports["default"] = /*#__PURE__*/function (_ContextComponent) {
  // eslint-disable-next-line no-useless-constructor
  function RequestElementComponent(props) {
    (0, _classCallCheck2["default"])(this, RequestElementComponent);
    return _callSuper(this, RequestElementComponent, [props]);
  }
  (0, _inherits2["default"])(RequestElementComponent, _ContextComponent);
  return (0, _createClass2["default"])(RequestElementComponent, [{
    key: "render",
    value: function render() {
      var initData = this.context.initData;
      var requestElement = initData.requestElement;
      var requestCompany = initData.requestCompany;
      var supplierName = initData.supplierName,
        supplierAddress = initData.supplierAddress,
        notation = initData.notation;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_block.ProductBlock, null, /*#__PURE__*/_react["default"].createElement(_block.ProductImage, null, /*#__PURE__*/_react["default"].createElement(_block.TitleRequestElement, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_form_element_requested_title"
      }, function (txt) {
        return txt;
      })), /*#__PURE__*/_react["default"].createElement("img", {
        alt: requestElement.name,
        src: requestElement.imageUrl
      })), /*#__PURE__*/_react["default"].createElement(_block.ProductDescription, null, /*#__PURE__*/_react["default"].createElement("div", null, isNotEmpty(requestElement.name) && requestElement.name, isNotEmpty(requestElement.brand) && /*#__PURE__*/_react["default"].createElement("span", null, requestElement.brand)), /*#__PURE__*/_react["default"].createElement(_block.ProductCompanyImage, null, /*#__PURE__*/_react["default"].createElement("img", {
        src: requestCompany.imageUrl,
        alt: requestCompany.name
      })))), supplierName !== undefined && /*#__PURE__*/_react["default"].createElement(_block.ProductBlock, null, /*#__PURE__*/_react["default"].createElement(_block.SupplierWrapper, null, /*#__PURE__*/_react["default"].createElement(_block.SoldByLabel, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_request_button_main_supplier"
      }, function (txt) {
        return txt;
      })), /*#__PURE__*/_react["default"].createElement(_block.SupplierName, null, supplierName), supplierAddress !== undefined && /*#__PURE__*/_react["default"].createElement(_block.Address, null, supplierAddress), notation !== undefined && notation.satisfactionRating !== null && /*#__PURE__*/_react["default"].createElement(_supplierRating["default"], {
        supplier: {
          satisfactionCount: notation.satisfactionCount,
          satisfactionRating: notation.satisfactionRating,
          reactivityInterval: notation.reactivityInterval
        },
        secondary: true,
        isReview: true
      }), notation !== undefined && notation.reactivityInterval !== null && /*#__PURE__*/_react["default"].createElement(_supplierReactivity["default"], {
        supplier: {
          satisfactionCount: notation.satisfactionCount,
          satisfactionRating: notation.satisfactionRating,
          reactivityInterval: notation.reactivityInterval
        },
        secondary: false
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);