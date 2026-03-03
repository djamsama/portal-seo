"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySpaceQuotationAddressWrapper = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _responsive = _interopRequireDefault(require("../../../../../../../components/styles/responsive"));
var _templateObject;
var media = _responsive["default"].media();
var MySpaceQuotationAddressWrapper = exports.MySpaceQuotationAddressWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-guorzc-0"
})(["", ""], media.screenXsMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    .grid {\n      .column {\n        &:last-child {\n          border-top: 1px solid #dadbdf;\n        }\n      }\n    }\n  "]))));