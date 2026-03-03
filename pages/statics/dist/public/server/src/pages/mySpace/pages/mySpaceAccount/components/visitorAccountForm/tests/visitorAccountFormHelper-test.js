"use strict";

var _visitorAccountFormHelper = require("../helpers/visitorAccountFormHelper");
var mockGmap = require("../../../../../../../../tools/utils-test/assets/map/gmap.json");
test("visitorAccountFormHelper", function () {
  var data = _visitorAccountFormHelper.VisitorAccountFormHelper.extractPlacesData(mockGmap);
  expect(data.countryName).toEqual("France");
  expect(data.city).toEqual("Guillaumes");
});