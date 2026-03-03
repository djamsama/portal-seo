"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _account = require("../styles/account");
var _index = _interopRequireDefault(require("../index"));
test("Mobile header account link test", function () {
  var account = shallow(/*#__PURE__*/_react["default"].createElement(_index["default"], null));
  /* Le Composant est constitué d'un wrapper lui même constitué d'un lien. */
  expect(account.find(_account.AccountLinkWrapper)).toHaveLength(1);
});