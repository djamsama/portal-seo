"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThanksTitle = exports.ThanksContent = exports.ThanksButtonExplanation = exports.ThanksButtonBloc = exports.ThanksButton = exports.SatisfactionThanksWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../components/styles/responsive"));
var _templateObject, _templateObject2;
var media = _responsive["default"].media();

// @TODO: Modifier le lien img pour l'avoir calculé depuis un fichier générique comme theme

var SatisfactionThanksWrapper = exports.SatisfactionThanksWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-2eon5s-0"
})(["margin:auto;width:70%;overflow:hidden;padding:5px;text-align:center;", " ", ";font:16px \"Century Gothic\",Verdana,sans-serif;color:#555555;"], media.screenLgMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    width: 970px;\n  "]))), media.screenSmMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    width: auto;\n  "]))));
var ThanksButtonBloc = exports.ThanksButtonBloc = _styledComponents["default"].div.withConfig({
  componentId: "sc-2eon5s-1"
})(["margin-bottom:20px;"]);
var ThanksButton = exports.ThanksButton = _styledComponents["default"].div.withConfig({
  componentId: "sc-2eon5s-2"
})(["margin:15px 0 50px 0;text-decoration:underline;"]);
var ThanksButtonExplanation = exports.ThanksButtonExplanation = _styledComponents["default"].div.withConfig({
  componentId: "sc-2eon5s-3"
})(["font-size:0.95em;"]);
var ThanksTitle = exports.ThanksTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-2eon5s-4"
})(["font-size:26px;margin-bottom:25px;"]);
var ThanksContent = exports.ThanksContent = _styledComponents["default"].div.withConfig({
  componentId: "sc-2eon5s-5"
})(["margin-bottom:35px;font-size:1.25em;"]);