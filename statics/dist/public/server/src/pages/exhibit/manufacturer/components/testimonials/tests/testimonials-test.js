"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _slider = _interopRequireDefault(require("../../../../../../components/slider"));
var _context = require("../../../../../../context");
var _index = _interopRequireDefault(require("../index"));
var _initiateState = require("../../../../../../initiateState");
var _commonExhibit = require("../../../../styles/commonExhibit");
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

/* eslint-disable no-undef, no-unused-vars */
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AE",
  language: "FR",
  baseUrl: "archiexpo.fr",
  siteLabel: "archiexpo",
  tld: "fr",
  locale: "fr",
  domain: "archiexpo.fr"
};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: portal
  },
  initData: {
    nbTestimonials: 1
  },
  store: {}
};

/* On vérifie la structure du composant. */
test("test testimonials structure", function () {
  var testimonialsElement = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null))));
  var testimonials = testimonialsElement.find(_index["default"]);

  /* Le Composant est constitué d'une section "Difference" et d'une section "About us" avec un carousel. */
  expect(testimonials).toHaveLength(1);

  /* Verification de la section "Difference". */
  var differenceSection = testimonials.find(_commonExhibit.ExhibitDifferenceSection);
  expect(differenceSection).toHaveLength(1);
  expect(differenceSection.find(_commonExhibit.Title).text()).toBe("fo_fa_block_contactUs_title_label");

  /* Verification de la section "About us". */
  var aboutUsSection = testimonials.find(_commonExhibit.ExhibitAboutUsSection);
  expect(aboutUsSection).toHaveLength(1);
  expect(aboutUsSection.find(_commonExhibit.Title).text()).toBe("fo_fa_block_testimonials_title_label");
  expect(aboutUsSection.find(_slider["default"]).text()).toContain(
  // eslint-disable-next-line max-len
  "fo_fa_block_testimonials_1_labelfo_fa_block_testimonials_2_labelfo_fa_block_testimonials_3_labelfo_fa_block_testimonials_4_label");
});