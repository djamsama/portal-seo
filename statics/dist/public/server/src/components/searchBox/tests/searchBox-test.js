"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
test("SearchBox", function () {
  // eslint-disable-next-line no-undef
  var searchBox = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    onLoadSearchBox: function onLoadSearchBox() {},
    onChangeSearchMode: function onChangeSearchMode() {},
    onSearchTextChange: function onSearchTextChange() {}
  }));
  expect(searchBox.find({
    type: "submit"
  }).exists()).toEqual(true);
  expect(searchBox.find({
    name: "searchTerms"
  }).exists()).toEqual(true);
  searchBox.find({
    name: "searchTerms"
  }).first().simulate("change", {
    target: {
      value: "test"
    }
  });
});