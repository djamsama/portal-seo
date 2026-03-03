"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _cardInput = _interopRequireDefault(require("../../../../cardInput"));
var _ = _interopRequireDefault(require(".."));
describe("CardFieldRadio", function () {
  it("with defaultValue", function () {
    var spyOnChange = sinon.spy();
    var input = {
      name: "status",
      onChange: spyOnChange,
      value: "TO_MODIFY"
    };
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      input: input,
      options: [new _cardInput["default"]({
        children: "Je souhaite avoir un nouveau devis",
        value: "TO_MODIFY"
      }), new _cardInput["default"]({
        children: "Je ne souhaite pas donner suite à ce devis",
        value: "REFUSE"
      })]
    }));
    var _wrapper$find = wrapper.find("label"),
      _wrapper$find2 = (0, _slicedToArray2["default"])(_wrapper$find, 2),
      toModify = _wrapper$find2[0],
      refuse = _wrapper$find2[1];
    expect(toModify.key).toStrictEqual("TO_MODIFY");
    expect(refuse.key).toStrictEqual("REFUSE");
    var _wrapper$find$map = wrapper.find("input").map(function (w) {
      return w.props();
    });
    var _wrapper$find$map2 = (0, _slicedToArray2["default"])(_wrapper$find$map, 2);
    toModify = _wrapper$find$map2[0];
    refuse = _wrapper$find$map2[1];
    expect(toModify.checked).toStrictEqual(true);
    expect(toModify.name).toStrictEqual("status");
    expect(toModify.type).toStrictEqual("radio");
    expect(toModify.value).toStrictEqual("TO_MODIFY");
    expect(refuse.checked).toStrictEqual(false);
    expect(refuse.name).toStrictEqual("status");
    expect(refuse.type).toStrictEqual("radio");
    expect(refuse.value).toStrictEqual("REFUSE");
    var _wrapper$find$map3 = wrapper.find("div").map(function (w) {
      return w.props();
    });
    var _wrapper$find$map4 = (0, _slicedToArray2["default"])(_wrapper$find$map3, 2);
    toModify = _wrapper$find$map4[0];
    refuse = _wrapper$find$map4[1];
    expect(toModify.children).toStrictEqual("Je souhaite avoir un nouveau devis");
    expect(refuse.children).toStrictEqual("Je ne souhaite pas donner suite à ce devis");
    wrapper.find("input").last().simulate("change", {
      target: {
        value: "REFUSE"
      }
    });
    expect(spyOnChange.calledOnce).toBe(true);
  });
  it("without defaultValue", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      input: {
        name: "status",
        onChange: Function.prototype,
        value: ""
      },
      options: [new _cardInput["default"]({
        children: "Je souhaite avoir un nouveau devis",
        value: "TO_MODIFY"
      }), new _cardInput["default"]({
        children: "Je ne souhaite pas donner suite à ce devis",
        value: "REFUSE"
      })]
    }));
    var _wrapper$find$map5 = wrapper.find("input").map(function (w) {
        return w.props();
      }),
      _wrapper$find$map6 = (0, _slicedToArray2["default"])(_wrapper$find$map5, 2),
      toModify = _wrapper$find$map6[0],
      refuse = _wrapper$find$map6[1];
    expect(toModify.checked).toStrictEqual(false);
    expect(refuse.checked).toStrictEqual(false);
  });
});