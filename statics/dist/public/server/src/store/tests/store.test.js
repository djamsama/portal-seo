"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _index = require("../index");
test("store", function () {
  var initState = {
    bookmark: "bookmark"
  };
  var store = (0, _index.storeFactory)(null, {
    bookmark: "bookmark"
  });
  expect((0, _typeof2["default"])(_index.storeFactory)).toEqual("function");
  expect(store.getState().bookmark).toEqual(initState.bookmark);
});