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
var _reduxForm = require("redux-form");
var _semanticUiReact = require("semantic-ui-react");
var _fieldWithLabel = _interopRequireDefault(require("../fieldWithLabel"));
var _fieldValidators = require("../fieldWithError/validators/fieldValidators");
var _veGeosuggest = _interopRequireDefault(require("./components/veGeosuggest"));
var _googleApiLoader = require("../../helpers/googleApiLoader");
var _index = require("../fieldSelect/index");
var _fieldCountryChina = require("./components/countryChina/styles/fieldCountryChina");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FieldCity = /*#__PURE__*/function (_Component) {
  // Pour prévenir les setState sur les unmounted Component

  function FieldCity(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, FieldCity);
    _this = _callSuper(this, FieldCity, [props]);
    _this._isMounted = false;
    _this.state = {
      hasAGoogleApiLoaded: false
    };
    return _this;
  }
  (0, _inherits2["default"])(FieldCity, _Component);
  return (0, _createClass2["default"])(FieldCity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this._isMounted = true;
      // loadGoogleApi with Helper
      (0, _googleApiLoader.LoadGoogleApi)().then(function () {
        if (_this2._isMounted) {
          _this2.setState({
            hasAGoogleApiLoaded: true
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var hasAGoogleApiLoaded = this.state.hasAGoogleApiLoaded;

      // Données nécessaires à remonter depuis la recherche google.
      var requiredPlaceFields = ["address_component", "place_id", "geometry", "formatted_address"];
      var _this$props = this.props,
        name = _this$props.name,
        onSuggestSelect = _this$props.onSuggestSelect,
        onSuggestNoResults = _this$props.onSuggestNoResults,
        label = _this$props.label,
        countryLabel = _this$props.countryLabel,
        innerRef = _this$props.innerRef,
        chinaBuyer = _this$props.chinaBuyer,
        initialValue = _this$props.initialValue,
        countryListWithDetails = _this$props.countryListWithDetails,
        mandatory = _this$props.mandatory,
        mandatoryWithoutValidation = _this$props.mandatoryWithoutValidation,
        validateMinLength = _this$props.validateMinLength,
        types = _this$props.types,
        placeHolder = _this$props.placeHolder,
        _this$props$validate = _this$props.validate,
        validate = _this$props$validate === void 0 ? [] : _this$props$validate;
      var correctedlabel = label;
      var correctedCountryLabel = countryLabel;
      if (mandatory || mandatoryWithoutValidation) {
        correctedlabel += " *";
        if (countryLabel) {
          correctedCountryLabel += " *";
        }
      }

      // Si le champ est obligatoire, ajoute une validation requise
      if (mandatory) {
        validate.push(_fieldValidators.required);
        if (countryLabel) {
          validate.push(_fieldValidators.required);
        }
      }
      if (validateMinLength) {
        validate.push(_fieldValidators.minLength2);
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, chinaBuyer === true && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Form.Field, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        name: name,
        component: "input",
        withFieldGroup: true,
        className: "type-text",
        label: label,
        placeholder: placeHolder,
        mandatory: true,
        "data-cy": name
      })), /*#__PURE__*/_react["default"].createElement(_fieldCountryChina.FieldCountryChina, null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "country",
        onChange: onSuggestSelect,
        clearable: true,
        label: correctedCountryLabel,
        component: _index.SelectField,
        validate: validate,
        options: countryListWithDetails.map(function (item) {
          return {
            key: item.id || item.value,
            text: item.label,
            value: item.id || item.value
          };
        }),
        "data-cy": "country"
      }))), chinaBuyer === false && /*#__PURE__*/_react["default"].createElement("div", {
        className: "wrapper-geosuggest field-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "label"
      }, correctedlabel), hasAGoogleApiLoaded === false && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer.Dimmable, null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        component: "input",
        type: "text",
        name: name,
        "data-cy": name
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Dimmer, {
        active: true,
        inverted: true
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Loader, null))), hasAGoogleApiLoaded === true && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        type: "text",
        label: label,
        component: _veGeosuggest["default"],
        name: name,
        placeholder: placeHolder,
        autocomplete: "new-password",
        required: true,
        placeDetailFields: requiredPlaceFields,
        validate: validate,
        forwardRef: true,
        types: types,
        minLength: 2,
        queryDelay: 300,
        ref: innerRef,
        onSuggestSelect: onSuggestSelect,
        onSuggestNoResults: onSuggestNoResults,
        initialValue: initialValue
      })), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "cityHidden",
        component: "input",
        type: "hidden",
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "countryIsoCode",
        component: "input",
        type: "hidden",
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "lat",
        component: "input",
        type: "hidden",
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "lon",
        component: "input",
        type: "hidden",
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "areaIsoCode",
        component: "input",
        type: "hidden",
        className: "type-text"
      })));
    }
  }]);
}(_react.Component);
FieldCity.defaultProps = {
  chinaBuyer: false,
  countryLabel: undefined,
  validateMinLength: true,
  countryListWithDetails: [],
  mandatoryWithoutValidation: false
};
var ForwardRefBridge = function ForwardRefBridge(props, ref) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-props-no-spreading
    _react["default"].createElement(FieldCity, (0, _extends2["default"])({
      innerRef: ref
    }, props))
  );
};
// Permet de faire du forward de Ref tout en exposant un ref normal au public(nécessite un "functional component":ForwardRefBridge ).
// https://reactjs.org/docs/forwarding-refs.html
// $FlowFixMe
var _default = exports["default"] = /*#__PURE__*/_react["default"].forwardRef(ForwardRefBridge);