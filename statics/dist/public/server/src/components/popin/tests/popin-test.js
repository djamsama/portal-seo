"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _popin = require("../styles/popin");
var _ = _interopRequireDefault(require(".."));
describe("Popin", function () {
  it("open with icon", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      closeIcon: true,
      open: true
    }, "Test"));
    var transitionablePortal = wrapper.find(_semanticUiReact.TransitionablePortal).props();
    expect(transitionablePortal.open).toStrictEqual(true);
    var styledPopin = wrapper.find(_popin.StyledPopin).props();
    expect(styledPopin.closeIcon).toStrictEqual(true);
    expect(styledPopin.closeOnDimmerClick).toStrictEqual(true);
    expect(styledPopin.closeOnEscape).toStrictEqual(true);
    expect(styledPopin.open).toStrictEqual(true);
  });
  it("close without dimmer-click and escape", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      closeOnDimmerClick: false,
      closeOnEscape: false
    }, "Test"));
    var transitionablePortal = wrapper.find(_semanticUiReact.TransitionablePortal).props();
    expect(transitionablePortal.open).toBeUndefined();
    var styledPopin = wrapper.find(_popin.StyledPopin).props();
    expect(styledPopin.closeIcon).toStrictEqual(true);
    expect(styledPopin.closeOnDimmerClick).toStrictEqual(false);
    expect(styledPopin.closeOnEscape).toStrictEqual(false);
    expect(styledPopin.open).toStrictEqual(true);
  });
});