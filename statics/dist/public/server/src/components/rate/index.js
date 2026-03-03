"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRating = _interopRequireDefault(require("react-rating"));
var _rate = require("./styles/rate");
// https://www.npmjs.com/package/react-rating
var RateComponent = function RateComponent(props) {
  var count = props.count,
    color1 = props.color1,
    color2 = props.color2,
    size = props.size,
    size2 = props.size2,
    value = props.value,
    emptySymbol = props.emptySymbol,
    fullSymbol = props.fullSymbol,
    edit = props.edit,
    start = props.start,
    step = props.step,
    fractions = props.fractions,
    onChange = props.onChange,
    className = props.className;
  var currentEmptySymbol = emptySymbol || /*#__PURE__*/_react["default"].createElement(_rate.StyledRate, {
    color: color1,
    size: "".concat(size.toString(), "px"),
    "data-cy": "ratingEmpty"
  }, "\u2605");
  var currentSize2 = size2 !== null ? "".concat(size2.toString(), "px") : "".concat(size.toString(), "px");
  var currentFullSymbol = emptySymbol ? fullSymbol : /*#__PURE__*/_react["default"].createElement(_rate.StyledRate, {
    color: color2,
    size: currentSize2,
    "data-cy": "ratingFull"
  }, "\u2605");
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_rate.RateWrapper, {
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_reactRating["default"], {
    step: step,
    start: start,
    stop: count,
    fractions: fractions,
    readonly: !edit,
    initialRating: value,
    emptySymbol: currentEmptySymbol,
    fullSymbol: currentFullSymbol,
    onChange: onChange
  })));
};
var _default = exports["default"] = RateComponent;
RateComponent.defaultProps = {
  fractions: 1,
  step: 1,
  start: 0,
  value: 0,
  count: 5,
  color1: "gray",
  color2: "#fc0",
  size: 24,
  size2: null,
  edit: false,
  className: "",
  onChange: function onChange() {}
};