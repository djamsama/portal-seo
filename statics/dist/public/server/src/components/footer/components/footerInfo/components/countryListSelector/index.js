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
var _reactCookie = require("react-cookie");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _contextComponent = require("../../../../../contextComponent");
var _simpleSelect = _interopRequireDefault(require("../../../../../select/simpleSelect"));
var _countryListSelector = require("./styles/countryListSelector");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable eqeqeq */
var WORLD = "8318";
var FRANCE = "76";
var CountryListSelector = /*#__PURE__*/function (_ContextComponent) {
  function CountryListSelector(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, CountryListSelector);
    _this = _callSuper(this, CountryListSelector, [props, context]);
    _this.changeCountry = _this.changeCountry.bind(_this);
    _this.getCountry = _this.getCountry.bind(_this);
    _this.changeCookie = _this.changeCookie.bind(_this);
    _this.state = {
      countrySelected: _this.getCountry()
    };
    return _this;
  }
  (0, _inherits2["default"])(CountryListSelector, _ContextComponent);
  return (0, _createClass2["default"])(CountryListSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.loadCountry) {
        this.props.loadCountry();
      }
    }
  }, {
    key: "changeCountry",
    value: function changeCountry(event) {
      this.changeCookie(event.target.value);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }, {
    key: "getCountry",
    value: function getCountry() {
      var cookies = this.props.cookies;
      var countryCookie = cookies.get("c");
      return countryCookie;
    }
  }, {
    key: "changeCookie",
    value: function changeCookie(country) {
      var cookies = this.props.cookies;
      cookies.set("c", country, {
        path: "/",
        domain: this.context.config.portal.domain
      });
    }
  }, {
    key: "render",
    value: function render() {
      var footerCountries = this.props.footerCountry && this.props.footerCountry.footerCountries ? this.props.footerCountry.footerCountries : [];
      return /*#__PURE__*/_react["default"].createElement(_countryListSelector.SelectCountryWrapper, null, footerCountries.length > 0 && /*#__PURE__*/_react["default"].createElement(_simpleSelect["default"], {
        value:
        // $FlowFixMe
        !this.state.countrySelected || this.state.countrySelected == WORLD ? FRANCE : this.state.countrySelected,
        options: footerCountries,
        onChange: this.changeCountry
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactCookie.withCookies)(CountryListSelector);
CountryListSelector.propTypes = {
  footerCountries: _propTypes["default"].arrayOf(_propTypes["default"].object)
};