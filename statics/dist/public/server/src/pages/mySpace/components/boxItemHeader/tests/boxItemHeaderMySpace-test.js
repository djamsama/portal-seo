"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _testUtils = require("react-dom/test-utils");
var _index = _interopRequireDefault(require("../index"));
var _modalDeleteFolder = _interopRequireDefault(require("../components/modalDeleteFolder"));
var _boxItemHeader = require("../styles/boxItemHeader");
var _mySpace = require("../../../styles/mySpace");
require("../../../../../../tools/utils-test/mockIntersectionObserver.js");
var folder = {
  id: 1004490,
  bookmarks: [null],
  defaultFolder: false,
  label: "simpleFolder",
  owner: null,
  shared: false,
  sharedWith: false
};
/* eslint-disable no-undef, no-unused-vars */
test("boxItemHeaderMySpace", function () {
  var boxItemHeaderMySpace = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    itemNumber: 1,
    titleId: "foj_myspace_bookmark_to_sort"
  }));
});
test("boxItemHeaderMySpace editable but no folder", function () {
  var boxItemHeaderMySpace = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    titleId: "foj_myspace_bookmark_to_sort",
    itemNumber: 1,
    actions: {
      trash: false
    }
  }));
  (0, _testUtils.act)(function () {
    expect(boxItemHeaderMySpace.find(_boxItemHeader.BoxHeader).exists()).toEqual(true);
    expect(boxItemHeaderMySpace.find(_boxItemHeader.ItemNumber).exists()).toEqual(true);
    expect(boxItemHeaderMySpace.find(_boxItemHeader.PuceIconFolder).exists()).toEqual(false);
  });
});
test("boxItemHeaderMySpace editable share true trash false with folder", function () {
  var boxItemHeaderMySpace = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    itemNumber: 1,
    titleId: "foj_myspace_bookmark_to_sort",
    actions: {
      trash: false,
      edit: true,
      open: true
    },
    folder: folder,
    puceType: "folder",
    handles: {
      toggleOpenFolder: function toggleOpenFolder() {
        return true;
      },
      inputEditChange: function inputEditChange() {
        return true;
      }
    }
  }));
  expect(boxItemHeaderMySpace.find(_boxItemHeader.BoxHeader).exists()).toEqual(true);
  expect(boxItemHeaderMySpace.find(_boxItemHeader.ItemNumber).exists()).toEqual(true);
  expect(boxItemHeaderMySpace.find(_boxItemHeader.PuceIconFolder).exists()).toEqual(true);
  expect(boxItemHeaderMySpace.find(_modalDeleteFolder["default"]).exists()).toEqual(false);
  expect(boxItemHeaderMySpace.find(_mySpace.ActionLiEditMyspace).exists()).toEqual(true);
  boxItemHeaderMySpace.find(_mySpace.ActionLiEditMyspace).simulate("click");
  expect(boxItemHeaderMySpace.find(_boxItemHeader.InputEdit).exists()).toEqual(true);
  boxItemHeaderMySpace.find(_boxItemHeader.InputEdit).simulate("click");
  boxItemHeaderMySpace.find(_boxItemHeader.InputEdit).simulate("blur");
  boxItemHeaderMySpace.find(_mySpace.ActionLiEditMyspace).simulate("click");
  boxItemHeaderMySpace.find(_boxItemHeader.InputEdit).simulate("keyPress");
  boxItemHeaderMySpace.find(_boxItemHeader.InputEdit).simulate("change");
  expect(boxItemHeaderMySpace.find(_mySpace.ActionLiTrashMyspace).exists()).toEqual(false);
  expect(boxItemHeaderMySpace.find(_mySpace.ActionLiOpenMyspace).exists()).toEqual(true);
  boxItemHeaderMySpace.find(_mySpace.ActionLiOpenMyspace).simulate("click");
  expect(boxItemHeaderMySpace.find(_mySpace.ActionLiCloseMyspace).exists()).toEqual(false);
});
test("boxItemHeaderMySpace editable share false trash true with folder", function () {
  var boxItemHeaderMySpace = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    itemNumber: 1,
    titleId: "foj_myspace_bookmark_to_sort",
    actions: {
      trash: true
    },
    folder: folder,
    puceType: "start",
    handles: {
      toggleOpenFolder: function toggleOpenFolder() {
        return true;
      }
    }
  }));
  expect(boxItemHeaderMySpace.find(_boxItemHeader.BoxHeader).exists()).toEqual(true);
  expect(boxItemHeaderMySpace.find(_boxItemHeader.ItemNumber).exists()).toEqual(true);
  expect(boxItemHeaderMySpace.find(_boxItemHeader.PuceIconStart).exists()).toEqual(true);
  expect(boxItemHeaderMySpace.find(_modalDeleteFolder["default"]).exists()).toEqual(true);
  expect(boxItemHeaderMySpace.find(_mySpace.ActionLiTrashMyspace).exists()).toEqual(true);
  boxItemHeaderMySpace.find(_mySpace.ActionLiTrashMyspace).simulate("click");
  expect(boxItemHeaderMySpace.find(_mySpace.ActionLiCloseMyspace).exists()).toEqual(true);
  boxItemHeaderMySpace.find(_mySpace.ActionLiCloseMyspace).simulate("click");
});