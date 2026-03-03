"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _constants = require("../../../../../components/constants");
var _recommendedProductsActions = require("../actions/recommendedProductsActions");
var _index = _interopRequireDefault(require("../index"));
var mapStateToProps = function mapStateToProps(application) {
  return {
    isLoading: application.recommendationList && application.recommendationList.isLoading,
    recommendationList: application.recommendationList ? application.recommendationList.products : [],
    kwRefLink: application.recommendationList ? application.recommendationList.kwRefLink : undefined,
    //* *on a des fournisseurs actifs si le boutton est autre que Voir les coordonées  */
    activeSuppliers: application.suppliers && application.suppliers.requestButton && application.suppliers.requestButton.type !== _constants.BUTTON_TYPE.CONTACT_DETAILS && !application.suppliers.drdCustomer
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getRecommendedProducts: _recommendedProductsActions.getRecommendedProducts
  }, dispatch);
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_index["default"]);