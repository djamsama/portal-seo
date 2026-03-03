"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _cardInput = _interopRequireDefault(require("../../cardInput"));
var _cardFieldCheckbox = _interopRequireDefault(require("../components/cardFieldCheckbox"));
var _cardFieldRadio = _interopRequireDefault(require("../components/cardFieldRadio"));
var _ = _interopRequireDefault(require(".."));
describe("CardField", function () {
  it("checkbox", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      type: "checkbox",
      name: "reason",
      value: ["PRICE", "SPECIFICATION"]
    }, /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
      value: "PRICE"
    }, "Le devis ne correspond pas ", /*#__PURE__*/_react["default"].createElement("strong", null, "\xE0 mon budget")), /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
      value: "DETAIL"
    }, "J'ai besoin de ", /*#__PURE__*/_react["default"].createElement("strong", null, "plus de d\xE9tails")), /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
      value: "SPECIFICATION"
    }, "Le devis ne r\xE9pond pas \xE0 ", /*#__PURE__*/_react["default"].createElement("strong", null, "mon cahier des charges")), /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
      value: "DELIVERY"
    }, "Les ", /*#__PURE__*/_react["default"].createElement("strong", null, "conditions de livraison / de vente")), /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
      value: "OTHER",
      style: {
        fontStyle: "italic"
      }
    }, "Autre")));
    var field = wrapper.find("Field").props();
    expect(field.component).toStrictEqual(_cardFieldCheckbox["default"]);
    expect(field.name).toStrictEqual("reason");
    expect(field.defaultValue).toStrictEqual(["PRICE", "SPECIFICATION"]);
  });
  it("radio", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      type: "radio",
      name: "status",
      value: "TO_MODIFY"
    }, /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
      value: "TO_MODIFY",
      style: {
        backgroundColor: "lightgreen"
      }
    }, "Je souhaite avoir un ", /*#__PURE__*/_react["default"].createElement("strong", null, "nouveau devis")), /*#__PURE__*/_react["default"].createElement(_cardInput["default"], {
      value: "REFUSE",
      style: {
        backgroundColor: "lightyellow"
      }
    }, "Je ", /*#__PURE__*/_react["default"].createElement("strong", null, "ne souhaite pas donner suite"), "\xE0 ce devis")));
    var field = wrapper.find("Field").props();
    expect(field.component).toStrictEqual(_cardFieldRadio["default"]);
    expect(field.name).toStrictEqual("status");
    expect(field.defaultValue).toStrictEqual("TO_MODIFY");
  });
});