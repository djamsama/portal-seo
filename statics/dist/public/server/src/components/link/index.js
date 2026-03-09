"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VeLink = exports.ResponsiveVeLink = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _encryptHelper = _interopRequireDefault(require("../../helpers/encryptHelper"));
var _contextComponent = require("../contextComponent");
var _responsive = _interopRequireDefault(require("../styles/responsive"));
var _withTracking = require("../../hoc/withTracking");
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DefaultLink = _styledComponents["default"].a.withConfig({
  componentId: "sc-1efpob3-0"
})(["cursor:pointer;"]);
var VeLinkClass = /*#__PURE__*/function (_ContextComponent) {
  function VeLinkClass(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, VeLinkClass);
    _this = _callSuper(this, VeLinkClass, [props, context]);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.port = "";
    _this.url = "";
    _this.state = {
      clicked: false,
      unfinishedProcessTracks: []
    };
    if (typeof window !== "undefined" && !(0, _isEmpty["default"])(window.__config__) && (0, _isString["default"])(window.__config__.port)) {
      _this.port = ":".concat(window.__config__.port);
    }
    return _this;
  }
  (0, _inherits2["default"])(VeLinkClass, _ContextComponent);
  return (0, _createClass2["default"])(VeLinkClass, [{
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props = this.props,
        doTracking = _this$props.doTracking,
        track = _this$props.track,
        viewedPageId = _this$props.viewedPageId,
        onClick = _this$props.onClick,
        trackingDisabled = _this$props.trackingDisabled;
      if (track && doTracking && trackingDisabled !== true) {
        e.nativeEvent.stopImmediatePropagation();
        doTracking(track.addEventType("click"), viewedPageId);
      }
      if (onClick) {
        // eslint-disable-next-line prefer-rest-params
        onClick.apply(void 0, arguments);
      }
      if (this.props.external) {
        var to = this.props.encrypt ? _encryptHelper["default"].decrypt(this.url) : this.url;
        window.open(to);
        // On stoppe la propagation de l'événement
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      } else {
        this.setState({
          clicked: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.url = this.props.to;
      var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        doTracking = _this$props2.doTracking,
        track = _this$props2.track,
        className = _this$props2.className;
      if (typeof this.port !== "undefined" && this.url !== null && this.url !== undefined) {
        var regex = new RegExp("(?:[^/])(/)(?!/)");
        var match = regex.exec(this.url);
        var index = match && match.index || this.url.length;
        this.url = this.url.substr(0, index + 1) + this.port + this.url.substr(index + 1);
      }
      if (typeof this.url === "undefined" || this.url == null) {
        var _currentClassName = disabled ? "disabled" : "";
        if (className) {
          _currentClassName += className;
        }
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: _currentClassName
        }, this.props.children);
      }
      var dynamicsProps = {
        href: this.url
      };
      var propsCleanned = _objectSpread({}, this.props);
      if (typeof this.props.encrypt === "undefined" || this.props.encrypt === false) {
        delete propsCleanned.to;
      }
      if (typeof this.props.displayHref !== "undefined" && this.props.displayHref === false) {
        delete propsCleanned.to;
      }
      if (this.props.encrypt) {
        // Le lien est crypté
        delete propsCleanned.to;
        if (!this.state.clicked) {
          // ... et n'a pas encore été cliqué
          this.url = _encryptHelper["default"].encrypt(this.url);
          dynamicsProps = {
            onClick: this.handleClick,
            to: this.url
          };
        } else {
          // ... et a été cliqué
          this.url = _encryptHelper["default"].decrypt(this.url);
          dynamicsProps = {
            href: this.url,
            onClick: this.handleClick
          };
          delete propsCleanned.to;
        }
      }
      if (track && doTracking) {
        dynamicsProps.onClick = this.handleClick;
      }
      if (this.props.external) {
        dynamicsProps.target = "_blank";
      }

      // Comp est ...
      var Comp = this.props.component ? this.props.component //  this.props.component s'il est defini
      : DefaultLink; //  ... sinon on prend DefaultLink

      var currentClassName = disabled ? "disabled" : "";
      if (className) {
        currentClassName += currentClassName;
      }
      return /*#__PURE__*/_react["default"].createElement(Comp, (0, _extends2["default"])({
        className: currentClassName
      }, propsCleanned, dynamicsProps, {
        "data-cy": "".concat(this.props.dataCy ? this.props.dataCy : "veLink")
      }), this.props.children);
    }
  }]);
}(_contextComponent.ContextComponent);
var VeLink = exports.VeLink = (0, _withTracking.WithTracking)(VeLinkClass);
var media = _responsive["default"].media();
var ResponsiveVeLink = exports.ResponsiveVeLink = (0, _styledComponents["default"])(VeLinkClass).withConfig({
  componentId: "sc-1efpob3-1"
})(["&&&{", "}"], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: none;\n"]))));
VeLink.propTypes = {
  /**
   *  url du lien
   */ // $FlowFixMe
  to: _propTypes["default"].string,
  /**
   *  Est ce que le lien est crypté
   */
  encrypt: _propTypes["default"].bool,
  /**
   *  le lien s'ouvre dans une autre page si external = true
   */
  external: _propTypes["default"].bool,
  /**
   *  Est ce que le lien est stylé
   */
  styledLink: _propTypes["default"].bool,
  /**
   *  React component
   */
  component: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].object]),
  /**
   * Disabled
   */
  disabled: _propTypes["default"].bool,
  /**
   * Le href est-il affiché?
   */
  displayHref: _propTypes["default"].bool,
  /**
   * La méthode appelée quand l'utilisateur clique sur le lien.
   */
  onClick: _propTypes["default"].func
};
VeLink.defaultProps = {
  onClick: function onClick() {}
};