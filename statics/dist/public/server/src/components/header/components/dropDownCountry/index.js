"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownCountry = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _contextComponent = require("../../../contextComponent");
var _popup = _interopRequireDefault(require("../../../popup"));
var _selectedLanguage = _interopRequireDefault(require("./components/selectedLanguage"));
var _availableLanguages = _interopRequireDefault(require("./components/availableLanguages"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DropDownCountry = exports.DropDownCountry = /*#__PURE__*/function (_ContextComponent) {
  function DropDownCountry(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, DropDownCountry);
    _this = _callSuper(this, DropDownCountry, [props, context]);
    _this.state = {
      isOpened: false
    };
    _this._openDropDown = _this._openDropDown.bind(_this);
    return _this;
  }

  /**
   * gestion de l'affichage de la liste des pays
   */
  (0, _inherits2["default"])(DropDownCountry, _ContextComponent);
  return (0, _createClass2["default"])(DropDownCountry, [{
    key: "_openDropDown",
    value: function _openDropDown() {
      this.setState({
        isOpened: !this.state.isOpened
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.props.selected;
      return /*#__PURE__*/_react["default"].createElement(_popup["default"], {
        basic: true,
        trigger: /*#__PURE__*/_react["default"].createElement(_selectedLanguage["default"], {
          lang: selected,
          onClick: this._openDropDown
        }),
        contentstyle: {
          width: "auto",
          background: "none",
          boxShadow: "none",
          padding: "0"
        }
      }, /*#__PURE__*/_react["default"].createElement(_availableLanguages["default"], {
        lang: selected
      }));
    }
  }]);
}(_contextComponent.ContextComponent);