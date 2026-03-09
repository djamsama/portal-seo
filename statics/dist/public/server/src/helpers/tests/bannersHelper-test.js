"use strict";

var _bannersHelper = require("../bannersHelper");
it("BannersHelper ", function () {
  var result = _bannersHelper.BannersHelper.manageLinkIframeDfp();
  result = _bannersHelper.BannersHelper.giveDimensionsFor(123);
  expect(result.h).toEqual(192);
  result = _bannersHelper.BannersHelper.giveDimensionsFor(800);
  expect(result.h).toEqual(192);
  result = _bannersHelper.BannersHelper.giveDimensionsFor(1200);
  expect(result.h).toEqual(192);
  result = _bannersHelper.BannersHelper.giveDimensionsFor(1300);
  expect(result.h).toEqual(220);
  result = _bannersHelper.BannersHelper.giveDimensionsFor(1480);
  expect(result.h).toEqual(330);
  result = _bannersHelper.BannersHelper.giveDimensionsFor();
  expect(result.h).toEqual(330);
  _bannersHelper.BannersHelper.manageLinkIframeDfp();
});