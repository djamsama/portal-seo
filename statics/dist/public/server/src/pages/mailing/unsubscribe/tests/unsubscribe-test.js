"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _veDesignSystem = require("ve-design-system");
var _context = require("../../../../context");
var _theme = require("../../../../components/theme");
var _mockContext = require("../../../../../tools/utils-test/mockContext");
var _mockMenu = require("../../../../../tools/utils-test/mockMenu");
var _index = _interopRequireDefault(require("../index"));
var _form = require("../components/form/styles/form");
var _form2 = require("../components/reasons/styles/form");
var _fieldCheckbox = require("../../../../components/fieldCheckbox");
var _mockAdapter = require("../../../../../tools/utils-test/mockAdapter.js");
(0, _mockAdapter.doSomeMock)();
var t = _theme.theme.ae;
/* Test de la page Unsubscribe */
test("UnsubscribePageTest", function () {
  var state = {
    Menu: _mockMenu.menu,
    Application: {
      currentCurrency: "fr",
      localeProp: "fr"
    },
    unsubscribeReducer: {
      postReturnSuccess: null
    },
    form: {
      unsubscribeForm: null
    }
  };
  var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
  var store = mockStore(state);
  var unsubscribePage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(unsubscribePage.find(_form.TitleH1).exists()).toEqual(true);
  expect(unsubscribePage.find(_form.UnsubscribeMessage).text()).toContain("Archiexpo");
  var form = unsubscribePage.find(_form.StyledForm);
  expect(form.exists()).toEqual(true);
  expect(form.find("input")).toHaveLength(1);
  expect(form.find(_veDesignSystem.Button)).toHaveLength(1);
  expect(unsubscribePage.find(_form2.StyledFormReason).exists()).toEqual(false);
});

/* Test de la page Unsubscribe Reasons - Sans token visiteur spécifié */
test("UnsubscribePageTest_WithoutVisitor", function () {
  var state = {
    Menu: _mockMenu.menu,
    Application: {
      currentCurrency: "fr",
      localeProp: "fr"
    },
    unsubscribeReducer: {
      postReturnSuccess: true,
      unsubscribed: false
    },
    form: {
      unsubscribeForm: null
    }
  };
  var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
  var store = mockStore(state);
  var unsubscribePage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(unsubscribePage.find(_form2.TitleH1Reason).exists()).toEqual(false);
  expect(unsubscribePage.find(_form2.UnsubscribeMessageReason).exists()).toEqual(false);
  expect(unsubscribePage.find(_form.StyledForm).exists()).toEqual(false);
  expect(unsubscribePage.find(_form2.StyledFormReason).exists()).toEqual(false);
});

/* Test de la page Unsubscribe Reasons - Avec token visiteur spécifié */
test("UnsubscribePageTest_WithVisitorToken", function () {
  var state = {
    Menu: _mockMenu.menu,
    Application: {
      currentCurrency: "fr",
      localeProp: "fr"
    },
    unsubscribeReducer: {
      postReturnSuccess: true,
      data: {
        content: {
          visitorId: "123",
          notEmptyToken: true,
          unsubscribeCancelationReasonForm: {
            visitorToken: "0af948c13"
          },
          reasons: [{
            id: "1",
            labelKey: "label 1",
            type: "CHOICE"
          }, {
            id: "2",
            labelKey: "label 2",
            type: "TEXT"
          }]
        }
      }
    },
    form: {
      unsubscribeForm: null
    }
  };
  var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
  var store = mockStore(state);
  var unsubscribePage = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: _mockContext.context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], null)))));
  expect(unsubscribePage.find(_form2.TitleH1Reason).exists()).toEqual(true);
  expect(unsubscribePage.find(_form.StyledForm).exists()).toEqual(false);
  var reasonsForm = unsubscribePage.find(_form2.StyledFormReason);
  expect(reasonsForm.exists()).toEqual(true);
  expect(reasonsForm.find("input")).toHaveLength(4);
  expect(reasonsForm.find(_veDesignSystem.Button)).toHaveLength(1);
  expect(reasonsForm.find(_fieldCheckbox.CheckboxField)).toHaveLength(2);
  expect(reasonsForm.find("textarea")).toHaveLength(1);
});