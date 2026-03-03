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
var _forEach = _interopRequireDefault(require("lodash/forEach"));
var _contextComponent = require("../../../../contextComponent");
var _specificRouteHelper = _interopRequireDefault(require("../../../../../helpers/specificRouteHelper"));
var _link = require("../../../../link");
var _constants = require("../../../../../commons/constants");
var _DropDownCountry = require("../styles/DropDownCountry");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Langues disponibles. */
var AvailableLanguages = /*#__PURE__*/function (_ContextComponent) {
  function AvailableLanguages(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, AvailableLanguages);
    _this = _callSuper(this, AvailableLanguages, [props, context]);
    _this.state = {
      isHome: !(!context || context.config || context.config.route !== _constants.ROUTE_HOME)
    };
    _this.countryList = [];
    _this._displayed = false;
    _this._hydrateCountryList = _this._hydrateCountryList.bind(_this);
    _this._hydrateCountryList();
    return _this;
  }

  /**
   * Création de la liste des pays
   *
   * @param {string} key
   */
  (0, _inherits2["default"])(AvailableLanguages, _ContextComponent);
  return (0, _createClass2["default"])(AvailableLanguages, [{
    key: "_hydrateCountryList",
    value: function _hydrateCountryList() {
      var _this2 = this;
      var _this$context$initDat = this.context.initData,
        labels = _this$context$initDat.headerLinksLanguageLabels,
        urls = _this$context$initDat.headerLinksLanguageUrls;
      var route = this.context.config.route;
      var lang = this.props.lang;
      var isEncrypted = !_specificRouteHelper["default"].isNotEncrypted("DropDownCountry", route);

      // On remplit la countryList des pays
      (0, _forEach["default"])(urls, function (value, key) {
        if (lang && labels[key] && key !== lang.toUpperCase()) {
          _this2.countryList.push(/*#__PURE__*/_react["default"].createElement(_DropDownCountry.LiDropDownCountry, {
            key: "Language".concat(labels[key]),
            "data-cy": "liDropDownCountry_".concat(labels[key])
          }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
            to: value,
            encrypt: isEncrypted
          }, /*#__PURE__*/_react["default"].createElement(_DropDownCountry.TextLabel, null, /*#__PURE__*/_react["default"].createElement(_DropDownCountry.FlagIcon, {
            style: {
              backgroundPosition: _constants.LANGUAGES[key] || "0px 0px"
            }
          }), labels[key]))));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var doHidden = this._displayed; // Pour afficher les liens vers les langues sur la homepage dans le code source
      this._displayed = true;
      if (this.countryList.length > 0) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DropDownCountry.DivDropDownCountryContent, {
          style: this.state.isHome && !doHidden ? {
            display: "none"
          } : {}
        }, /*#__PURE__*/_react["default"].createElement(_DropDownCountry.UlDropDownCountry, null, " ", this.countryList)));
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = AvailableLanguages;
AvailableLanguages.defaultProps = {};