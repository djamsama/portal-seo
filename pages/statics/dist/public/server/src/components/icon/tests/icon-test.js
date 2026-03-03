"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _ = _interopRequireDefault(require(".."));
describe("Icon", function () {
  it("i", function () {
    var wrapper = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], {
      name: "fa fa-home"
    }));
    expect(wrapper.contains(/*#__PURE__*/_react["default"].createElement("i", {
      className: "fa fa-home"
    }))).toEqual(true);
    // eslint-disable-next-line quotes
    expect(wrapper.find('[className="fa fa-home"]').exists()).toEqual(true);
  });
});