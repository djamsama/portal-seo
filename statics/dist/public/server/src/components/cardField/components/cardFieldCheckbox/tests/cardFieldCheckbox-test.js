"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _cardInput = _interopRequireDefault(require("../../../../cardInput"));
var _ = _interopRequireDefault(require(".."));
describe("CardFieldCheckbox", function () {
  it("checkbox", function () {
    var spyOnChange = sinon.spy();
    var input = {
      name: "reason",
      onChange: spyOnChange,
      value: ["PRICE"]
    };
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      input: input,
      options: [new _cardInput["default"]({
        children: "Le devis ne correspond pas à mon budget",
        value: "PRICE"
      }), new _cardInput["default"]({
        children: "J'ai besoin de plus de détails",
        value: "DETAIL"
      })]
    }));
    var _wrapper$find = wrapper.find("label"),
      _wrapper$find2 = (0, _slicedToArray2["default"])(_wrapper$find, 2),
      price = _wrapper$find2[0],
      detail = _wrapper$find2[1];
    expect(price.key).toStrictEqual("PRICE");
    expect(detail.key).toStrictEqual("DETAIL");
    var _wrapper$find$map = wrapper.find("input").map(function (w) {
      return w.props();
    });
    var _wrapper$find$map2 = (0, _slicedToArray2["default"])(_wrapper$find$map, 2);
    price = _wrapper$find$map2[0];
    detail = _wrapper$find$map2[1];
    expect(price.checked).toStrictEqual(true);
    expect(price.name).toStrictEqual("reason[PRICE]");
    expect(price.type).toStrictEqual("checkbox");
    expect(price.value).toStrictEqual("PRICE");
    expect(detail.checked).toStrictEqual(false);
    expect(detail.name).toStrictEqual("reason[DETAIL]");
    expect(detail.type).toStrictEqual("checkbox");
    expect(detail.value).toStrictEqual("DETAIL");
    var _wrapper$find$map3 = wrapper.find("div").map(function (w) {
      return w.props();
    });
    var _wrapper$find$map4 = (0, _slicedToArray2["default"])(_wrapper$find$map3, 2);
    price = _wrapper$find$map4[0];
    detail = _wrapper$find$map4[1];
    expect(price.children).toStrictEqual("Le devis ne correspond pas à mon budget");
    expect(detail.children).toStrictEqual("J'ai besoin de plus de détails");
    wrapper.find("input").last().simulate("change", {
      target: {
        checked: true,
        value: "DETAIL"
      }
    });
    expect(spyOnChange.calledOnce).toBe(true);
    wrapper.find("input").last().simulate("change", {
      target: {
        checked: false,
        value: "PRICE"
      }
    });
    expect(spyOnChange.calledTwice).toBe(true);
  });
  it("without defaultValue", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      input: {
        name: "reason",
        onChange: Function.prototype,
        value: ""
      },
      options: [new _cardInput["default"]({
        children: "Le devis ne correspond pas à mon budget",
        value: "PRICE"
      }), new _cardInput["default"]({
        children: "J'ai besoin de plus de détails",
        value: "DETAIL"
      })]
    }));
    var _wrapper$find$map5 = wrapper.find("input").map(function (w) {
        return w.props();
      }),
      _wrapper$find$map6 = (0, _slicedToArray2["default"])(_wrapper$find$map5, 2),
      price = _wrapper$find$map6[0],
      detail = _wrapper$find$map6[1];
    expect(price.checked).toStrictEqual(false);
    expect(detail.checked).toStrictEqual(false);
  });
});