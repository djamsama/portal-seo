"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _reactIntl = require("react-intl");
var _descriptionTranslation = _interopRequireDefault(require("../../components/descriptionTranslation"));
var _descriptionTranslationActions = require("../../actions/descriptionTranslationActions");
var _productDescription = require("../../reducers/productDescription");
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTranslation: function getTranslation(productId, context) {
      return dispatch((0, _descriptionTranslationActions.loadDescriptionTranslation)(productId, context));
    }
  };
};

// State to props.
var mapStateToProps = function mapStateToProps(state) {
  return {
    // supplierName: state.quotationValidation.leadsQuoteInformations.supplierName
    isLoading: state[_productDescription.ProductDescriptionReducerName].isLoading,
    productDescriptionTranslation: state[_productDescription.ProductDescriptionReducerName].ProductDescriptionTranslation
  };
};
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactIntl.injectIntl)(_descriptionTranslation["default"]));