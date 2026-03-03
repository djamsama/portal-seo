"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _routes = _interopRequireDefault(require("../routes"));
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

test("routes", function () {
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
  expect(_routes["default"].length > 0).toEqual(true);
  var cpt = 0;
  // eslint-disable-next-line prefer-const
  for (var key in _routes["default"]) {
    cpt += 1;
    var loadStateDataTest = _routes["default"][key].loadStateData({
      state: {
        cpt: cpt
      },
      config: {
        portal: portal
      }
    });

    // eslint-disable-next-line no-prototype-builtins
    expect(_routes["default"][key].hasOwnProperty("path")).toBeTruthy();
    if (typeof loadStateDataTest !== "undefined") {
      expect(loadStateDataTest.Application.cpt).toEqual(cpt);
    }
    var loadDataTest = _routes["default"][key].loadData({
      data: {
        loadDataTest: cpt
      }
    });
    if (typeof loadDataTest !== "undefined") {
      expect(loadDataTest.loadDataTest).toEqual(cpt);
    }
    var loadConfigTest = _routes["default"][key].loadConfig({
      config: {
        loadCondigTest: cpt
      }
    });
    if (typeof loadConfigTest !== "undefined" && typeof loadConfigTest.cpt !== "undefined") {
      expect(loadConfigTest.loadCondigTest).toEqual(cpt);
    }
  }
});