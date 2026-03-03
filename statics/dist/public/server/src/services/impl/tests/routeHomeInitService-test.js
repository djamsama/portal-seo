"use strict";

var _routeHomeInitService = require("../routeHomeInitService");
/* eslint-disable no-prototype-builtins */

test("initService state", function () {
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
  // Empty
  var intitStateData = _routeHomeInitService.initService.getInitStateData({
    data: {
      test: "test"
    },
    config: {
      portal: portal
    }
  });
  expect(intitStateData.hasOwnProperty("Application")).toBeTruthy();
  var _intitStateData = intitStateData,
    Application = _intitStateData.Application;
  expect(Application.hasOwnProperty("test")).toBeFalsy();

  // Populated
  intitStateData = _routeHomeInitService.initService.getInitStateData({
    state: {
      test: "test"
    },
    config: {
      portal: portal
    }
  });
  // eslint-disable-next-line prefer-destructuring
  Application = intitStateData.Application;
  expect(Application.hasOwnProperty("test")).toBeTruthy();
});
test("initService data", function () {
  // Empty
  var intitStateData = _routeHomeInitService.initService.getInitData({
    state: {
      test: "test"
    }
  });
  expect(intitStateData.hasOwnProperty("Application")).toBeFalsy();
  expect(intitStateData.hasOwnProperty("test")).toBeFalsy();

  // Populated
  intitStateData = _routeHomeInitService.initService.getInitData({
    data: {
      test: "test"
    }
  });
  expect(intitStateData.hasOwnProperty("test")).toBeTruthy();
});
test("initService config", function () {
  // Empty
  var intitStateData = _routeHomeInitService.initService.getConfig({
    state: {
      test: "test"
    }
  });
  expect(intitStateData.hasOwnProperty("Application")).toBeFalsy();
  expect(intitStateData.hasOwnProperty("test")).toBeFalsy();

  // Populated
  intitStateData = _routeHomeInitService.initService.getConfig({
    config: {
      test: "test"
    }
  });
  expect(intitStateData.hasOwnProperty("test")).toBeTruthy();
});