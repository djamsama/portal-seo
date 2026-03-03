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
var _contextComponent = require("../../../contextComponent");
var _portalButton = _interopRequireDefault(require("../../../styles/portalButton"));
var _mySpaceLink = require("../../styles/mySpaceLink");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpacePopupContent = /*#__PURE__*/function (_ContextComponent) {
  function MySpacePopupContent(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpacePopupContent);
    _this = _callSuper(this, MySpacePopupContent, [props]);
    _this.closePopup = _this.closePopup.bind(_this);
    _this.onOpenLoginModal = _this.onOpenLoginModal.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(MySpacePopupContent, _ContextComponent);
  return (0, _createClass2["default"])(MySpacePopupContent, [{
    key: "closePopup",
    value: function closePopup() {
      var _this2 = this;
      window.setTimeout(function () {
        _this2.props.closePopup();
      }, 500);
    }
  }, {
    key: "onOpenLoginModal",
    value: function onOpenLoginModal(event) {
      if (!this.props.isAuthenticated) {
        this.props.openLoginModal(event.currentTarget.tagName === "A" ? event.currentTarget.href : this.context.initData.mySpaceNavigationLinks.requestUrl);
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        mySpaceNavigationLinks = _this$context$initDat.mySpaceNavigationLinks,
        footerLinksExhibitorAccount = _this$context$initDat.footerLinksExhibitorAccount;
      var portal = this.context.config.portal;
      var _this$props = this.props,
        openSignInModal = _this$props.openSignInModal,
        isAuthenticated = _this$props.isAuthenticated;
      return /*#__PURE__*/_react["default"].createElement(_mySpaceLink.PopupDivHeader, {
        onMouseLeave: this.closePopup
      }, !isAuthenticated === true && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_portalButton["default"], {
        onClick: this.onOpenLoginModal,
        contained: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_form_signinLabel"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "signup"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_firstVisit"
      }), " ", /*#__PURE__*/_react["default"].createElement("a", {
        onClick: openSignInModal
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_signUp"
      }))), /*#__PURE__*/_react["default"].createElement("hr", null)), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceHeaderIcon, {
        className: "fa fa-user"
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: mySpaceNavigationLinks.accountUrl,
        onClick: this.onOpenLoginModal
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_header_myProfileLabel"
      }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceHeaderIcon, {
        className: "fa fa-envelope"
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: mySpaceNavigationLinks.subscriptionUrl,
        onClick: this.onOpenLoginModal
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_header_mySubscriptionsLabel"
      }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceHeaderIcon, {
        className: "fa fa-star"
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: mySpaceNavigationLinks.bookmarkUrl,
        onClick: this.onOpenLoginModal
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_header_myBookmarksLabel"
      }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceHeaderIcon, {
        className: "fa fa-list"
      }), /*#__PURE__*/_react["default"].createElement("a", {
        href: mySpaceNavigationLinks.requestUrl,
        onClick: this.onOpenLoginModal
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_header_myRequestsLabel"
      })))), /*#__PURE__*/_react["default"].createElement("hr", null), !isAuthenticated === true && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "links"
      }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_accessManufacturers"
      }), " ", /*#__PURE__*/_react["default"].createElement("a", {
        href: footerLinksExhibitorAccount
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Fo_Layout_Footer_ExhibitorAccount"
      }))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_accessDistributor"
      }), " ", /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://secure.virtual-expo.com/distributor-backoffice/views/home.xhtml?lang=".concat(portal.locale)
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_accessDistributorLink"
      }))))), /*#__PURE__*/_react["default"].createElement(_mySpaceLink.PLogout, null, isAuthenticated === true && /*#__PURE__*/_react["default"].createElement(_mySpaceLink.SpanLogout, {
        onClick: this.props.logOut
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_header_logoutLabel"
      }), /*#__PURE__*/_react["default"].createElement(_mySpaceLink.MySpaceHeaderSpanIconSmallCross, null))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = MySpacePopupContent;
MySpacePopupContent.propTypes = {
  /**
   * callback pour se deconnecter de myspace
   */
  logOut: _propTypes["default"].func,
  /**
   *  Fermeture de la popup
   */
  closePopup: _propTypes["default"].func
};