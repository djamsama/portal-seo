"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reduxThunk = require("redux-thunk");
var _reactRedux = require("react-redux");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _testUtils = require("react-dom/test-utils");
var _reduxForm = require("redux-form");
var _index = _interopRequireDefault(require("../index"));
var MySpaceModalForgetFormContainer = (0, _reduxForm.reduxForm)({
  form: "MySpaceModalForgetForm"
})(_index["default"]);
require("../../../../../../../../tools/utils-test/mockIntersectionObserver.js");
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var InitiateState = function InitiateState() {
  var response = {
    Application: {},
    Account: {
      elements: []
    }
  };
  return response;
};
var store = mockStore(InitiateState);
test("mySpaceModalForgetForm", function () {
  /* eslint-disable no-undef, no-unused-vars */ // $FlowFixMe

  var mySpaceModalForgetForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(MySpaceModalForgetFormContainer, {
    handleSubmit: function handleSubmit() {},
    email: "unEmail@test.fr",
    setData: function setData() {}
  })));
  (0, _testUtils.act)(function () {
    expect(mySpaceModalForgetForm.find({
      name: "email"
    }).exists()).toEqual(true);
  });
});