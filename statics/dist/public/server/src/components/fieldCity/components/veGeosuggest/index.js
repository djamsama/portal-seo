"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactGeosuggest = _interopRequireDefault(require("react-geosuggest"));
var _reactIntl = require("react-intl");
var _veGeosuggest = require("./styles/veGeosuggest");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var VeGeoSuggest = /*#__PURE__*/function (_Component) {
  function VeGeoSuggest() {
    (0, _classCallCheck2["default"])(this, VeGeoSuggest);
    return _callSuper(this, VeGeoSuggest, arguments);
  }
  (0, _inherits2["default"])(VeGeoSuggest, _Component);
  return (0, _createClass2["default"])(VeGeoSuggest, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        _this$props$meta = _this$props.meta,
        touched = _this$props$meta.touched,
        error = _this$props$meta.error,
        input = _this$props.input,
        placeholder = _this$props.placeholder,
        placeDetailFields = _this$props.placeDetailFields,
        queryDelay = _this$props.queryDelay,
        minLength = _this$props.minLength,
        _onSuggestSelect = _this$props.onSuggestSelect,
        onSuggestNoResults = _this$props.onSuggestNoResults,
        types = _this$props.types,
        autoComplete = _this$props.autoComplete,
        initialValue = _this$props.initialValue;

      // Conflits entre les listeners de redux-form et react-geosuggest
      // du coup on nettoie onBlur et onFocus pour laisser react-geosuggest prendre le dessus
      var inputPropsCleanForReduxForm = _objectSpread({}, input);
      delete inputPropsCleanForReduxForm.onBlur;
      delete inputPropsCleanForReduxForm.onFocus;

      // eslint-disable-next-line react/destructuring-assignment
      var dataCy = this.props["data-cy"] ? this.props["data-cy"] : input.name;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_veGeosuggest.VeGeosuggestWrapper, {
        className: touched && error ? "has-error" : ""
      }, /*#__PURE__*/_react["default"].createElement(_reactGeosuggest["default"], (0, _extends2["default"])({
        onSuggestSelect: function onSuggestSelect(suggest) {
          _onSuggestSelect(suggest);
          if (!suggest) {
            return input.onChange(null);
          }
          return input.onChange(suggest.label);
        },
        onBlur: function onBlur() {
          // workaround pour passer le field à "touched"
          input.onBlur(null);
          _this.refGeoSuggest.selectSuggest();
        },
        initialValue: initialValue,
        onSuggestNoResults: onSuggestNoResults
      }, inputPropsCleanForReduxForm, {
        placeDetailFields: placeDetailFields,
        queryDelay: queryDelay,
        minLength: minLength,
        types: types,
        ref: function ref(r) {
          return _this.refGeoSuggest = r;
        },
        placeholder: placeholder,
        autoActivateFirstSuggest: true,
        autoComplete: autoComplete || "new-password",
        "data-cy": dataCy
      })), touched && error && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: error.id,
        values: error.values
      }, function (txt) {
        return /*#__PURE__*/_react["default"].createElement(_veGeosuggest.ErrorStyled, null, txt);
      }), /*#__PURE__*/_react["default"].createElement(_veGeosuggest.StyledIcon, {
        name: "map marker alternate",
        size: "large",
        onClick: function onClick() {
          return VeGeoSuggest.getPosition(input, _this.refGeoSuggest);
        }
      })));
    }
  }], [{
    key: "getPosition",
    value: function getPosition(input, refGeoSuggest) {
      var _window = window,
        google = _window.google;
      navigator.geolocation.getCurrentPosition(function (position) {
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          location: latLng
        }, function (results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            var city;
            results.some(function (res) {
              res.address_components.forEach(function (addressComponent) {
                addressComponent.types.forEach(function (element) {
                  switch (element) {
                    case "locality":
                      city = addressComponent.long_name;
                      break;
                    default:
                      break;
                  }
                });
              });
              if (city != null) {
                refGeoSuggest.update(city);
                refGeoSuggest.focus();
                refGeoSuggest.selectSuggest();
                return true;
              }
              return false;
            });
          }
        });
      });
    }
  }]);
}(_react.Component);
var ForwardRefBridge = function ForwardRefBridge(props, ref) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-props-no-spreading
    _react["default"].createElement(VeGeoSuggest, (0, _extends2["default"])({
      innerRef: ref
    }, props))
  );
};
// Permet de faire du forward de Ref tout en exposant un ref normal au public(nécessite un "functional component":ForwardRefBridge ).
// https://reactjs.org/docs/forwarding-refs.html
// $FlowFixMe
var _default = exports["default"] = /*#__PURE__*/_react["default"].forwardRef(ForwardRefBridge);