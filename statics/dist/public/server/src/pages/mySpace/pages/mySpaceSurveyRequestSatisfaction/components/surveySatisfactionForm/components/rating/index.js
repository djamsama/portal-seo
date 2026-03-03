"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _rate = _interopRequireDefault(require("../../../../../../../../components/rate"));
var _context = require("../../../../../../../../context");
var _symbol = _interopRequireDefault(require("./components/symbol"));
var _rating = require("./styles/rating");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var RateComponent = function RateComponent(props) {
  var value = props.value,
    updateParentState = props.updateParentState;
  var _useState = (0, _react.useState)(value),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    rateValue = _useState2[0],
    setRateValue = _useState2[1];
  var context = (0, _react.useContext)(_context.AppContext);
  // eslint-disable-next-line react/destructuring-assignment
  var _ref = context && context.initData ? context.initData : {
      qualityResponseRating: null
    },
    qualityResponseRating = _ref.qualityResponseRating;
  var idTitle = qualityResponseRating && qualityResponseRating > 2 ? "foj_myspace_satisfaction_visitor_notation_ok" : "foj_myspace_satisfaction_visitor_notation_ko";
  var changeRating = function changeRating(newRate) {
    if (newRate !== rateValue) {
      if (updateParentState) {
        updateParentState(newRate);
      }
      setRateValue(newRate);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_rating.ResponseWrapper, null, /*#__PURE__*/_react["default"].createElement(_rating.TitleWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: idTitle
  })), /*#__PURE__*/_react["default"].createElement(_rate["default"], {
    edit: true,
    value: rateValue,
    className: "rating",
    fractions: 1,
    emptySymbol: [1, 2, 3, 4, 5].map(function (index) {
      return /*#__PURE__*/_react["default"].createElement(_symbol["default"], {
        color: "grey",
        index: index,
        txtDisplay: index === 5 || index === 1
      });
    }),
    fullSymbol: [1, 2, 3, 4, 5].map(function (index) {
      return /*#__PURE__*/_react["default"].createElement(_symbol["default"], {
        color: "#ffd700",
        index: index,
        txtDisplay: index === 5 || index === 1
      });
    }),
    onChange: function onChange(rate) {
      return changeRating(rate);
    }
  }), /*#__PURE__*/_react["default"].createElement(_rating.RatingTxtContent, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "foj_myspace_satisfaction_visitor_notation_change_txt"
  })));
};
var _default = exports["default"] = RateComponent;