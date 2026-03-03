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
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../components/contextComponent");
var _item = require("./styles/item");
var _bookmarkCommentContainer = _interopRequireDefault(require("../../containers/bookmarkCommentContainer"));
var _productMainFeatureValues = _interopRequireDefault(require("../../../../components/product/productMainFeatureValues"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Item = /*#__PURE__*/function (_ContextComponent) {
  function Item(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Item);
    _this = _callSuper(this, Item, [props, context]);
    _this.handleRef = _this.handleRef.bind(_this);
    _this.handleImgRef = _this.handleImgRef.bind(_this);
    _this.state = {
      openDetail: false,
      item: props.item
    };
    return _this;
  }
  (0, _inherits2["default"])(Item, _ContextComponent);
  return (0, _createClass2["default"])(Item, [{
    key: "renderItemInfo",
    value: function renderItemInfo(item) {
      if (!item) {
        return false;
      }
      switch (item.entityType) {
        case "PRODUCT":
          return item.productDTO;
        case "PDF":
          return item.pdfDTO;
        case "PDF_DETAILS":
          return item.pdfDetailsDTO;
        case "PROJECT":
        case "TREND":
          return item.projectDTO;
        default:
          return false;
      }
    }
  }, {
    key: "handleImgRef",
    value: function handleImgRef(node) {
      this.imgRef = node;
    }
  }, {
    key: "handleRef",
    value: function handleRef(node) {
      this.elRef = node;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        showComments = _this$props.showComments,
        folder = _this$props.folder,
        products = _this$props.products;
      var item = this.state.item;
      var itemInfo = this.renderItemInfo(item);
      if (!itemInfo) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            maxHeight: "30px"
          }
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_item.WrapperItem, {
        ref: this.handleRef
      }, /*#__PURE__*/_react["default"].createElement(_item.ItemType, null, item.requestTypes && item.requestTypes !== "" && item.requestTypes.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          key: item
        }, item);
      })), /*#__PURE__*/_react["default"].createElement(_item.WrapperImage, null, products && undefined !== products.find(function (product) {
        return product.id === item.entityId.toString();
      }) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "badge"
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: itemInfo.linkUrl
      }, /*#__PURE__*/_react["default"].createElement(_item.Image, {
        src: itemInfo.imageUrl,
        ref: this.handleImgRef,
        alt: itemInfo.name
      })), this.props.children), /*#__PURE__*/_react["default"].createElement(_item.ItemTitle, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: itemInfo.linkUrl
      }, itemInfo.name), item.entityType == "PRODUCT" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: itemInfo.elementUrl,
        className: "model"
      }, itemInfo.brand), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_productMainFeatureValues["default"], {
        featureValues: itemInfo.featureValuesOrdered
      }), /*#__PURE__*/_react["default"].createElement("br", null)), item.date && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "global_request_sendOn"
      }), ":", " ", new Date(item.date).toLocaleDateString(this.context && this.context.config && this.context.config.portal ? "".concat(this.context.config.portal.locale, "-").concat(this.context.config.portal.language) : "en-US"))), showComments && /*#__PURE__*/_react["default"].createElement(_bookmarkCommentContainer["default"], {
        item: item,
        folder: folder
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Item;
Item.propTypes = {
  /**
   *  folder contenant l'item
   *
   */
  folder: _propTypes["default"].object,
  /**
   *  Item
   *
   */
  item: _propTypes["default"].object,
  /**
   *  Est ce qu'il faut montrer les commentaires
   */

  showComments: _propTypes["default"].bool
};