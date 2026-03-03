"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
test("autocompleteSimple", function () {
  var items = [{
    label: " Le label 1",
    value: "1"
  }, {
    label: "Le label 2",
    value: "2"
  }, {
    label: "+43 Nom affiché 3",
    value: "3"
  }, {
    label: "- Nom affiché 5",
    value: "5"
  }];
  var haveToBeChangeByCallBackInit = "la valeur de depart";
  var haveToBeChangeByCallBack = haveToBeChangeByCallBackInit;
  var clickCallback = function clickCallback(value) {
    haveToBeChangeByCallBack = value;
  };
  var initValue = "####";
  // on lance l'auto complete avec une valeur qui ne renverra rien
  var autocomplete = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    id: "someId",
    name: "someName",
    suggestions: items,
    value: initValue
  }));
  var input = autocomplete.find({
    name: "someName"
  }).last();
  input.simulate("click");
  expect(input.prop("value")).toBe(initValue);
  expect(haveToBeChangeByCallBack).toBe(haveToBeChangeByCallBackInit);
  var li0 = autocomplete.find("li");
  expect(li0).toHaveLength(0);

  // on lance l'auto complete avec une valeur qui doit récupérer les 2 premiers elements du tableau items
  autocomplete = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    className: "unNomDeClass",
    id: "someId",
    name: "someName",
    suggestions: items,
    value: "lab"
  }));
  input = autocomplete.find({
    name: "someName"
  }).last();
  input.simulate("click");
  var li1 = autocomplete.find("li").first();
  expect(li1.text()).toBe(items[0].label);
  var li2 = autocomplete.find("li").last();
  expect(li2.text()).toBe(items[1].label);
  li1.simulate("click");
  input = autocomplete.find({
    name: "someName"
  }).last();
  expect(input.prop("value")).toBe(items[0].value);
  expect(haveToBeChangeByCallBack).toBe(haveToBeChangeByCallBackInit);
  input.simulate("focus", {
    currentTarget: {
      id: "someId",
      name: "someName",
      value: "b"
    },
    target: {
      id: "someId",
      name: "someName",
      value: "b"
    }
  });
  input.simulate("change", {
    currentTarget: {
      id: "someId",
      name: "someName",
      value: "b"
    },
    target: {
      id: "someId",
      name: "someName",
      value: "b"
    }
  });

  // on lance l'autocomplete avec une valeur qui doit récupérer
  // le derniers elements du tableau items avec un callBack sur le click
  autocomplete = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    className: "unNomDeClass",
    id: "someId",
    name: "someName",
    suggestions: items,
    onChangeCallBack: clickCallback,
    value: items[3].label
  }));
  input = autocomplete.find({
    name: "someName"
  }).last();
  input.simulate("click");
  var li = autocomplete.find("li");
  expect(li.text()).toBe(items[3].label);
  li.simulate("click");
  input = autocomplete.find({
    name: "someName"
  }).last();
  expect(input.prop("value")).toBe(items[3].value);
  expect(haveToBeChangeByCallBack).toBe(items[3].value);
});