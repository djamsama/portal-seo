"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _menuThumbnail = _interopRequireDefault(require("../menuThumbnail"));
var Flickity = require("../../../../tools/utils-test/mockFlickity");
jest.mock("react-flickity-component", function () {
  return (
    // Mock the Flickity component
    {
      __esModule: true,
      "default": jest.fn(function (_ref) {
        var children = _ref.children;
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-testid": "flickity-mock"
        }, children);
      })
    }
  );
});
if (!global.getComputedStyle) {
  var rules = document.createElement("div");
  rules.style.backgroundColor = "red";
  rules.style.cursor = "pointer";
  rules.style.color = "white";
  rules.style.width = "500px";
  rules.style.height = "500px";
  global.getComputedStyle = function () {
    return rules.style;
  };
}
var menuItem = {
  id: "PRODUCTS",
  imageUrl: null,
  label: "Produits",
  linkUrl: "http://www.archiexpo.fr/",
  subMenuItems: [{
    id: 1,
    imageUrl: "https://img.directindustry.fr/images_di/universe/subscription-form/1.jpg",
    label: "Mobilier",
    linkUrl: null,
    subMenuItems: []
  }, {
    id: 14,
    imageUrl: "https://img.directindustry.fr/images_di/universe/subscription-form/14.jpg",
    label: "Décoration",
    linkUrl: null,
    subMenuItems: []
  }]
};
test("Menu thumbnail empty menuItem", function () {
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_menuThumbnail["default"], {
    menuItem: {}
  }));
  expect(menu.find("div").exists()).toEqual(true);
  expect(menu.find(Flickity).exists()).toEqual(false);
});
test("Menu thumbnail populated", function () {
  var menu = mount(/*#__PURE__*/_react["default"].createElement(_menuThumbnail["default"], {
    menuItem: menuItem
  }));
  var img1 = menu.find({
    src: menuItem.subMenuItems[0].imageUrl
  }).first();
  expect(menu.find({
    src: menuItem.subMenuItems[0].imageUrl
  }).exists()).toEqual(true);
  expect(menu.find({
    src: menuItem.subMenuItems[1].imageUrl
  }).exists()).toEqual(true);
  var _menu$state = menu.state(),
    visible = _menu$state.visible;
  expect(menu.find({
    src: menuItem.subMenuItems[1].imageUrl
  }).exists()).toEqual(true);
  expect(visible).toEqual(false);

  /** drag */
  var event = new window.MouseEvent("mousedown", {
    clientX: 10,
    clientY: 10
  });
  img1.getDOMNode().dispatchEvent(event);
  visible = menu.state().visible;
  expect(visible).toEqual(false); /** drag ne declenche pas l'accordeon */
  expect(menu.find({
    src: menuItem.subMenuItems[1].imageUrl
  }).exists()).toEqual(true);
  img1.simulate("click");
  visible = menu.state().visible;
  expect(visible).toEqual(menuItem.subMenuItems[0].id); /** click declenche l'accordeon */
});