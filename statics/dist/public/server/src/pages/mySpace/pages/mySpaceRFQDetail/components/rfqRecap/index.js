"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../../../components/contextComponent");
var _definitionsList = _interopRequireDefault(require("../../../../../../components/definitionsList"));
var _rfqRecap = require("./styles/rfqRecap");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant gérant le rappel d'une rfq.
 */
var MySpaceRFQDetail = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceRFQDetail(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceRFQDetail);
    _this = _callSuper(this, MySpaceRFQDetail, [props, context]);
    _this.rfq = props.rfq;
    _this.title = props.title;
    return _this;
  }
  (0, _inherits2["default"])(MySpaceRFQDetail, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceRFQDetail, [{
    key: "renderLi",
    value:
    /**
     *
     * @param {*} sectionContents
     */
    function renderLi(sectionContents) {
      if (sectionContents.length > 0) {
        return /*#__PURE__*/_react["default"].createElement(_rfqRecap.Liste, null, sectionContents.map(function (sectionContent) {
          return /*#__PURE__*/_react["default"].createElement("li", {
            key: "liContent".concat(sectionContent.label)
          }, sectionContent.label && /*#__PURE__*/_react["default"].createElement(_rfqRecap.SubTitle, null, sectionContent.label, " : "), sectionContent.value);
        }));
      }
    }

    /**
     *
     * @param {*} content
     */
  }, {
    key: "renderRfq",
    value: function renderRfq(title) {
      var intl = this.props.intl;
      var rqfContent = {
        title: "",
        sections: []
      };
      if (title) {
        // Titre du tableau
        rqfContent.title = intl.formatMessage({
          id: "foj_myspace_rfqDetail_recap_title"
        });
      }

      // Pour chaque rubrique on ajoute un tableau un object {title,content}
      // Type de produit
      rqfContent.sections.push({
        title: intl.formatMessage({
          id: "foj_myspace_rfqDetail_recap_productType"
        }),
        content: this.rfq && this.rfq.productType ? this.rfq.productType : ""
      });

      // Caractéristiques
      rqfContent.sections.push({
        title: intl.formatMessage({
          id: "foj_myspace_rfqDetail_recap_productSpecifications"
        }),
        content: this.rfq && this.rfq.features ? this.renderLi(this.rfq.features) : ""
      });

      // Quantité
      rqfContent.sections.push({
        title: intl.formatMessage({
          id: "foj_myspace_rfqDetail_recap_productQuantity"
        }),
        content: this.rfq.quantity
      });

      // Description
      var descriptionUlContent = [{
        label: intl.formatMessage({
          id: "foj_rfq_form_confirm_project_start_label"
        }),
        value: intl.formatMessage({
          id: this.rfq.buyPeriod ? this.rfq.buyPeriod : ""
        })
      }, {
        label: intl.formatMessage({
          id: "foj_rfq_form_confirm_project_budget_label"
        }),
        value: this.rfq.budget
      }, {
        label: intl.formatMessage({
          id: "foj_tender_form_confirm_deliveryAddress_label"
        }),
        value: this.rfq.deliveryAddress
      }];
      rqfContent.sections.push({
        title: intl.formatMessage({
          id: "foj_myspace_rfqDetail_recap_productDescritption"
        }),
        content: this.renderLi(descriptionUlContent)
      });
      return rqfContent;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_definitionsList["default"], (0, _extends2["default"])({}, this.props, {
        content: this.renderRfq(this.props.title)
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceRFQDetail);