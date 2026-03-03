"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
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
var _constants = require("../../../../constants");
var _contactsHelper = _interopRequireDefault(require("./helpers/contactsHelper"));
var _withGoogleAnalytics = require("../../../../../../hoc/withGoogleAnalytics");
var _contact = require("./styles/contact");
var _constants2 = require("../../../../../stand/components/constants");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */ /* $FlowFixMe */
/** Affichage d'un contact avec ou sans prix, highlight ou pas ... */
var ContactComponent = /*#__PURE__*/function (_Component) {
  // eslint-disable-next-line react/sort-comp

  function ContactComponent() {
    var _this;
    (0, _classCallCheck2["default"])(this, ContactComponent);
    _this = _callSuper(this, ContactComponent);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleForward = _this.handleForward.bind(_this);
    _this.displayRules = _this.displayRules.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ContactComponent, _Component);
  return (0, _createClass2["default"])(ContactComponent, [{
    key: "handleForward",
    value: function handleForward(button) {
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        requestTrackEvent = _this$props.requestTrackEvent,
        labelGa = _this$props.labelGa;

      // le tracking ga sur le submit est gerer par requestFormMiddleware
      // Ici ce n'est pas un submit on doit le gerer
      if (googleAnalytics) {
        googleAnalytics.event({
          action: requestTrackEvent.action,
          category: requestTrackEvent.category,
          label: labelGa
        });
      }
      document.location.href = button.url;
    }

    /** Envoi du form */
  }, {
    key: "handleSubmit",
    value: function handleSubmit(val) {
      var handleSubmitChoice = this.props.handleSubmitChoice;
      if (handleSubmitChoice) {
        handleSubmitChoice(val);
      }
    }

    /** Gestion de l'affichage des colonnes */
  }, {
    key: "displayRules",
    value: function displayRules() {
      var _this$props2 = this.props,
        contact = _this$props2.contact,
        highLight = _this$props2.highLight,
        isPrice = _this$props2.isPrice,
        nb = _this$props2.nb;
      var isColumnPrice = !highLight && isPrice || highLight && !!contact.productPrice;
      var contactLength = contact && contact.companyName ? contact.companyName.length : 0;
      var minHighlightWidthName = contactLength > 8 ? 5 : 3;
      var maxHighlightWidthName = contactLength > 8 ? 6 : 3;
      var highlightWidthName = isColumnPrice ? minHighlightWidthName : maxHighlightWidthName;
      var widthName = isColumnPrice ? 3 : 4;
      var minHighlightWidthLocation = contactLength > 8 ? 4 : 6;
      var highlightWidthLocation = isColumnPrice ? minHighlightWidthLocation : 7;
      var widthLocation = isColumnPrice ? 5 : 8;
      var borderSolid = highLight === true ? "2px" : "1px";
      var borderBottom = nb > 1 ? "solid ".concat(borderSolid, " #eee") : "inherit";
      var moveLeft = !!(contact && contact.location && contact.location.length < 24 && !isColumnPrice || !highLight);
      return {
        isColumnPrice: isColumnPrice,
        highlightWidthName: highlightWidthName,
        widthName: widthName,
        highlightWidthLocation: highlightWidthLocation,
        widthLocation: widthLocation,
        borderSolid: borderSolid,
        borderBottom: borderBottom,
        moveLeft: moveLeft
      };
    }
  }, {
    key: "populateButton",
    value: function populateButton() {
      var _this$props3 = this.props,
        contact = _this$props3.contact,
        requestType = _this$props3.requestType,
        intl = _this$props3.intl;
      this.button = {
        text: requestType === _constants.REQUEST_CONTACT_DETAIL ? intl.formatMessage({
          id: "fo_request_contactForm_See_Contacts_send"
        }) : intl.formatMessage({
          id: "fo_request_contactForm_send"
        }),
        length: 0,
        paddingRight: {},
        icon: requestType === _constants.REQUEST_CONTACT_DETAIL ? "address card outline" : null,
        ButtonComponent: requestType === _constants.REQUEST_CONTACT_DETAIL ? _contact.StyledPortalButtonContact : _contact.StyledPortalButton
      };
      var requestButton = false;
      if (contact && contact.requestButton) {
        requestButton = contact.requestButton;
      }
      if (contact && contact.requestButtonPrice) {
        requestButton = contact.requestButtonPrice;
      }
      if (requestButton) {
        this.button.text = intl.formatMessage({
          id: requestButton.labelKey
        });
        this.button.url = requestButton.formUrl;
        if (requestButton.type === _constants2.BUTTON_TYPE.RATE) {
          this.button.icon = "euro sign";
          this.button.ButtonComponent = _contact.StyledPortalButtonRate;
          this.button.paddingRight = {
            customPaddingright: "1rem"
          };
        }
      }
      this.button.length = this.button.text.length;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        contact = _this$props4.contact,
        highLight = _this$props4.highLight,
        isLoading = _this$props4.isLoading,
        nb = _this$props4.nb,
        intl = _this$props4.intl,
        requestType = _this$props4.requestType;
      var rules = this.displayRules();
      this.populateButton();
      var ButtonComponent = this.button.ButtonComponent;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, {
        stackable: true,
        columns: rules.isColumnPrice ? 4 : 3
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridRow, {
        columns: rules.isColumnPrice ? 4 : 3,
        style: {
          marginTop: highLight === true ? "20px" : "inherit",
          marginBottom: highLight === true && nb > 1 ? "20px" : "inherit",
          borderBottom: rules.borderBottom
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridColumn, {
        width: highLight === true ? rules.highlightWidthName : rules.widthName
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_contact.BlockName, {
        highLight: highLight
      }, highLight ? _contactsHelper["default"].cutTxt(contact.companyName, rules.isColumnPrice ? 16 : 18) : contact.companyName)), (contact.satisfactionCount || contact.reactivityInterval) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_contact.BlockStarsWrapper, {
        highLight: highLight
      }, /*#__PURE__*/_react["default"].createElement(_contact.BlockStars, {
        highLight: highLight
      }, contact.satisfactionCount && /*#__PURE__*/_react["default"].createElement(_contact.BlockQuality, {
        marginLeft: "2px"
      }, /*#__PURE__*/_react["default"].createElement(_supplierRating["default"], {
        wrap: true,
        supplier: contact,
        secondary: !highLight
      })), contact.reactivityInterval && /*#__PURE__*/_react["default"].createElement(_contact.BlockQuality, null, /*#__PURE__*/_react["default"].createElement(_supplierReactivity["default"], {
        supplier: contact,
        secondary: !highLight
      })))))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridColumn, {
        width: highLight === true ? rules.highlightWidthLocation : rules.widthLocation
      }, /*#__PURE__*/_react["default"].createElement(_contact.BlockLocalisation, {
        highLight: highLight
      }, " ", /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "map marker alternate"
      }), " ", contact.location)), contact.productPrice && /*#__PURE__*/_react["default"].createElement(_prices.BlockPrice, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridColumn, {
        width: 4
      }, " ", /*#__PURE__*/_react["default"].createElement(_contact.PriceWrapper, {
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
      })))))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.GridColumn, {
        floated: "left",
        width: 3
      }, !isLoading /* &&   && !contact.requestButtonPrice */ && /*#__PURE__*/_react["default"].createElement(ButtonComponent, {
        highLight: highLight,
        addPixel: this.button.length - 10 + (highLight ? 40 : 0),
        as: "button",
        contactDetail: requestType === _constants.REQUEST_CONTACT_DETAIL,
        moveLeft: rules.moveLeft,
        onClick: function onClick() {
          return _this2.button.url ? _this2.handleForward(_this2.button) : _this2.handleSubmit(contact.contactId);
        }
      }, this.button.icon && /*#__PURE__*/_react["default"].createElement(_contact.StyledIcon, (0, _extends2["default"])({
        name: this.button.icon
      }, this.button.paddingRight)), this.button.text), isLoading && /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        active: true,
        spinnerSize: 20
      }))));
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(ContactComponent));