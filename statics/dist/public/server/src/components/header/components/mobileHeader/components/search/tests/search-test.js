"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _search = require("../styles/search");
var _index = _interopRequireDefault(require("../index"));
test("Mobile header search link test", function () {
  var search = shallow(/*#__PURE__*/_react["default"].createElement(_index["default"], null));
  /* Le Composant est constitué d'un lien et d'un menu. */
  var linkWrapper = search.find(_search.SearchLinkWrapper);
  expect(linkWrapper).toHaveLength(1);
  expect(linkWrapper.find(_search.SearchLink)).toHaveLength(1);
  var menuWrapper = search.find(_search.SearchWrapper);
  expect(menuWrapper).toHaveLength(1);
});