"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _context = require("../../../context");
var _index = _interopRequireDefault(require("../index"));
var _grabber = require("../styles/grabber");
var _theme = require("../../theme");
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
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
(0, _mockAdapter.doSomeMock)();
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);

/* eslint-disable no-undef, no-unused-vars */
var t = _theme.theme.ae;
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
var context = {
  config: {
    portal: portal
  },
  initData: {},
  store: {
    Application: {
      extendedLanguage: false
    },
    grabber: {
      products: {
        id: "1",
        img: "img.png",
        def: "def"
      }
    }
  }
};
var state = {
  grabber: {
    products: {
      id: "1",
      img: "img.png",
      def: "def"
    }
  }
};
var products = [{
  id: "1",
  img: "img.png",
  def: "def"
}];
var loadProducts = function loadProducts() {};
var store = mockStore(state);

/* On vérifie la structure du grabber. */
test("test grabber structure", function () {
  var grabber = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    loadProducts: loadProducts,
    products: products
  })))));

  /* Le Composant est composé d'un styled component 'GrabberWrapper'. */
  expect(grabber.find(_grabber.GrabberWrapper)).toHaveLength(1);

  /* Qui lui même est composé d'un composant 'actions' et 'details'. */
  expect(grabber.find(_grabber.GrabberWrapper).find(_grabber.GrabberActions)).toHaveLength(1);
  expect(grabber.find(_grabber.GrabberWrapper).find(_grabber.GrabberProductDetails)).toHaveLength(1);
});