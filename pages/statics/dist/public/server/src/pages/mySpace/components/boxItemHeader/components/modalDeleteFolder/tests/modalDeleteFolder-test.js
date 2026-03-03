"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _testUtils = require("react-dom/test-utils");
var _modal = _interopRequireDefault(require("../../../../../../../components/modal"));
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable no-undef */

require("../../../../../../../../tools/utils-test/mockIntersectionObserver.js");
var folder = {
  id: 1004490,
  bookmarks: [null],
  defaultFolder: false,
  label: "simpleFolder",
  owner: null,
  shared: false,
  sharedWith: false
};
test("modalDeleteFolder", function () {
  var modalDeleteFolder = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    handleCloseTrashModal: function handleCloseTrashModal() {},
    handles: {
      trash: ""
    },
    open: true,
    folder: folder
  }));
  (0, _testUtils.act)(function () {
    expect(modalDeleteFolder.find("form").exists()).toEqual(true);
  });
});
test("modalDeleteFolder", function () {
  var modalDeleteFolder = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    handleCloseTrashModal: function handleCloseTrashModal() {},
    handles: {
      trash: ""
    },
    open: false,
    folder: folder
  }));
  (0, _testUtils.act)(function () {
    expect(modalDeleteFolder.find(_modal["default"]).exists()).toEqual(true);
    expect(modalDeleteFolder.find("form").exists()).toEqual(false);
  });
});
test("modalDeleteFolder cancel click", function () {
  var spyClose = sinon.spy();
  var modalDeleteFolder = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    folder: folder,
    handles: {
      trash: ""
    },
    handleCloseTrashModal: spyClose
  }));
  (0, _testUtils.act)(function () {
    modalDeleteFolder.find("button").last().simulate("click");
    expect(spyClose.calledOnce).toBe(true);
  });
  modalDeleteFolder.update();
});
test("modalDeleteFolder submit click", function () {
  var spyDelete = sinon.spy();
  var modalDeleteFolder = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    open: true,
    folder: folder,
    handleCloseTrashModal: function handleCloseTrashModal() {
      return "";
    },
    handles: {
      trash: spyDelete
    }
  }));
  (0, _testUtils.act)(function () {
    modalDeleteFolder.find("form").simulate("submit");
  });
  modalDeleteFolder.update();
  expect(spyDelete.calledOnce).toBe(true);
});