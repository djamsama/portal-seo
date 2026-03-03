"use strict";

var _require = require("../globalHelper"),
  GlobalHelper = _require.GlobalHelper;
test("globalHelper shuffle", function () {
  // eslint-disable-next-line global-require

  var shuffleTab = GlobalHelper.shuffle(["val1", "val2", "val3"]);
  expect(shuffleTab.includes("val1")).toBeTruthy();
  expect(shuffleTab.includes("val2")).toBeTruthy();
  expect(shuffleTab.includes("val3")).toBeTruthy();
  expect(shuffleTab.includes("val4")).toBeFalsy();
});
test("globalHelper is in viewPort", function () {
  var newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.getBoundingClientRect = jest.fn(function () {
    return {
      x: 851.671875,
      y: 200.046875,
      width: 8.34375,
      height: 17,
      top: 400.046875,
      right: 860.015625,
      bottom: 402.046875,
      left: 851.671875
    };
  });
  var result = GlobalHelper.isInViewPort(newDiv);
  expect(result).toBeTruthy();
  newDiv.getBoundingClientRect = jest.fn(function () {
    return {
      x: 851.671875,
      y: 200.046875,
      width: 8.34375,
      height: 17,
      top: 400.046875,
      right: 860.015625,
      bottom: 902.046875,
      left: 851.671875
    };
  });
  result = GlobalHelper.isInViewPort(newDiv);
  expect(result).toBeFalsy();
});