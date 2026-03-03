"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _testUtils = require("react-dom/test-utils");
var _ = _interopRequireDefault(require("./.."));
var _scrollTop = require("../styles/scrollTop");
describe("ScrollTop", function () {
  it("test ScrollTop pas de scroll", function () {
    var scrollTop = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], null));

    // 1. Il doit ne  doit pas y avoir de composant de style `BreadcrumbsContainer`
    //  quand on est en haut de la page.
    var container = scrollTop.find(_scrollTop.ScrollTopContainer);
    expect(container).toHaveLength(0);
    var scrollTopLink = container.find(_veDesignSystem.Button);
    expect(scrollTopLink).toHaveLength(0);
    var scrollTopLinkIcon = container.find(_veDesignSystem.Icon);
    expect(scrollTopLinkIcon).toHaveLength(0);
  });
  it("test ScrollTop avec scroll", function () {
    var scrollTop = shallow(/*#__PURE__*/_react["default"].createElement(_["default"], null));
    (0, _testUtils.act)(function () {
      scrollTop.setState({
        scrollingTop: true
      });

      // 1. Il doit y avoir un composant de style `BreadcrumbsContainer` quand on a scroller.
      var container = scrollTop.find(_scrollTop.ScrollTopContainer);
      expect(container).toHaveLength(1);
      var scrollTopLink = container.find(_veDesignSystem.Button);
      expect(scrollTopLink).toHaveLength(1);
      var scrollTopLinkIcon = container.find(_scrollTop.IconWith);
      expect(scrollTopLinkIcon).toHaveLength(1);
    });
  });
});