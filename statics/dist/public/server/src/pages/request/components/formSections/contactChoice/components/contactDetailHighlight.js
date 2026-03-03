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
var _reactIntl = require("react-intl");
var _semanticUiReact = require("semantic-ui-react");
var _supplierRating = _interopRequireDefault(require("../../../../../../components/supplierDetails/components/supplierRating"));
var _supplierReview = _interopRequireDefault(require("../../../../../../components/supplierDetails/components/supplierReview"));
var _supplierReactivity = _interopRequireDefault(require("../../../../../../components/supplierDetails/components/supplierReactivity"));
var _prices = require("../../../../../../components/prices");
var _loading = _interopRequireDefault(require("../../../../../../components/loading"));
var _contactsHelper = _interopRequireDefault(require("./helpers/contactsHelper"));
var _contact = require("./styles/contact");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */ /* $FlowFixMe */
/** Affichage d'un contact Highlight from "voir les coordonnées" */
var ContactComponent = /*#__PURE__*/function (_Component) {
  /** Coupure des noms */

  function ContactComponent() {
    var _this;
    (0, _classCallCheck2["default"])(this, ContactComponent);
    _this = _callSuper(this, ContactComponent);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.renderRating = _this.renderRating.bind(_this);
    _this.renderReview = _this.renderReview.bind(_this);
    _this.renderReactivity = _this.renderReactivity.bind(_this);
    return _this;
  }

  /** Envoi du form */
  (0, _inherits2["default"])(ContactComponent, _Component);
  return (0, _createClass2["default"])(ContactComponent, [{
    key: "handleSubmit",
    value: function handleSubmit(val) {
      var handleSubmitChoice = this.props.handleSubmitChoice;
      if (handleSubmitChoice) {
        handleSubmitChoice(val);
      }
    }
  }, {
    key: "renderRating",
    value: function renderRating() {
      var _this$props = this.props,
        contact = _this$props.contact,
        highLight = _this$props.highLight;
      return /*#__PURE__*/_react["default"].createElement(_supplierRating["default"], {
        wrap: true,
        supplier: contact,
        secondary: !highLight
      });
    }
  }, {
    key: "renderReview",
    value: function renderReview() {
      var contact = this.props.contact;
      return /*#__PURE__*/_react["default"].createElement(_contact.BlockQuality, null, /*#__PURE__*/_react["default"].createElement(_supplierReview["default"], {
        count: contact.satisfactionCount
      }));
    }
  }, {
    key: "renderReactivity",
    value: function renderReactivity() {
      var _this$props2 = this.props,
        contact = _this$props2.contact,
        highLight = _this$props2.highLight;
      return /*#__PURE__*/_react["default"].createElement(_contact.BlockQuality, null, /*#__PURE__*/_react["default"].createElement(_supplierReactivity["default"], {
        supplier: contact,
        secondary: !highLight,
        isReview: false
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        contact = _this$props3.contact,
        highLight = _this$props3.highLight,
        isLoading = _this$props3.isLoading,
        intl = _this$props3.intl,
        nb = _this$props3.nb;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        stackable: true,
        columns: "equal"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridRow, {
        style: {
          paddingBottom: "0",
          paddingLeft: "1.5em"
        }
      }, /*#__PURE__*/_react["default"].createElement(_contact.BlockNameInline, null, /*#__PURE__*/_react["default"].createElement(_contact.UpperName, null, _contactsHelper["default"].cutTxt(contact.companyName, 16)), (contact.satisfactionCount || contact.reactivityInterval) && /*#__PURE__*/_react["default"].createElement(_contact.BlockStarsMobileWrapper, {
        highLight: true
      }, /*#__PURE__*/_react["default"].createElement(_contact.BlockStars, null, /*#__PURE__*/_react["default"].createElement(_contact.Small, null, this.renderRating(), contact.reactivityInterval && this.renderReactivity())))), /*#__PURE__*/_react["default"].createElement(_contact.BlockLocalisationInline, {
        highLight: highLight
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        style: {
          color: "#99979c"
        },
        name: "map marker alternate"
      }), " ", contact.location)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridRow, {
        style: {
          padding: "0",
          paddingLeft: "1.5em"
        }
      }, (contact.satisfactionCount || contact.reactivityInterval) && /*#__PURE__*/_react["default"].createElement(_contact.BlockStarsDesktopWrapper, {
        highLight: true
      }, /*#__PURE__*/_react["default"].createElement(_contact.BlockStars, {
        highLight: true
      }, contact.satisfactionCount && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderRating()), contact.reactivityInterval && this.renderReactivity()))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridRow, {
        style: {
          marginTop: "0",
          marginBottom: nb > 1 ? "20px" : "0px",
          borderBottom: nb > 1 ? "solid  2px #eee" : "inherit"
        }
      }, " ", /*#__PURE__*/_react["default"].createElement(_contact.ValidationBlock, null, contact.productPrice && /*#__PURE__*/_react["default"].createElement(_prices.BlockPrice, null, /*#__PURE__*/_react["default"].createElement(_contact.PriceWrapper, {
        highLight: highLight
      }, contact.productPrice.priceTypeLabelKey && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_contact.LabelPrice, {
        highLight: highLight
      }, "".concat(intl.formatMessage({
        id: contact.productPrice.priceTypeLabelKey
      }).substr(0, 1).toLocaleUpperCase()).concat(intl
      /* $FlowFixMe */.formatMessage({
        id: contact.productPrice.priceTypeLabelKey
      }).substr(1)))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_contact.StyledPrice, {
        highLight: highLight
      }, /*#__PURE__*/_react["default"].createElement(_prices.Price, {
        price: contact.productPrice
      }))))), !isLoading && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_contact.StyledPortalButtonContact, {
        highLight: highLight,
        as: "button",
        onClick: function onClick() {
          return _this2.handleSubmit(contact.contactId);
        }
      }, /*#__PURE__*/_react["default"].createElement(_contact.StyledIcon, {
        name: "address card outline"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_request_contactForm_See_Contacts_send"
      }))), isLoading && /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        active: true,
        spinnerSize: 20
      }))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ContactComponent);