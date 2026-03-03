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
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../../../../components/fieldWithLabel"));
var _reactGeosuggestHelper = require("../../../../../../../../helpers/reactGeosuggestHelper");
var _fieldValidators = require("../../../../../../../../components/fieldWithError/validators/fieldValidators");
var _fieldCity = _interopRequireDefault(require("../../../../../../../../components/fieldCity"));
var _fieldWithError = _interopRequireDefault(require("../../../../../../../../components/fieldWithError"));
var _notificationsHelper = _interopRequireDefault(require("../../../../../../../../helpers/notificationsHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var AddressForm = /*#__PURE__*/function (_ContextComponent) {
  function AddressForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AddressForm);
    _this = _callSuper(this, AddressForm, [props]);
    _this.onSuggestSelect = _this.onSuggestSelect.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(AddressForm, _ContextComponent);
  return (0, _createClass2["default"])(AddressForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var city = this.props.city;
      if (city && this._geoSuggest) {
        this._geoSuggest.getRenderedComponent().update(city);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var city = this.props.city;
      if (prevProps.city !== city && this._geoSuggest && this._geoSuggest.getRenderedComponent) {
        this._geoSuggest.getRenderedComponent().update(city);
      }
    }

    /**
     * Quand on clic sur une suggestion
     * @param  {Object} suggest The suggest
     */
  }, {
    key: "onSuggestSelect",
    value: function onSuggestSelect(suggest) {
      var _this$props = this.props,
        setData = _this$props.setData,
        prefix = _this$props.prefix,
        leadsQuoteInformations = _this$props.leadsQuoteInformations,
        setPhoneCode = _this$props.setPhoneCode,
        intl = _this$props.intl;
      var notificationsHelper = new _notificationsHelper["default"](intl, "", "global_error_technical");
      var chinaBuyer = leadsQuoteInformations != null ? leadsQuoteInformations.chinaBuyer : false;
      if (chinaBuyer) {
        var countryIdFromData = suggest;
        if (countryIdFromData) {
          setPhoneCode(countryIdFromData, "".concat(prefix ? "".concat(prefix, ".") : "", "phoneCode"), this.context, notificationsHelper);
        }
      } else if (suggest !== undefined) {
        var data = _reactGeosuggestHelper.ReactGeosuggestHelper.extractPlacesData(suggest.gmaps);
        setData("".concat(prefix ? "".concat(prefix, ".") : "", "city"), suggest.description);
        setData("".concat(prefix ? "".concat(prefix, ".") : "", "cityHidden"), data.city);
        setData("".concat(prefix ? "".concat(prefix, ".") : "", "countryIsoCode"), data.shortCountryName);
        setData("".concat(prefix ? "".concat(prefix, ".") : "", "lat"), suggest.location.lat);
        setData("".concat(prefix ? "".concat(prefix, ".") : "", "lon"), suggest.location.lng);
        setData("".concat(prefix ? "".concat(prefix, ".") : "", "areaIsoCode"), data.administrativeArea);
        setPhoneCode(data.shortCountryName, "".concat(prefix ? "".concat(prefix, ".") : "", "phoneCode"), this.context, notificationsHelper);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        label = _this$props2.label,
        city = _this$props2.city,
        leadsQuoteInformations = _this$props2.leadsQuoteInformations,
        prefix = _this$props2.prefix,
        intl = _this$props2.intl;
      var _this$context$initDat = this.context.initData.countryListWithDetails,
        countryListWithDetails = _this$context$initDat === void 0 ? [] : _this$context$initDat;
      var site = this.context.initData.portalBean.site;
      var chinaBuyer = leadsQuoteInformations != null ? leadsQuoteInformations.chinaBuyer : false;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: prefix ? "".concat(prefix, ".lastName") : "lastName",
        name: "lastName",
        type: "text",
        label: label.lastName,
        withFieldGroup: true,
        className: "type-text",
        mandatory: true
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: prefix ? "".concat(prefix, ".firstName") : "firstName",
        name: "firstName",
        type: "text",
        label: label.firstName,
        withFieldGroup: true,
        className: "type-text",
        mandatory: true
      })), /*#__PURE__*/_react["default"].createElement("fieldset", null, site && site !== "AE" && site !== "ME" && site !== "AR" && leadsQuoteInformations && leadsQuoteInformations.professional && /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: prefix ? "".concat(prefix, ".company") : "company",
        name: "company",
        type: "text",
        label: label.company,
        withFieldGroup: true,
        className: "type-text",
        mandatory: true
      }), leadsQuoteInformations && leadsQuoteInformations.europeanExchange === true && prefix !== "deliveryAddress" && /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: prefix ? "".concat(prefix, ".vatintracomNumber") : "vatintracomNumber",
        name: "vatintracomNumber",
        type: "text",
        label: label.tva,
        withFieldGroup: true,
        className: "type-text"
      })), /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: prefix ? "".concat(prefix, ".address1") : "address1",
        name: "address1",
        type: "text",
        label: label.adress,
        withFieldGroup: true,
        className: "type-text",
        mandatory: true
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: prefix ? "".concat(prefix, ".address2") : "address2",
        name: "address2",
        type: "text",
        label: label.additionalAdress,
        withFieldGroup: true,
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        id: prefix ? "".concat(prefix, ".postalCode") : "postalCode",
        name: "postalCode",
        type: "text",
        label: label.zipCode,
        withFieldGroup: true,
        className: "type-text",
        validate: [_fieldValidators.required, _fieldValidators.alphaNumNoSpace],
        mandatory: true
      }), /*#__PURE__*/_react["default"].createElement(_fieldCity["default"], {
        id: prefix ? "".concat(prefix, ".city") : "city",
        label: label.city,
        countryLabel: label.country,
        name: "city",
        onSuggestSelect: this.onSuggestSelect,
        initialValue: city,
        ref: function ref(el) {
          return _this2._geoSuggest = el;
        },
        chinaBuyer: chinaBuyer,
        countryListWithDetails: countryListWithDetails,
        types: ["(cities)"],
        mandatory: true,
        placeHolder: intl.formatMessage({
          id: "foj_request_form_city_placeholder"
        })
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "field-group"
      }, /*#__PURE__*/_react["default"].createElement("label", null, label.phone, "*"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "phone-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "phone-code"
      }, /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        withWrapper: false,
        type: "text",
        name: "phoneCode",
        component: "input",
        className: "type-text phone-code",
        validate: [_fieldValidators.required],
        autocomplete: "tel-country-code"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "phone-number"
      }, /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        withWrapper: false,
        type: "text",
        name: "phoneNumber",
        component: "input",
        className: "type-text phone-number",
        validate: [_fieldValidators.required],
        autocomplete: "tel"
      }))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(AddressForm);