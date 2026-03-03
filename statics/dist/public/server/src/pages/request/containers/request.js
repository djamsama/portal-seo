"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _index = _interopRequireDefault(require("../index"));
function mapStateToProps(_ref) {
  var RequestForm = _ref.RequestForm;
  return {
    stepId: RequestForm.stepId,
    contact: RequestForm.contact,
    mainContact: RequestForm.mainContact,
    relatedProducts: RequestForm.relatedProducts,
    requestDetails: RequestForm.requestDetails,
    requestRecoCompanies: RequestForm.requestRecoCompanies,
    priceListContent: RequestForm.priceListContent,
    category: RequestForm.requestTrackEventCategory,
    action: RequestForm.requestTrackEventAction,
    oldStep: RequestForm.oldStep,
    multiRequestConfirmation: RequestForm.multiRequestConfirmation,
    relatedCompanies: RequestForm.relatedCompanies
  };
}
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps)((0, _reactIntl.injectIntl)(_index["default"]));