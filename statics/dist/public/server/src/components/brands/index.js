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
var _contextComponent = require("../contextComponent");
var _brandsSlider = _interopRequireDefault(require("./brandsSlider"));
var _brandsSlider2 = require("./brandsSlider/styles/brandsSlider");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BrandsWrapper = /*#__PURE__*/function (_ContextComponent) {
  function BrandsWrapper(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, BrandsWrapper);
    _this = _callSuper(this, BrandsWrapper, [props]);
    _this.state = {
      data: false
    };
    return _this;
  }
  (0, _inherits2["default"])(BrandsWrapper, _ContextComponent);
  return (0, _createClass2["default"])(BrandsWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        brandsInfo = _this$props.brandsInfo,
        onBrandsRequestLoad = _this$props.onBrandsRequestLoad;
      var isBrandsLoaded = brandsInfo && brandsInfo.brands && brandsInfo.brands.length > 0;
      if (!isBrandsLoaded) {
        onBrandsRequestLoad();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        brandsInfo = _this$props2.brandsInfo,
        viewedPageId = _this$props2.viewedPageId;
      if (brandsInfo && brandsInfo.errors) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      if (brandsInfo && brandsInfo.brands && brandsInfo.brands.length > 0) {
        return /*#__PURE__*/_react["default"].createElement(_brandsSlider2.BrandsPlaceholder, null, /*#__PURE__*/_react["default"].createElement(_brandsSlider["default"], {
          brands: brandsInfo.brands,
          viewedPageId: viewedPageId
        }));
      }
      return /*#__PURE__*/_react["default"].createElement(_brandsSlider2.BrandsPlaceholder, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "brands-placeholder"
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = BrandsWrapper;