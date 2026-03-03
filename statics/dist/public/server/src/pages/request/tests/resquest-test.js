"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _styledComponents = require("styled-components");
var _mockContext = require("../../../../tools/utils-test/mockContext");
var _context = require("../../../context");
var _mockState = require("../../../../tools/utils-test/mockState");
var _theme = require("../../../components/theme");
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
var _index = _interopRequireDefault(require("../index"));
var _contactChoice = _interopRequireDefault(require("../components/formSections/contactChoice"));
var _visitorNotRegister = _interopRequireDefault(require("../components/formSections/visitorNotRegister"));
var _visitorRegister = _interopRequireDefault(require("../components/formSections/visitorRegister"));
var _requestConfirmation = _interopRequireDefault(require("../components/confirmationSections/requestConfirmation"));
var _requestSendedConfirmation = _interopRequireDefault(require("../components/confirmationSections/requestConfirmation/components/requestSendedConfirmation"));
var _requestBackFaqLink = _interopRequireDefault(require("../components/confirmationSections/requestBackFaqLink"));
var _returnLink = require("../../../components/returnLink/styles/returnLink");
var _contact = require("../components/formSections/contactChoice/components/styles/contact");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable no-undef */ // eslint-disable-next-line max-len
var mockRequestForm = require("../../../../tools/utils-test/assets/request/requestForm.json");
var mockRequestDetails = require("../../../../tools/utils-test/assets/request/mockRequestDetails.json");
var mockPushedCompagny = require("../../../../tools/utils-test/assets/header/pushedCompanyList.json");
var mockCurrency = require("../../../../tools/utils-test/assets/header/currencyList.json");
var mockCheckAuth = require("../../../../tools/utils-test/assets/myspace/checkAuth.json");
_mockAdapter.mock.onGet("/ajax/pushed-company/list.json").reply(200, mockPushedCompagny);
_mockAdapter.mock.onGet("http://www.archiexpo.fr/ajax/currency/list.json").reply(200, mockCurrency);
_mockAdapter.mock.onGet("https://www.archiexpo.fr/ajax/currency/list.json").reply(200, mockCurrency);
_mockAdapter.mock.onGet("/ajax/currency/list.json").reply(200, mockCurrency);
(0, _mockAdapter.doMockSocial)();
_mockAdapter.mock.onGet(/^\/ve-front-sso\/rest\/v1\.2\/external\/checkAuth\//).reply(200, mockCheckAuth);

// context.initData.ajaxCurrencyListUrl = null;
if (window && !window.__preloadData__) {
  window.__preloadData__ = {
    ajaxCurrencyListUrl: "https://www.archiexpo.fr/ajax/currency/list.json"
  };
}
var mockStoreFunction = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = {};
var copyTheme = _objectSpread({}, _theme.theme.ae);
copyTheme.logo = "https://img.archiexpo.fr/media/ps/images/ae/header/header-logo.svg";
describe("Request Form pages ", function () {
  it("Step 1", function () {
    _mockState.state.RequestForm = mockRequestForm.ajaxRequestForm;
    store = mockStoreFunction(_mockState.state);
    var requestForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: copyTheme
    }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: _mockContext.context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      stepId: "ajaxRequestForm",
      brand: false
    })))));
    expect(requestForm.find(_contactChoice["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_visitorNotRegister["default"]).exists()).toBeTruthy();
    expect(requestForm.find(_visitorRegister["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_requestConfirmation["default"]).exists()).toBeFalsy();
  });
  it("ContactChoice", function () {
    _mockState.state.RequestForm = mockRequestForm.ajaxRequestFormContactChoice;
    store = mockStoreFunction(_mockState.state);
    var requestForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: copyTheme
    }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: _mockContext.context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      stepId: "ajaxRequestFormContactChoice",
      brand: false
    })))));
    expect(requestForm.find(_contactChoice["default"]).exists()).toBeTruthy();
    expect(requestForm.find(_visitorNotRegister["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_visitorRegister["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_requestConfirmation["default"]).exists()).toBeFalsy();
    expect(requestForm.text().indexOf(_mockState.state.RequestForm.fields[0].data[0].companyName) >= 0).toBeTruthy();
    var buttonsSubmit = requestForm.find(_contact.StyledPortalButton);
    expect(requestForm.find(_contact.StyledPortalButton).exists()).toBeTruthy();
    buttonsSubmit.first().simulate("click");
    expect(buttonsSubmit.exists()).toBeTruthy();
  });
  it("RequestConfirmation", function () {
    var requestForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: copyTheme
    }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: _mockContext.context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      stepId: "ajax.request.confirmation",
      brand: false,
      multiRequestConfirmation: true
    })))));
    expect(requestForm.find(_contactChoice["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_visitorNotRegister["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_visitorRegister["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_requestConfirmation["default"]).exists()).toBeTruthy();
    expect(requestForm.find(_requestSendedConfirmation["default"]).exists()).toBeTruthy();
    requestForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: copyTheme
    }, /*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
      value: _mockContext.context
    }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      stepId: "ajax.request.confirmation",
      requestDetails: mockRequestDetails.requestDetails,
      brand: false,
      multiRequestConfirmation: true
    })))));
    expect(requestForm.find(_contactChoice["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_visitorNotRegister["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_visitorRegister["default"]).exists()).toBeFalsy();
    expect(requestForm.find(_requestConfirmation["default"]).exists()).toBeTruthy();
    expect(requestForm.find(_requestSendedConfirmation["default"]).exists()).toBeTruthy();
    expect(requestForm.find(_requestBackFaqLink["default"]).exists()).toBeTruthy();
    var returnLink = requestForm.find(_returnLink.StyledLink);
    returnLink.simulate("click");
    expect(returnLink.exists()).toBeTruthy();
  });
});