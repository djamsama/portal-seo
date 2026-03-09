"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
test("SearchBox", function () {
  var searchBox = shallowWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    onChangeSearchMode: function onChangeSearchMode() {}
  }));
  console.log(searchBox.debug());
  console.log(searchBox.find({
    name: "searchTerms"
  }).debug());
});