"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _checkAll = require("../styles/checkAll");
test("checkAll checked", function () {
  /* eslint-disable no-undef, no-unused-vars */var checkAll = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    onHandleCheckAll: function onHandleCheckAll() {}
  }));
  expect(checkAll.find({
    title: "foj_subscribe_mail_newsletter_form_selectall"
  })).toBeTruthy();
  checkAll.find({
    title: "foj_subscribe_mail_newsletter_form_selectall"
  }).first().simulate("click");
  expect(checkAll.find(_checkAll.DivSelectFull)).toHaveLength(1);
  expect(checkAll.find(_checkAll.LinkSelectorFull)).toHaveLength(1);
  expect(checkAll.find(_checkAll.LinkSelectorFull)).toHaveLength(1);
});