"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _notificationsHelper = _interopRequireDefault(require("../../../../../helpers/notificationsHelper"));
var _jestMessages = _interopRequireDefault(require("../../../../../../tools/utils-test/assets/jestMessages.json"));
var successExpected = _jestMessages["default"].fo_myspace_account_lastNameModificationNotificationSuccess;
var errorExpected = _jestMessages["default"].fo_myspace_account_modificationNotificationFailed;

/* eslint-disable no-undef, no-unused-vars */
test("notificationsHelper", function () {
  var notificationsHelper = new _notificationsHelper["default"](testIntl, "fo_myspace_account_lastNameModificationNotificationSuccess", "fo_myspace_account_modificationNotificationFailed");
  expect(notificationsHelper.getSuccessMsg()).toEqual(successExpected);
  expect(notificationsHelper.getErrorMsg()).toEqual(errorExpected);
  var notificationMessages = notificationsHelper.getNotificationMessages();
  expect(notificationMessages.success).toEqual(successExpected);
  expect(notificationMessages.error).toEqual(errorExpected);
});