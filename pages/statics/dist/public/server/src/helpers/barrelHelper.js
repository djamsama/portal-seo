"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDbr = exports.dbr = void 0;
var canHazRollin = true;
var bRoller = function bRoller() {
  if (document && document.body) {
    var _s = document.body.style;
    _s.setProperty("-moz-transform", "rotate(360deg)");
    _s.setProperty("-moz-transition-duration", "4s");
    _s.setProperty("-moz-transition-property", "all");
    _s.setProperty("-webkit-transform", "rotate(360deg)");
    _s.setProperty("-webkit-transition-duration", "4s");
    _s.setProperty("-webkit-transition-property", "all");
    _s.setProperty("-o-transform", "rotate(360deg)");
    _s.setProperty("-o-transition-duration", "4s");
    _s.setProperty("-o-transition-property", "all");
    _s.setProperty("transform", "rotate(360deg)");
    _s.setProperty("transition-duration", "4s");
    _s.setProperty("transition-property", "all");
    setTimeout(function () {
      _s.removeProperty("-moz-transform");
      _s.removeProperty("-moz-transition-duration");
      _s.removeProperty("-moz-transition-property");
      _s.removeProperty("-webkit-transform");
      _s.removeProperty("-webkit-transition-duration");
      _s.removeProperty("-webkit-transition-property");
      _s.removeProperty("-o-transform");
      _s.removeProperty("-o-transition-duration");
      _s.removeProperty("-o-transition-property");
      _s.removeProperty("transform");
      _s.removeProperty("transition-duration");
      _s.removeProperty("transition-property");
      canHazRollin = true;
    }, 4000);
  }
};
var dbr = exports.dbr = function dbr() {
  if (canHazRollin) {
    canHazRollin = false;
    bRoller();
  }
};
var isDbr = exports.isDbr = function isDbr() {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return s === "do a barrel roll";
};