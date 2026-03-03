"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _bookmarkAjaxService = _interopRequireDefault(require("../bookmarkAjaxService"));
var _mockAdapter = require("../../../../tools/utils-test/mockAdapter.js");
/* eslint-disable func-names */
/* eslint-disable no-undef */

var bookmarkAjaxService = new _bookmarkAjaxService["default"]();
var mockDataResponse = {
  test: "response test "
};
_mockAdapter.mock.onPost("/ajax/myspace/secure/folder").reply(200, mockDataResponse);
test("bookmarkAjaxService createFolder", function () {
  try {
    bookmarkAjaxService.createFolder(1111111, 1, [1, 2, 3], true, "nv folder").then(function (response) {
      expect(response.data).toEqual(mockDataResponse);
    });
  } catch (error) {
    fail("Test bookmarkAjaxService createFolder Ko ".concat(error));
  }
});
var mockDataResponsePut = {
  test: "response test Put"
};
_mockAdapter.mock.onPut("/ajax/myspace/secure/folder", {
  id: 1,
  label: "updated folder"
}).reply(200, mockDataResponsePut);
test("bookmarkAjaxService updateFolder", function () {
  try {
    bookmarkAjaxService.updateFolder(1, "updated folder").then(function (response) {
      expect(response.data).toEqual(mockDataResponsePut);
    });
  } catch (error) {
    fail("Test bookmarkAjaxService updateFolder Ko ".concat(error));
  }
});
var mockDataResponseDelete = {
  test: "response test delete"
};
_mockAdapter.mock.onDelete("/ajax/myspace/secure/folder/1").reply(200, mockDataResponseDelete);
test("bookmarkAjaxService deleteFolder", function () {
  try {
    bookmarkAjaxService.deleteFolder(1).then(function (response) {
      expect(response.data).toEqual(mockDataResponseDelete);
    });
  } catch (error) {
    fail("Test bookmarkAjaxService deleteFolder Ko ".concat(error));
  }
});
var mockDataResponseMoveBookmark = {
  test: "response test moveBookmarks"
};
_mockAdapter.mock.onPost("/ajax/myspace/secure/bookmark").reply(200, mockDataResponseMoveBookmark);
test("bookmarkAjaxService moveBookmarks", function () {
  try {
    bookmarkAjaxService.moveBookmarks(1, 2, [1, 2], false, "").then(function (response) {
      expect(response.data).toEqual(mockDataResponseMoveBookmark);
    });
  } catch (error) {
    fail("Test bookmarkAjaxService moveBookmarks Ko ".concat(error));
  }
});
var mockDataResponseDeleteBookmarks = {
  test: "response test deleteBookmarks"
};
_mockAdapter.mock.onDelete("/ajax/myspace/secure/bookmark/1/2").reply(200, mockDataResponseDeleteBookmarks);
test("bookmarkAjaxService deleteBookmarks", function () {
  try {
    bookmarkAjaxService.deleteBookmarks(1, 2).then(function (response) {
      expect(response.data).toEqual(mockDataResponseDeleteBookmarks);
    });
  } catch (error) {
    fail("Test bookmarkAjaxService deleteBookmarks Ko ".concat(error));
  }
});