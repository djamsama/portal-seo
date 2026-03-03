"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperItemRequestContentBox = exports.WrapperItemRequest = exports.WrapperImageRequest = exports.StopCircleIcon = exports.RequestType = exports.RefusedIcon = exports.OverlayBackground = exports.Overlay = exports.ItemTitle = exports.HourGlassHalfIcon = exports.CompanyLogo = exports.Bell = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../../../components/styles/responsive"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var media = _responsive["default"].media();
var WrapperItemRequest = exports.WrapperItemRequest = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-0"
})(["position:relative;min-height:435px;padding-left:25px;padding-right:25px;padding-bottom:40px;flex-basis:25%;max-width:25%;", ";", ";", ";.disabled{pointer-events:none;}"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    min-height: 380px;\n    flex-basis: 33.33%;\n    max-width: 33.33%;\n  "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: 50%;\n    max-width: 50%;\n  "]))), media.screenXxsMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-basis: 100%;\n    max-width: 100%;\n    border-bottom: 1px solid #dadbdf;\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n  "]))));
var Overlay = exports.Overlay = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-1"
})(["height:80px;width:80%;padding:0 5px;margin-left:10%;background:white;border-radius:5px;position:absolute;top:92px;text-align:center;box-shadow:0 5px 5px rgba(0,0,0,0.1);&.REFUSED,&.REQUEST{color:red;}&.NEW,&.PENDING,&.ON_HOLD{color:orange;}top:99px;", ";", ";", ";", ";"], media.screenMdMin(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    top: 93px;\n  "]))), media.screenSmMin(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    top: calc(33% - 47px);\n  "]))), media.screenXsMin(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n    top: calc(25vw - 30px);\n  "]))), media.screenXxsMin(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    top: calc(50vw - 30px);\n  "]))));
var OverlayBackground = exports.OverlayBackground = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-2"
})(["opacity:", ";margin-bottom:auto;"], function (props) {
  return props.itemToDisable ? 0.33 : 1;
});
var WrapperImageRequest = exports.WrapperImageRequest = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-3"
})(["height:210px;line-height:0;text-align:center;vertical-align:middle;font-weight:400;margin:0 0 10px;position:relative;background:url(", "/common/myspace/stripes-bkg.gif);align-items:center;justify-content:center;.request-opacity{opacity:", ";}img{max-width:100%;object-fit:scale-down;height:100%;max-height:100%;margin:auto;}.centered{position:absolute;top:50%;right:0px;bottom:0px;left:0px;color:#b151e2;font-size:18px;font-family:sans-serif;font-weight:bold;}", ";", ";"], function (props) {
  return props.theme.pathImg;
}, function (props) {
  return props.itemToDisable ? 0.33 : 1;
}, media.screenXsMin(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    height: calc(50vw - 50px);\n  "]))), media.screenXxsMin(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    height: calc(100vw - 50px);\n  "]))));
var WrapperItemRequestContentBox = exports.WrapperItemRequestContentBox = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-4"
})(["display:flex;flex-direction:column;height:100%;position:relative;text-align:center;opacity:", ";"], function (props) {
  return props.itemToDisable ? 0.33 : 1;
});
var RequestType = exports.RequestType = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-5"
})(["text-align:center;min-height:36px;font-weight:700;font-family:\"Century Gothic\",Verdana,sans-serif;"]);
var ItemTitle = exports.ItemTitle = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-6"
})(["display:block;text-overflow:ellipsis;text-transform:uppercase;white-space:normal;overflow:hidden;margin:10px 0 10px 0;text-align:center;a{font:11px \"Century Gothic\",Verdana,sans-serif;color:#555;cursor:pointer;vertical-align:baseline;text-decoration:none;}.model{color:#999;margin:0 5px 0 5px;}"]);
var CompanyLogo = exports.CompanyLogo = _styledComponents["default"].div.withConfig({
  componentId: "sc-6cvo7e-7"
})(["text-align:center;height:70px;overflow:hidden;"]);
var BellFa = _styledComponents["default"].i.attrs({
  className: "fa fa-bell"
}).withConfig({
  componentId: "sc-6cvo7e-8"
})([""]);
var Bell = exports.Bell = (0, _styledComponents["default"])(BellFa).withConfig({
  componentId: "sc-6cvo7e-9"
})(["background-color:", ";-webkit-transform:rotate(-30deg);-ms-transform:rotate(-30deg);transform:rotate(-30deg);font-size:1.5em;color:white;border-radius:13px;padding:3px;position:absolute;left:-10px;top:-10px;"], function (props) {
  return props.theme.mainLight;
});
var TimesFa = _styledComponents["default"].i.attrs({
  className: "fa fa-times"
}).withConfig({
  componentId: "sc-6cvo7e-10"
})([""]);
var RefusedIcon = exports.RefusedIcon = (0, _styledComponents["default"])(TimesFa).withConfig({
  componentId: "sc-6cvo7e-11"
})(["color:red;font-size:22px;margin-top:10px;"]);
var HourGlassHalfFa = _styledComponents["default"].i.attrs({
  className: "fa fa-hourglass-half"
}).withConfig({
  componentId: "sc-6cvo7e-12"
})([""]);
var HourGlassHalfIcon = exports.HourGlassHalfIcon = (0, _styledComponents["default"])(HourGlassHalfFa).withConfig({
  componentId: "sc-6cvo7e-13"
})(["color:orange;font-size:22px;margin-top:10px;"]);
var StopCircleFa = _styledComponents["default"].i.attrs({
  className: "fa fa-stop-circle"
}).withConfig({
  componentId: "sc-6cvo7e-14"
})([""]);
var StopCircleIcon = exports.StopCircleIcon = (0, _styledComponents["default"])(StopCircleFa).withConfig({
  componentId: "sc-6cvo7e-15"
})(["font-size:22px;margin-top:10px;"]);