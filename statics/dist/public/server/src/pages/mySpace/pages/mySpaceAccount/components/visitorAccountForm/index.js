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
var _veDesignSystem = require("ve-design-system");
var _reactGeosuggest = _interopRequireDefault(require("react-geosuggest"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _logger = _interopRequireDefault(require("../../../../../../components/logger"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _collapseVe = _interopRequireDefault(require("../../../../../../components/collapse/collapseVe"));
var _fieldWithError = _interopRequireDefault(require("../../../../../../components/fieldWithError"));
var _visitorAccountForm = require("./styles/visitorAccountForm");
var _visitorAccountFormHelper = require("./helpers/visitorAccountFormHelper");
var _privacyPage = _interopRequireDefault(require("./components/privacyPage"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable no-underscore-dangle */ /* eslint-disable react/sort-comp */
// Composant de presentation du formulaire
var VisitorAccountForm = /*#__PURE__*/function (_ContextComponent) {
  function VisitorAccountForm(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, VisitorAccountForm);
    _this = _callSuper(this, VisitorAccountForm, [props]);
    _this.onSuggestSelect = _this.onSuggestSelect.bind(_this);
    _this.toogleShowChangePwd = _this.toogleShowChangePwd.bind(_this);
    _this.clickSubmit = _this.clickSubmit.bind(_this);
    _this.state = {
      showChangePwd: props.showPassword
    };
    return _this;
  }
  (0, _inherits2["default"])(VisitorAccountForm, _ContextComponent);
  return (0, _createClass2["default"])(VisitorAccountForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        load = _this$props.load,
        initData = _this$props.initData;
      var _initData$visitorAcco = initData.visitorAccount,
        companyType = _initData$visitorAcco.companyType,
        sector = _initData$visitorAcco.sector,
        employeePosition = _initData$visitorAcco.employeePosition,
        city = _initData$visitorAcco.city,
        cityHidden = _initData$visitorAcco.cityHidden,
        company = _initData$visitorAcco.company,
        firstName = _initData$visitorAcco.firstName,
        lastName = _initData$visitorAcco.lastName,
        phone = _initData$visitorAcco.phone,
        website = _initData$visitorAcco.website,
        visitorType = _initData$visitorAcco.visitorType,
        lon = _initData$visitorAcco.lon,
        lat = _initData$visitorAcco.lat,
        email = _initData$visitorAcco.email,
        country = _initData$visitorAcco.country,
        administrativeArea = _initData$visitorAcco.administrativeArea,
        chinaVisitor = _initData$visitorAcco.chinaVisitor;
      var data = {
        companyType: companyType,
        sector: sector,
        employeePosition: employeePosition,
        city: city,
        cityHidden: cityHidden,
        company: company,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        website: website,
        visitorType: visitorType,
        lon: lon,
        lat: lat,
        email: email,
        country: country != undefined ? country : this.context.config.countryCookie,
        administrativeArea: administrativeArea,
        chinaVisitor: chinaVisitor
      };

      // Initialisation des données de l'utilisateur.
      load(data);
      if (city != null && !chinaVisitor) {
        // Initialisation du champs de la ville de l'utilisateur.
        this._geoSuggest.getRenderedComponent().update(city);
      }
    }
  }, {
    key: "_renderCityFieldZh",
    value: function _renderCityFieldZh() {
      var intl = this.props.intl;
      if (!this.props.initData.countryListWithDetails) {
        _logger["default"].error("CountryList for China", "La liste des pays pour le champ countryList est vide");
      }
      return [/*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        key: "cityFieldZh",
        name: "city",
        component: "input",
        className: "type-text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_city"
        })
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        key: "countryFieldZh",
        name: "country",
        component: "select",
        className: "type-text"
      }, this.props.initData.countryListWithDetails.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: item.id,
          value: item.id
        }, item.label);
      }))];
    }

    /**
     * Quand on clic sur une suggestion
     * @param  {Object} suggest The suggest
     */
  }, {
    key: "onSuggestSelect",
    value: function onSuggestSelect(suggest) {
      var setData = this.props.setData;
      if (suggest !== undefined) {
        var data = _visitorAccountFormHelper.VisitorAccountFormHelper.extractPlacesData(suggest.gmaps);
        setData("city", suggest.description);
        setData("cityHidden", data.city);
        setData("country", data.shortCountryName);
        setData("lat", suggest.location.lat);
        setData("lon", suggest.location.lng);
        setData("administrative-area", data.administrativeArea);
      }
    }
  }, {
    key: "clickSubmit",
    value: function clickSubmit() {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.handleSubmit();
    }

    /**
     * Toogle affichage change password
     */
  }, {
    key: "toogleShowChangePwd",
    value: function toogleShowChangePwd() {
      var showChangePwd = this.state.showChangePwd;
      this.setState({
        showChangePwd: !showChangePwd
      });
    }

    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        portal = _this$props2.portal,
        handleSubmit = _this$props2.handleSubmit,
        intl = _this$props2.intl,
        visitorTypeValue = _this$props2.visitorTypeValue,
        initData = _this$props2.initData;
      var businessCompanyTypes = initData.businessCompanyTypes,
        businessSectors = initData.businessSectors,
        employeePositions = initData.employeePositions;
      var showChangePwd = this.state.showChangePwd;
      // Données nécessaires à remonter depuis la recherche google.
      var requiredPlaceFields = ["address_component", "place_id", "geometry", "formatted_address"];
      var isPro = {
        di: true,
        ag: true
      };
      return /*#__PURE__*/_react["default"].createElement(_visitorAccountForm.VisitorAccountWrapper, null, /*#__PURE__*/_react["default"].createElement("form", {
        id: "account",
        onSubmit: handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-parent"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-col"
      }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_account_form_info_title"
      })), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "lastName",
        type: "text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_lastName"
        }),
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "firstName",
        type: "text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_firstName"
        }),
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "email",
        type: "email",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_email"
        }),
        className: "type-text"
      }), this.props.initData.visitorAccount.chinaVisitor == 1 ? this._renderCityFieldZh() : /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "city",
        type: "text"
        // eslint-disable-next-line no-return-assign
        ,
        ref: function ref(el) {
          return _this2._geoSuggest = el;
        },
        forwardRef: true,
        minLength: 2,
        queryDelay: 300,
        types: ["(cities)"],
        component: _reactGeosuggest["default"],
        placeDetailFields: requiredPlaceFields,
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_city"
        }),
        onSuggestSelect: this.onSuggestSelect,
        style: {
          suggests: {
            marginTop: "-25px"
          }
        }
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "cityHidden",
        component: "input",
        type: "hidden",
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "country",
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
        name: "administrative-area",
        component: "input",
        type: "hidden",
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "phone",
        type: "tel",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_phone"
        }),
        className: "type-text",
        autoComplete: "phone"
      }), /*#__PURE__*/_react["default"].createElement("p", {
        className: "password-edit"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        onKeyPress: this.toogleShowChangePwd,
        onClick: this.toogleShowChangePwd,
        id: "linkTooglefieldsPassword",
        className: "link",
        tabIndex: 0,
        role: "button"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_account_form_password_title"
      }))), /*#__PURE__*/_react["default"].createElement(_collapseVe["default"], {
        isOpened: showChangePwd
      }, /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "oldPassword",
        type: "password",
        className: "type-text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_old_password"
        }),
        autoComplete: "current-password"
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "password",
        type: "password",
        className: "type-text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_new_password"
        }),
        autoComplete: "new-password"
      }), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "confirmPassword",
        type: "password",
        className: "type-text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_password_confirm"
        }),
        autoComplete: "new-password"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-col"
      }, !isPro[portal.site.toLowerCase()] && /*#__PURE__*/_react["default"].createElement("div", {
        className: "labelVisitorContainer"
      }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("label", {
        className: "visitorType"
      }, intl.formatMessage({
        id: "foj_myspace_account_form_professional"
      })), /*#__PURE__*/_react["default"].createElement("label", {
        className: "labelVisitorType"
      }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "visitorType",
        component: "input",
        type: "radio",
        value: "Professionel",
        className: "type-radio"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_account_form_professional_yes"
      })), /*#__PURE__*/_react["default"].createElement("label", {
        className: "labelVisitorType"
      }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "visitorType",
        component: "input",
        type: "radio",
        value: "Particulier",
        className: "type-radio"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_account_form_professional_no"
      })))), /* portal.site.toLowerCase() === "di" */(isPro[portal.site.toLowerCase()] || visitorTypeValue === "Professionel") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "partialVisitorType portal-di",
        "data-show": "true"
      }, /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "company",
        type: "text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_company"
        }),
        className: "type-text"
      }), /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "companyType",
        component: "select",
        className: "type-text"
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: ""
      }, intl.formatMessage({
        id: "foj_myspace_account_form_companyType"
      })), /*#__PURE__*/_react["default"].createElement("option", {
        disabled: "disabled"
      }, "  "), businessCompanyTypes !== undefined && businessCompanyTypes.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: item.id,
          value: item.id
        }, intl.formatMessage({
          id: item.labelKey
        }));
      })), businessSectors && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "sector",
        component: "select",
        className: "type-text"
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: ""
      }, intl.formatMessage({
        id: "foj_myspace_account_form_sector"
      })), /*#__PURE__*/_react["default"].createElement("option", {
        disabled: "disabled"
      }, "  "), businessSectors !== undefined && businessSectors.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: item.id,
          value: item.id
        }, intl.formatMessage({
          id: item.labelKey
        }));
      })), employeePositions && /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "employeePosition",
        component: "select",
        className: "type-text"
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: ""
      }, intl.formatMessage({
        id: "foj_myspace_account_form_employeePosition"
      })), /*#__PURE__*/_react["default"].createElement("option", {
        disabled: "disabled"
      }, "  "), employeePositions !== undefined && employeePositions.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: item.id,
          value: item.id
        }, intl.formatMessage({
          id: item.labelKey
        }));
      })), /*#__PURE__*/_react["default"].createElement(_fieldWithError["default"], {
        name: "website",
        type: "text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_account_form_website"
        }),
        className: "type-text"
      })))), /*#__PURE__*/_react["default"].createElement("p", {
        className: "submit-button center"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "actions"
      }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        type: "submit",
        themeColor: "dark",
        onClick: this.clickSubmit
      }, intl.formatMessage({
        id: "foj_myspace_account_form_submit"
      })), /*#__PURE__*/_react["default"].createElement(_privacyPage["default"], null)));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = VisitorAccountForm;