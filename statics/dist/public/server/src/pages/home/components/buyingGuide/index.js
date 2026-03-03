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
var _reactFlickityComponent = _interopRequireDefault(require("react-flickity-component"));
var _styledComponents = require("styled-components");
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../components/contextComponent");
var _row = _interopRequireDefault(require("../../../../components/styles/row"));
var _responsive = _interopRequireDefault(require("../../../../components/styles/responsive"));
var _buyingGuide = require("./styles/buyingGuide");
var _sectionTitle = _interopRequireDefault(require("../../../../components/title/sectionTitle"));
var _buyingGuideTile = _interopRequireDefault(require("./buyingGuideTile"));
var _link = require("../../../../components/link");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BuyingGuide = /*#__PURE__*/function (_ContextComponent) {
  function BuyingGuide(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, BuyingGuide);
    _this = _callSuper(this, BuyingGuide, [props, context]);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.state = {
      mobileDisplay: _responsive["default"].isXsViewport()
    };
    return _this;
  }
  (0, _inherits2["default"])(BuyingGuide, _ContextComponent);
  return (0, _createClass2["default"])(BuyingGuide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.props.getGuides();
      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      this._isMounted = false;
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var mobileDisplay = this.state.mobileDisplay;
      // On ne met a jour l'état que si on bascule d'affichage (mobile <-> desktop) et qu'on n'est pas en train de re-rendre la vue
      if ((mobileDisplay && _responsive["default"].isXsViewport() || !mobileDisplay && !_responsive["default"].isXsViewport()) && this._isMounted) {
        return;
      }
      this.setState({
        mobileDisplay: _responsive["default"].isXsViewport()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var buyingGuidesLink = this.context.initData.buyingGuidesLink;
      var guides = this.props.guides;
      var mobileDisplay = this.state.mobileDisplay;
      var wrapperProps = {};
      var WrapperComponent = _react.Fragment;
      var styles = {};
      if (mobileDisplay) {
        WrapperComponent = _reactFlickityComponent["default"];
        wrapperProps = {
          options: {
            prevNextButtons: false,
            pageDots: true,
            draggable: true,
            adaptiveHeight: false,
            friction: 1.2,
            lazyLoad: false,
            resize: true,
            contain: true
          },
          flickityRef: function flickityRef(c) {
            return _this2.flkty = c;
          }
        };
        styles = {
          width: "85%",
          maxWidth: "300px",
          minHeight: "470px"
        };
      }
      var nbGuides = guides ? guides.length : 0;
      if (!guides || nbGuides > 0) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.TitleWrapper, null, /*#__PURE__*/_react["default"].createElement(_sectionTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "fo_homepage_buying_guides"
        }))), /*#__PURE__*/_react["default"].createElement(_row["default"], {
          minHeight: (0, _styledComponents.css)(["min-height:340px;"])
        }, /*#__PURE__*/_react["default"].createElement(WrapperComponent, wrapperProps, guides && guides.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_buyingGuide.BuyingGuideWrapper, {
            mobileDisplay: mobileDisplay,
            "data-cy": "buyingGuide".concat(index),
            style: styles,
            key: "bg".concat(item.name).concat(index.toString())
          }, /*#__PURE__*/_react["default"].createElement(_buyingGuideTile["default"], {
            item: item,
            linkText: item.brand,
            link: item.linkUrl
          }));
        }))), /*#__PURE__*/_react["default"].createElement(_buyingGuide.GlobalBuyingLinkWrapper, null, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
          component: _buyingGuide.GlobalBuyingLink,
          to: buyingGuidesLink,
          external: true
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "fo_homepage_buying_guides_link"
        }), " ", /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-angle-right"
        }))));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = BuyingGuide;