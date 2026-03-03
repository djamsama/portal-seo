"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactHelmet = require("react-helmet");
var _index = _interopRequireDefault(require("../index"));
var didomiConfig = {
  FR: {
    notice: {
      position: "popup"
    }
  }
};
test("didomiConfig not null", function () {
  var didomiConfigWrapper = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    didomiConfig: didomiConfig
  }));
  var helmetElement = didomiConfigWrapper.find(_reactHelmet.Helmet);
  expect(helmetElement).toHaveLength(1);

  // vérification de l'élément script.
  var helmet = _reactHelmet.Helmet.peek();
  expect(helmet.scriptTags).toHaveLength(1);
  expect(helmet.scriptTags[0].type).toEqual("text/javascript");
  var scriptExpected = "window.didomiConfig = {\"FR\":{\"notice\":{\"position\":\"popup\"}}}";
  expect(helmet.scriptTags[0].innerHTML).toEqual(scriptExpected);
});
test("didomiConfig null", function () {
  var didomiConfigWrapper = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    didomiConfig: null
  }));
  var helmetElement = didomiConfigWrapper.find(_reactHelmet.Helmet);
  expect(helmetElement).toHaveLength(0);
});