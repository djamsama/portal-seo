"use strict";

/* eslint-disable func-names */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-underscore-dangle */
test("globalHelper IE", function () {
  window.navigator.__defineGetter__("userAgent", function () {
    return "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko";
  });

  // eslint-disable-next-line global-require
  var _require = require("../globalHelper"),
    GlobalHelper = _require.GlobalHelper;
  var isMobil = GlobalHelper.isMobileDevice();
  var mobilecheck = GlobalHelper.mobilecheck();
  var isOsxMobileDevice = GlobalHelper.isOsxMobileDevice();
  var isAllMobileDevice = GlobalHelper.isAllMobileDevice();
  var isMobileApplication = GlobalHelper.isMobileApplication();
  var isAndroidMobileApplication = GlobalHelper.isAndroidMobileApplication();
  var isTablette = GlobalHelper.isTablette();
  var isMicrosoft = GlobalHelper.isMicrosoft();
  expect(mobilecheck).toBeFalsy();
  expect(isMobil).toBeFalsy();
  expect(isMobileApplication).toBeFalsy();
  expect(isOsxMobileDevice).toBeFalsy();
  expect(isAllMobileDevice).toBeFalsy();
  expect(isAndroidMobileApplication).toBeFalsy();
  expect(isTablette).toBeFalsy();
  expect(isMicrosoft).toBeTruthy();
});