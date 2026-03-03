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
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _styledComponents = require("styled-components");
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _slider = _interopRequireDefault(require("../slider"));
var _constants = require("../../commons/constants");
var _contextComponent = require("../contextComponent");
var _grabberCard = _interopRequireDefault(require("./components/grabberCard"));
var _grabber = require("./styles/grabber");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
// $FlowFixMe
var flickitySliderCss = (0, _styledComponents.css)([".flickity-prev-next-button{width:20px;height:20px;}.flickity-slider > div{width:70%;max-width:200px;}.flickity-slider .GrabberMoreProducts > div{padding:0;}.flickity-page-dots .dot{background:#fff;bottom:-20px;}.flickity-page-dots{bottom:-20px;line-height:20px;}"]);
var maxProducts = 10;

/** Composant Grabber permettant de visualiser le nombre de produits présents dans le comparateur. */
var Grabber = /*#__PURE__*/function (_ContextComponent) {
  function Grabber(props, state) {
    var _this2;
    var _this;
    (0, _classCallCheck2["default"])(this, Grabber);
    _this = _callSuper(this, Grabber, [props, state]);
    _this.state = {
      expanded: false,
      show: false
    };
    _this.expand = _this.expand.bind(_this);
    _this.emptyGrabber = _this.emptyGrabber.bind(_this);
    _this.compare = _this.compare.bind(_this);

    // Ecoute des mises à jour du local storage
    if (typeof window !== "undefined" && (_this2 = _this) !== null && _this2 !== void 0 && (_this2 = _this2.props) !== null && _this2 !== void 0 && _this2.loadProducts) {
      var _this$props;
      window.addEventListener(_constants.LOCAL_STORAGE, _this.props.loadProducts);
      (_this$props = _this.props) === null || _this$props === void 0 || _this$props.loadProducts();
    }
    return _this;
  }
  (0, _inherits2["default"])(Grabber, _ContextComponent);
  return (0, _createClass2["default"])(Grabber, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== "undefined") {
        window.removeEventListener(_constants.LOCAL_STORAGE, this.props.loadProducts);
      }
    }

    /** Suppression de tous les produits du grabber. */
  }, {
    key: "emptyGrabber",
    value: function emptyGrabber(event) {
      event.stopPropagation();
      this.props.deleteAll();
      this.setState({
        expanded: false
      });
    }

    /** Redirection vers la page de comparaison des produits. */
  }, {
    key: "compare",
    value: function compare(event) {
      event.stopPropagation();
      var globalLinksHome = this.context.initData.globalLinksHome;
      var baseUrl = globalLinksHome.substr(-1) !== "/" ? "".concat(globalLinksHome, "/") : globalLinksHome;
      document.location.href = "".concat(baseUrl, "compare.html");
    }

    /** Gestion de l'expansion du grabber. */
  }, {
    key: "expand",
    value: function expand() {
      var expanded = this.state.expanded;
      this.setState({
        expanded: !expanded
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        deleteOne = _this$props2.deleteOne,
        products = _this$props2.products,
        expandedProps = _this$props2.expandedProps;
      var expanded = this.state.expanded;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, products && products.length > 0 && /*#__PURE__*/_react["default"].createElement(_grabber.GrabberWrapper, {
        className: (expanded && expandedProps ? "expanded" : "collapsed") + (expandedProps ? " Visible" : " Hidden")
      }, /*#__PURE__*/_react["default"].createElement(_grabber.GrabberActions, {
        className: "grabberActions",
        onClick: this.expand
      }, /*#__PURE__*/_react["default"].createElement(_grabber.GrabberCounter, {
        className: "grabberCounter"
      }, intl.formatMessage({
        id: "foj_comparator_grabber_added"
      }, {
        "0": products ? products.length : 0,
        "1": maxProducts
      })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        size: "small",
        type: "submit",
        isDisabled: !(products && products.length > 1),
        onClick: this.compare,
        endIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
          name: "columns"
        })
      }, intl.formatMessage({
        id: "foj_comparator_grabber_compare"
      })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        outlined: true,
        size: "small",
        type: "submit",
        themeColor: "light",
        onClick: this.emptyGrabber,
        isDisabled: !(products && products.length > 0),
        endIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
          name: "trash"
        })
      }, intl.formatMessage({
        id: "foj_comparator_grabber_empty"
      }))), /*#__PURE__*/_react["default"].createElement(_grabber.GrabberProductDetails, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "ProductDetailsWrapper"
      }, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
        flickitySliderCss: flickitySliderCss,
        indexOneOnResize: true,
        options: {
          prevNextButtons: true,
          pageDots: true,
          draggable: true,
          lazyLoad: false,
          reloadOnUpdate: true,
          resize: true,
          freeScrollFriction: 0.1,
          selectedAttraction: 0.2,
          friction: 0.8,
          cellAlign: "center",
          contain: true,
          arrowShape: {
            x0: 10,
            x1: 40,
            y1: 50,
            x2: 80,
            y2: 50,
            x3: 50
          }
        }
      }, products && !(0, _isEmpty["default"])(products) && products.map(function (value, index) {
        return /*#__PURE__*/_react["default"].createElement(_grabberCard["default"]
        // eslint-disable-next-line react/no-array-index-key
        , {
          key: "GrabberCard".concat(index),
          productId: value.id,
          productImage: value.img,
          productDef: value.def,
          onDelete: function onDelete() {
            return deleteOne(value.id);
          }
        });
      }), products && !(0, _isEmpty["default"])(products) && products.length < maxProducts && /*#__PURE__*/_react["default"].createElement("div", {
        className: "GrabberMoreProducts"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "MoreProductCard"
      }, intl.formatMessage({
        id: "foj_comparator_grabber_add_more"
      }))))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, currentState) {
      if (currentState.expanded !== props.expandedProps && props.expandedProps === false) {
        return {
          expanded: false
        };
      }
      return null;
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(Grabber);