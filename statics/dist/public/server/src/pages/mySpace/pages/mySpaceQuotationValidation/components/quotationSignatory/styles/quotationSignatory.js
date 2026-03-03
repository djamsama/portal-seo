"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignatoryTextArea = exports.SignatoryRassurance = exports.SignatoryCgv = exports.SignatoryCard = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _button = _interopRequireDefault(require("../../../../../../../components/styles/button"));
var SignatoryCard = exports.SignatoryCard = _styledComponents["default"].div.withConfig({
  componentId: "sc-1vikikp-0"
})([".separator{margin:20px 0 80px;border:1px solid #e6e6e6;}"]);
var SignatoryTextArea = exports.SignatoryTextArea = _styledComponents["default"].textarea.withConfig({
  componentId: "sc-1vikikp-1"
})(["width:96%;height:50px;padding:2%;font-size:15px;font-family:Arial,sans-serif;color:#333;font-size:1.167em;background-color:#f6f6f6;border:2px solid #e9e9e9;resize:none;margin-bottom:20px;"]);
var SignatoryCgv = exports.SignatoryCgv = _styledComponents["default"].label.withConfig({
  componentId: "sc-1vikikp-2"
})(["display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;line-height:1.25em;margin-bottom:20px;"]);
var SignatoryRassurance = exports.SignatoryRassurance = _styledComponents["default"].div.withConfig({
  componentId: "sc-1vikikp-3"
})(["margin-top:35px;margin-bottom:25px;padding:20px;background-color:#f6f6f6;border-radius:5px;.hightlight{font-size:1.5em;text-align:center;font-family:HurmeGeometricSans_SemiBold,Arial,sans-serif;line-height:1em;text-transform:uppercase;color:#1094e9;margin-bottom:20px;}"]);