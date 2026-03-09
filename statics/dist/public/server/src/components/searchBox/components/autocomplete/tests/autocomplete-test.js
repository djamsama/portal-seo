"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _context = require("../../../../../context");
var _mockContext = require("../../../../../../tools/utils-test/mockContext");
/* eslint-disable no-undef */

test("Autocomplete", function () {
  var items = [{
    label: "test",
    type: "kwref"
  }, {
    label: "test2"
  }, {
    label: "test3",
    type: "kwref"
  }, {
    label: "test4",
    type: "kwref"
  }];
  var clickCallback = function clickCallback() {};
  var autocomplete = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    items: items,
    clickCallback: clickCallback
  })));
  expect(autocomplete.find({
    value: "test4"
  }).last().text()).toBe("test4");
  expect(autocomplete.find({
    value: "test2"
  }).last()).toHaveLength(0);
  expect(autocomplete.find({
    "data-cy": "autocompleteLastSearch"
  })).toHaveLength(0);
  autocomplete.find({
    value: "test4"
  }).last().simulate("click");
  expect(autocomplete.find({
    "data-cy": "autocompleteLastSearch"
  }).length).toBeGreaterThan(0);
  var mockStorage = {
    isFilled: true,
    Detector: {
      item: {
        label: "<span class='removeBold'>De</span>tector",
        type: "kwref"
      },
      sanityzedLabel: "Detector",
      url: "search.php?type=products&q=Detector"
    },
    "Detection camera": {
      item: {
        label: "<span class='removeBold'>Dete</span>ction camera",
        type: "kwref"
      },
      sanityzedLabel: "Detection camera",
      url: "search.php?type=products&q=Detection camera"
    }
  };
  window.localStorage.setItem("search_en", JSON.stringify(mockStorage));
  var autocompleteAfterClick = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    items: items,
    clickCallback: clickCallback
  }));
  expect(autocompleteAfterClick.find({
    "data-cy": "autocompleteLastSearch"
  }).last().text().indexOf(mockStorage["Detection camera"].sanityzedLabel) >= 0).toBe(true);
});