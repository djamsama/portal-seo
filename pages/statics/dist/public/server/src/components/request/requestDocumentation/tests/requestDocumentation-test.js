"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _initiateState = require("../../../../initiateState");
var _index = _interopRequireDefault(require("../index"));
var _requestDocumentation = require("../styles/requestDocumentation");
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore(_initiateState.InitiateState);
var context = {
  config: {
    portal: {
      language: "fr"
    }
  }
};
var requestDocumentationTestData = {
  formUrl: "https://www.agriexpo.online/request/form.html?token=eFKEoDh4P1OdJTDT4qPb98VcNNR96W7gs",
  labelKey: "foj_request_button_product_doc",
  trackAction: "RequestDoc",
  trackingCategory: "PRODUIT",
  trackingLabel: "ClickButton",
  googleAnalytics: {
    event: function event() {}
  }
};
test("request documentation nominal test", function () {
  var catalogSection = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    formUrl: requestDocumentationTestData.formUrl,
    googleAnalytics: requestDocumentationTestData.googleAnalytics,
    labelKey: requestDocumentationTestData.labelKey,
    trackingAction: requestDocumentationTestData.trackAction,
    trackingCategory: requestDocumentationTestData.trackingCategory,
    trackingLabel: requestDocumentationTestData.trackingLabel
  })));
  expect(catalogSection.find(_requestDocumentation.RequestDocumentationWrapper)).toHaveLength(1);
  expect(catalogSection.find(_veDesignSystem.Button)).toHaveLength(1);
});