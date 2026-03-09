"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
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
var _react = _interopRequireDefault(require("react"));
var _withGoogleAnalytics = require("../../../../../hoc/withGoogleAnalytics");
var _fieldValidators = require("../../../../../components/fieldWithError/validators/fieldValidators");
var _contextComponent = require("../../../../../components/contextComponent");
var _exhibitFormOptimized = _interopRequireDefault(require("./components/exhibitFormOptimized"));
var _exhibitFormLegacy = _interopRequireDefault(require("./components/exhibitFormLegacy"));
var _constants = require("../../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
// Importez les nouveaux composants
// Types d'imports (juste pour s'assurer que le flow est content)
// $FlowFixMe
var ExhibitForm = /*#__PURE__*/function (_ContextComponent) {
  function ExhibitForm(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, ExhibitForm);
    _this = _callSuper(this, ExhibitForm, [props, context]);
    _this.state = {
      civility: 0,
      showConfirmation: false
    };
    _this.exhibitTextareaMaxLength = (0, _fieldValidators.maxLength)(_this.context.initData.nbMaxOfCharMsgFaField);
    _this.clickSubmit = _this.clickSubmit.bind(_this);
    _this.exhibitTextareaMaxLength = _this.exhibitTextareaMaxLength.bind(_this);
    _this.onChangePrefixCode = _this.onChangePrefixCode.bind(_this);
    _this.isFormError = false;
    _this.onChangeCivility = _this.onChangeCivility.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(ExhibitForm, _ContextComponent);
  return (0, _createClass2["default"])(ExhibitForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Initialisation du prefix téléphonique du visiteur
      var change = this.props.change;
      var phoneCode = this.context.initData.phoneCode;
      var rhLocale = this.context.config.portal.locale;
      var countryCode = this.context.initData.countryCode;
      if (phoneCode !== undefined) {
        change("phonePrefix", "+".concat(phoneCode));
      }
      if (countryCode !== undefined) {
        change("Country", countryCode);
      }
      if (rhLocale !== undefined) {
        var formattedLocale = rhLocale.charAt(0).toUpperCase() + rhLocale.slice(1);
        change("Language", formattedLocale);
      }
      if (false && !window.RevenueHero) {
        // Attendre que le DOM soit prêt

        var script = document.createElement("script");
        script.src = "https://assets.revenuehero.io/scheduler.min.js";
        script.type = "text/javascript";

        // On ajoute le script dynamiquement au DOM, ce qui lance son chargement
        document.body.appendChild(script);
      }
    }
  }, {
    key: "onChangeCivility",
    value: function onChangeCivility(val) {
      var change = this.props.change;
      change("civilityId", val);
      this.setState({
        civility: val
      });
    }
  }, {
    key: "onChangePrefixCode",
    value: function onChangePrefixCode(value) {
      var change = this.props.change;
      change("phonePrefix", value);
    }
  }, {
    key: "clickSubmit",
    value: function clickSubmit(values) {
      var phoneCode = this.context.initData.phoneCode;
      var countryCode = this.context.initData.countryCode;
      var rhLocale = this.context.config.portal.locale;
      var isOptimizationToFAFormEnabled = this.context.initData.isOptimizationToFAFormEnabled;
      var _this$props = this.props,
        onSubmit = _this$props.onSubmit,
        googleAnalytics = _this$props.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props.GOOGLE_ANALYTICS_EVENTS;

      // Ajout du préfixe si absent
      if (values && !values.phonePrefix) {
        values.phonePrefix = "+".concat(phoneCode);
      }

      // Nettoyage du phonePrefix
      if (values.phonePrefix) {
        values.phonePrefix = values.phonePrefix.replace(/ /g, "").replace(/-/g, "");
      }

      // Retirer le préfixe du phoneNumber
      if (values.phoneNumber && values.phonePrefix) {
        var prefix = values.phonePrefix;
        if (values.phoneNumber.startsWith(prefix)) {
          values.phoneNumber = values.phoneNumber.slice(prefix.length);
        }
      }
      if (googleAnalytics) {
        googleAnalytics.event({
          category: GOOGLE_ANALYTICS_EVENTS.FA_PAGE_CLICK_SEND_FORM.CATEGORY,
          action: GOOGLE_ANALYTICS_EVENTS.FA_PAGE_CLICK_SEND_FORM.ACTION,
          label: GOOGLE_ANALYTICS_EVENTS.FA_PAGE_CLICK_SEND_FORM.LABEL
        });
      }
      if (values.countryCode) {
        // eslint-disable-next-line no-param-reassign
        values.countryCode = countryCode;
      }
      if (values.rhLocale) {
        // eslint-disable-next-line no-param-reassign
        values.rhLocale = rhLocale.charAt(0).toUpperCase() + rhLocale.slice(1);
      }
      return onSubmit(values, this.context).then(function () {
        // Vérifie si RevenueHero est activé ET déjà chargé
        if (window.RevenueHero) {
          // Initialise une instance de RevenueHero avec les paramètres routerId et locale
          var hero = new window.RevenueHero({
            routerId: "1859",
            locale: rhLocale
          });

          // Récupère l'élément formulaire par son ID
          var formElement = document.getElementById("exhibitForm");

          // Vérifie que l'élément récupéré est bien un formulaire HTML
          if (formElement instanceof HTMLFormElement) {
            // Convertit les données du formulaire en un objet JavaScript et les stocke dans window.gformData
            window.gformData = Object.fromEntries(new FormData(formElement).entries());

            // Envoie les données à RevenueHero, puis ouvre la popin avec les données de session reçues
            hero.submit(window.gformData).then(function (sessionData) {
              hero.dialog.open(sessionData);
            });
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        handleSubmit = _this$props2.handleSubmit,
        submitting = _this$props2.submitting,
        postReturnSuccess = _this$props2.postReturnSuccess,
        error = _this$props2.error,
        exhibitFormSubmissionError = _this$props2.exhibitFormSubmissionError,
        exhibitFormError = _this$props2.exhibitFormError;
      var isOptimizationToFAFormEnabled = this.context.initData.isOptimizationToFAFormEnabled;
      this.isFormError = !!exhibitFormError;

      // Définir les props communes à passer aux enfants
      var commonProps = {
        intl: intl,
        handleSubmit: handleSubmit,
        submitting: submitting,
        postReturnSuccess: postReturnSuccess,
        error: error,
        exhibitFormSubmissionError: exhibitFormSubmissionError,
        exhibitFormError: exhibitFormError,
        exhibitTextareaMaxLength: this.exhibitTextareaMaxLength,
        onChangePrefixCode: this.onChangePrefixCode,
        clickSubmit: this.clickSubmit,
        isFormError: this.isFormError,
        context: this.context,
        // Passer les validateurs pour ExhibitFormLegacy
        validators: {
          required: _fieldValidators.required,
          email: _fieldValidators.email,
          maxLength255: _fieldValidators.maxLength255,
          requiredPhone: _fieldValidators.requiredPhone
        }
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isOptimizationToFAFormEnabled ? /*#__PURE__*/_react["default"].createElement(_exhibitFormOptimized["default"], commonProps) : /*#__PURE__*/_react["default"].createElement(_exhibitFormLegacy["default"], (0, _extends2["default"])({}, commonProps, {
        onChangeCivility: this.onChangeCivility,
        civilityState: this.state.civility
      })));
    }
  }]);
}(_contextComponent.ContextComponent); // $FlowFixMe
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(ExhibitForm);