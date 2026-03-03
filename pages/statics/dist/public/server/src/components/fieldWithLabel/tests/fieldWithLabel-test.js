"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _fieldWithLabel = require("../styles/fieldWithLabel");
var _index = _interopRequireDefault(require("../index"));
var _fieldWithError = _interopRequireDefault(require("../../fieldWithError"));
/* eslint-disable quotes */

test("test fieldWithLabel", function () {
  var fieldWithLabel = shallow(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    label: "test label",
    mandatory: "true"
  }));
  /* Le Composant est composé d'un label de class 'label' dont le texte est 'test label'. */
  expect(fieldWithLabel.find(_fieldWithLabel.FieldLabel)).toHaveLength(1);
  expect(fieldWithLabel.find('[className="label"]').text()).toEqual("test label");
  /* Et d'un input. */
  expect(fieldWithLabel.find(_fieldWithError["default"])).toHaveLength(1);
});
test("test fieldWithLabel empty label", function () {
  var fieldWithLabel = shallow(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    mandatory: "true"
  }));
  /* Le Composant est composé d'un label de class 'label' dont le texte est 'test label'. */
  expect(fieldWithLabel.find(_fieldWithLabel.FieldLabel)).toHaveLength(1);
  expect(fieldWithLabel.find('[className="label"]').text()).toBe("");
  /* Et d'un input. */
  expect(fieldWithLabel.find(_fieldWithError["default"])).toHaveLength(1);
});