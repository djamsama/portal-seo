"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductField = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _reactIntl = require("react-intl");
var _fieldWithError = require("../../../../../../../../../../components/fieldWithError/styles/fieldWithError");
var _productCard = _interopRequireDefault(require("../../../../../../../../../../components/product/productCard"));
var _trackingElement = require("../../../../../../../../../../models/trackingElement");
var _excluded = ["input", "label", "required", "width", "inline", "name", "options", "disabled", "clearable", "product", "pageTypeId", "trackingGa", "onChange", "trackingElement"];
var ProductField = exports.ProductField = function ProductField(_ref) {
  var input = _ref.input,
    label = _ref.label,
    required = _ref.required,
    width = _ref.width,
    inline = _ref.inline,
    name = _ref.name,
    options = _ref.options,
    disabled = _ref.disabled,
    clearable = _ref.clearable,
    product = _ref.product,
    pageTypeId = _ref.pageTypeId,
    trackingGa = _ref.trackingGa,
    onChange = _ref.onChange,
    trackingElement = _ref.trackingElement,
    custom = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_productCard["default"], {
    className: "card",
    imageUrl: product.imageUrl,
    sources: [{
      srcset: product.webpImageUrl
    }, {
      srcset: product.imageUrl
    }],
    linkUrl: product.linkUrl,
    label: product.name,
    brand: product.brand,
    companyImageUrl: product.company ? product.company.imageUrl : "",
    companyLinkUrl: product.company ? product.company.linkUrl : "",
    companyName: product.company ? product.company.name : "",
    newProduct: product.newProduct,
    hasVideo: product.hasVideo,
    productPrice: product.productPrice,
    featureValues: product.featureValuesOrdered,
    innovation: product.innovation,
    productTagAssociationList: product.productTagAssociationList,
    waitPriceLoad: false,
    supplierName: product.supplierName,
    supplierLocalisation: product.supplierLocalisation,
    supplierRanking: product.supplierRanking,
    satisfactionCount: product.satisfactionCount,
    reactivityInterval: product.reactivityInterval,
    selectable: true,
    selected: input.value,
    onSelect: input.onChange,
    name: input.name,
    reco: true,
    pageTypeId: pageTypeId
    //  optionsTrackingElement={optionsTrackingElement}
    ,
    trackingElement: new _trackingElement.TrackingElement(trackingElement),
    trackingGa: trackingGa
  }));
};