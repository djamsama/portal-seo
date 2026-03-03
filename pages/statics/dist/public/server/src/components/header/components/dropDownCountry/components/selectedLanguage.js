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
var _keys = _interopRequireDefault(require("lodash/keys"));
var _contextComponent = require("../../../../contextComponent");
var _constants = require("../../../../../commons/constants");
var _DropDownCountry = require("../styles/DropDownCountry");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Langue sélectionnée. */
var SelectedLanguage = /*#__PURE__*/function (_ContextComponent) {
  function SelectedLanguage(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, SelectedLanguage);
    _this = _callSuper(this, SelectedLanguage, [props, state]);
    _this.state = {
      isOpened: false
    };
    _this._init();
    return _this;
  }

  /**
   * Initialisation des drapeaux: récupération du pays sélectionné
   */
  (0, _inherits2["default"])(SelectedLanguage, _ContextComponent);
  return (0, _createClass2["default"])(SelectedLanguage, [{
    key: "_init",
    value: function _init() {
      var lang = this.props.lang;
      this._selected = "EN";
      var langkeys = (0, _keys["default"])(_constants.LANGUAGES);
      if (lang && langkeys.indexOf(lang.toUpperCase()) !== -1) {
        this._selected = lang && lang.toUpperCase() ? lang.toUpperCase() : "EN";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var onClick = this.props.onClick;
      var open = this.props.isOpened !== null ? this.props.isOpened : this.state.isOpened;
      var labels = this.context.initData.headerLinksLanguageLabels;
      return /*#__PURE__*/_react["default"].createElement(_DropDownCountry.ResponsiveSpan, {
        onClick: onClick,
        style: {
          paddingBottom: "5px",
          cursor: "pointer"
        },
        "data-cy": "language-selector"
      }, /*#__PURE__*/_react["default"].createElement(_DropDownCountry.FlagIcon, {
        style: {
          backgroundPosition: _constants.LANGUAGES[this._selected] || "0px 0px"
        }
      }), /*#__PURE__*/_react["default"].createElement("a", null, labels[this._selected]), /*#__PURE__*/_react["default"].createElement("i", {
        className: open ? "fa fa-caret-up" : "fa fa-caret-down"
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = SelectedLanguage;
SelectedLanguage.defaultProps = {};