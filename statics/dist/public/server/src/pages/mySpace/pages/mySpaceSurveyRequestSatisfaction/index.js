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
var _contextComponent = require("../../../../components/contextComponent");
var _ = _interopRequireDefault(require("../.."));
var _surveySatisfactionFormContainer = _interopRequireDefault(require("./containers/surveySatisfactionFormContainer"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant parent du tunnel de conversion.
 */
var MySpaceSurveyRequest = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceSurveyRequest(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceSurveyRequest);
    _this = _callSuper(this, MySpaceSurveyRequest, [props]);
    var match = props.match;
    var _ref = match ? match.params : {},
      leadContext = _ref.leadContext;
    _this.state = {
      leadContext: leadContext
    };
    return _this;
  }
  (0, _inherits2["default"])(MySpaceSurveyRequest, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceSurveyRequest, [{
    key: "render",
    value: function render() {
      var leadContext = this.state.leadContext;
      return /*#__PURE__*/_react["default"].createElement(_["default"], null, /*#__PURE__*/_react["default"].createElement(_surveySatisfactionFormContainer["default"], {
        leadContext: leadContext
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = MySpaceSurveyRequest;