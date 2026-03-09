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
var _definitionsList = require("./styles/definitionsList");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SimpleDefinitionsList = /*#__PURE__*/function (_React$Component) {
  function SimpleDefinitionsList(props) {
    (0, _classCallCheck2["default"])(this, SimpleDefinitionsList);
    return _callSuper(this, SimpleDefinitionsList, [props]);
  }
  (0, _inherits2["default"])(SimpleDefinitionsList, _React$Component);
  return (0, _createClass2["default"])(SimpleDefinitionsList, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, content.title && /*#__PURE__*/_react["default"].createElement(_definitionsList.TitleDiv, null, content.title), /*#__PURE__*/_react["default"].createElement(_definitionsList.DLContainer, null, /*#__PURE__*/_react["default"].createElement(_definitionsList.StyledDL, null, content && content.sections && content.sections.map(function (section) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: "tableContent" + section.title
        }, /*#__PURE__*/_react["default"].createElement(_definitionsList.StyledDT, null, section.title), /*#__PURE__*/_react["default"].createElement(_definitionsList.StyledDD, null, section.content));
      }))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = SimpleDefinitionsList;