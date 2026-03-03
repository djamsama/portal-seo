"use strict";

/* eslint-disable func-names */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-underscore-dangle */
test("globalHelper Iphone", function () {
  window.navigator.__defineGetter__("userAgent", function () {
    return "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)";
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
  expect(mobilecheck).toBeTruthy();
  expect(isMobil).toBeTruthy();
  expect(isOsxMobileDevice).toBeTruthy();
  expect(isAllMobileDevice).toBeTruthy();
  expect(isMobileApplication).toBeFalsy();
  expect(isAndroidMobileApplication).toBeFalsy();
  expect(isTablette).toBeFalsy();
  expect(isMicrosoft).toBeFalsy();
});