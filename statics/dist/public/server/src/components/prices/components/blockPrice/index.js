"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _blockPrice = require("./styles/blockPrice");
var mapStateToProps = function mapStateToProps(_ref) {
  var prices = _ref.prices;
  return {
    isPricesAvailable: prices ? prices.isPricesAvailable : true,
    isPricesAvailableLoaded: prices ? prices.isPricesAvailableLoaded : true
  };
};
var BlockPrice = function BlockPrice(props) {
  var children = props.children,
    isPricesAvailable = props.isPricesAvailable,
    isPricesAvailableLoaded = props.isPricesAvailableLoaded,
    isForceDisplay = props.isForceDisplay,
    placeHolder = props.placeHolder,
    waitLoad = props.waitLoad;
  if (!isPricesAvailable && !isForceDisplay ||
  // isPricesAvailable est false (geoloc ...) et on ne force pas l'affichage
  isPricesAvailable && !isPricesAvailableLoaded && waitLoad && !isForceDisplay // on attends d'avoir isPricesAvailableLoaded quand on ne force pas l'affichage
  ) {
    if (placeHolder) {
      return /*#__PURE__*/_react["default"].createElement(_blockPrice.PlaceHolder, {
        height: placeHolder
      });
    }
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps)(BlockPrice);