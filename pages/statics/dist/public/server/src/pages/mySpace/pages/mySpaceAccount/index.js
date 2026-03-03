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
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../components/contextComponent");
var _index = _interopRequireDefault(require("../../index"));
var _myspace = require("../../actions/myspace");
var _mySpace = require("../../styles/mySpace");
var _boxItemHeader = _interopRequireDefault(require("../../components/boxItemHeader"));
var _visitorAccountForm = _interopRequireDefault(require("./containers/visitorAccountForm"));
var _notificationsHelper = _interopRequireDefault(require("../../../../helpers/notificationsHelper"));
var _loading = _interopRequireDefault(require("../../../../components/loading"));
var _constants = require("../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceAccount = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceAccount(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceAccount);
    _this = _callSuper(this, MySpaceAccount, [props, context]);
    _this.notificationsHelper = new _notificationsHelper["default"](props.intl, "fo_myspace_account_lastNameModificationNotificationSuccess", "fo_myspace_account_modificationNotificationFailed");
    _this._handleLoad = _this._handleLoad.bind(_this);
    if (props.location.hash) {
      _this.state = {
        showPassword: true,
        googleMapsReady: false
      };
    } else {
      _this.state = {
        showPassword: false,
        googleMapsReady: false
      };
    }
    return _this;
  }
  (0, _inherits2["default"])(MySpaceAccount, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceAccount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.googleMapsReady) {
        var tagScript = document.getElementsByTagName("script")[0];
        var tagGoogleMapsScript = document.createElement("script");
        tagGoogleMapsScript.async = true;
        tagGoogleMapsScript.src = "https://maps.googleapis.com/maps/api/js?client=".concat(_constants.MAPS_GOOLGLE_API_CLIENT_ID, "&libraries=places");
        tagScript.parentNode.insertBefore(tagGoogleMapsScript, tagScript);
        tagGoogleMapsScript.addEventListener("load", this._handleLoad);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("load", this._handleLoad);
    }
  }, {
    key: "_handleLoad",
    value: function _handleLoad() {
      this.setState({
        googleMapsReady: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemRequest, null, /*#__PURE__*/_react["default"].createElement(_boxItemHeader["default"], {
        titleId: "fo_myspace_header_myProfileLabel",
        itemNumber: null
      }), /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemContent, null, this.state.googleMapsReady && /*#__PURE__*/_react["default"].createElement(_visitorAccountForm["default"], {
        initData: this.context.initData,
        portal: this.context.config.portal,
        onSubmit: function onSubmit(values) {
          return _this2.props.submit(values, _this2.context, _this2.notificationsHelper);
        },
        showPassword: this.state.showPassword
      }), !this.state.googleMapsReady && /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        active: true,
        spinnerSize: 50
      }))));
    }
  }]);
}(_contextComponent.ContextComponent); // On définit une action pour mettre à jour les champs redux-form.
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    submit: function submit(values, context, notificationsHelper) {
      return dispatch((0, _myspace.submitForm)(values, context, notificationsHelper));
    }
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(null, mapDispatchToProps)((0, _reactIntl.injectIntl)(MySpaceAccount));