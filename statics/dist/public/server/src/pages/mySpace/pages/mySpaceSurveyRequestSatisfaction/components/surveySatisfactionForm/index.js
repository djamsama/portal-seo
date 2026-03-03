"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _reactIntl = require("react-intl");
var _reduxForm = require("redux-form");
var _contextComponent = require("../../../../../../components/contextComponent");
var _fieldValidators = require("../../../../../../components/fieldWithError/validators/fieldValidators");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../../components/fieldWithLabel"));
var _notificationsHelper = _interopRequireDefault(require("../../../../../../helpers/notificationsHelper"));
var _multiFieldCheckbox = _interopRequireDefault(require("./components/multiFieldCheckbox"));
var _rating = _interopRequireDefault(require("./components/rating"));
var _surveySatisfactionForm = require("./styles/surveySatisfactionForm");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable jsx-a11y/anchor-is-valid */ /* eslint-disable no-underscore-dangle */ /* eslint-disable react/sort-comp */
// Composant de presentation du formulaire de sondage acheteur (RFQ et Demandes)
var SurveySatisfactionForm = /*#__PURE__*/function (_ContextComponent) {
  function SurveySatisfactionForm(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, SurveySatisfactionForm);
    _this = _callSuper(this, SurveySatisfactionForm, [props, context]);
    _this.clickSubmit = _this.clickSubmit.bind(_this);
    _this.updateQualityResponseRating = _this.updateQualityResponseRating.bind(_this);
    var qualityResponseRating = context.initData.qualityResponseRating;
    _this.notificationsHelper = new _notificationsHelper["default"](props.intl, null, "global_error_technical");
    _this.state = {
      qualityResponseRating: qualityResponseRating
    };
    return _this;
  }
  (0, _inherits2["default"])(SurveySatisfactionForm, _ContextComponent);
  return (0, _createClass2["default"])(SurveySatisfactionForm, [{
    key: "updateQualityResponseRating",
    value: function updateQualityResponseRating(newRate) {
      // Maj de la note. En fonction de la note le comportement du form est different
      // Si la note est <=2 le commentaire est obligatoire
      // le wording change
      this.setState({
        qualityResponseRating: newRate
      });
    }
  }, {
    key: "clickSubmit",
    value: function clickSubmit(values) {
      var _this$context$initDat = this.context.initData,
        leadTokenId = _this$context$initDat.leadTokenId,
        thanksSurveyPageUrlYes = _this$context$initDat.thanksSurveyPageUrlYes,
        thanksSurveyPageUrlNo = _this$context$initDat.thanksSurveyPageUrlNo;
      var leadContext = this.props.leadContext;
      var params = {
        leadTokenId: leadTokenId,
        qualityResponseRating: this.state.qualityResponseRating
      };
      var thanksSurveyPageUrl = this.state.qualityResponseRating && this.state.qualityResponseRating > 2 ? thanksSurveyPageUrlYes : thanksSurveyPageUrlNo;
      var data = Object.assign(params, values);
      return this.props.onSubmit(data, thanksSurveyPageUrl, leadContext, this.notificationsHelper);
    }

    /**
     * render
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        handleSubmit = _this$props.handleSubmit,
        showAmount = _this$props.showAmount,
        mandatoryComment = _this$props.mandatoryComment,
        intl = _this$props.intl;
      var qualityResponseRating = this.state.qualityResponseRating;
      var currencyList = this.context.initData.currencyList;
      var ratingOpinionsBased = [{
        id: 1,
        labelKey: "foj_myspace_satisfaction_based_opinion_reactivity"
      }, {
        id: 2,
        labelKey: "foj_myspace_satisfaction_based_opinion_advice"
      }];
      var purchasableValues = [{
        id: 1,
        value: "YES",
        labelKey: "fo_global_label_yes"
      }, {
        id: 2,
        value: "NO",
        labelKey: "fo_global_label_no"
      }, {
        id: 3,
        value: "IN_PROGRESS",
        labelKey: "foj_myspace_contacted_visitor_purchase_in_progress"
      }];
      var justificationTitleKey = "foj_myspace_satisfaction_visitor_notation_justification_title_ok";
      var commentReasonKey = "foj_myspace_satisfaction_optional_based_opinion";
      var isCommentRequired = [];
      if (qualityResponseRating && qualityResponseRating <= 2) {
        justificationTitleKey = "foj_myspace_satisfaction_visitor_notation_justification_title_ko";
        commentReasonKey = "foj_myspace_satisfaction_require_based_opinion";
        isCommentRequired = [_fieldValidators.required];
      }
      return /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.SurveySatisfactionWrapper, null, /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.TitleForm, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "foj_myspace_satisfaction_visitor_intro_title"
      }))), /*#__PURE__*/_react["default"].createElement("form", {
        id: "satisfactionForm",
        onSubmit: handleSubmit(this.clickSubmit)
      }, /*#__PURE__*/_react["default"].createElement(_rating["default"], {
        value: qualityResponseRating,
        updateParentState: this.updateQualityResponseRating
      }), /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.TitleForm, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "subTitle"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: justificationTitleKey
      }))), /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.FormBlocContainer, null, /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.AnswerTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_satisfaction_visitor_based_opinion_question"
      })), /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.FormBlocAnswer, null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        component: _multiFieldCheckbox["default"],
        name: "basedOpinionChoices",
        options: ratingOpinionsBased,
        className: "type-checkbox",
        label: ""
      }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: commentReasonKey
      }), " "), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "mandatoryComment"
      }, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        className: "type-textarea",
        name: "commentReason",
        component: "textarea",
        type: "textarea",
        label: "",
        validate: isCommentRequired,
        rows: 6 // Composant de presentation du formulaire
        ,
        mandatory: !!(mandatoryComment || qualityResponseRating && qualityResponseRating <= 2)
      })))), /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.FormBlocContainer, null, /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.AnswerTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_contacted_visitor_purchase"
      })), /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.FormBlocAmount, null, purchasableValues.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: item.id,
          key: item.id,
          style: {
            marginRight: "40px"
          }
        }, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
          id: item.id,
          name: "purchasable",
          value: item.value,
          component: "input",
          type: "radio",
          className: "type-checkbox"
        }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: item.labelKey
        }));
      }), /*#__PURE__*/_react["default"].createElement("div", null, showAmount && /*#__PURE__*/_react["default"].createElement(_surveySatisfactionForm.AmountBloc, null, /*#__PURE__*/_react["default"].createElement(_fieldWithLabel["default"], {
        className: "type-number",
        type: "number",
        component: "input",
        name: "amount",
        label: intl.formatMessage({
          id: "foj_myspace_satisfaction_amount"
        }),
        validate: [_fieldValidators.number]
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reduxForm.Field, {
        name: "currency",
        component: "select",
        className: "type-select"
      }, currencyList.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: item.currencyId,
          value: item.currencyId
        }, item.currency);
      })))))))), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: handleSubmit(this.clickSubmit),
        className: "submit",
        type: "submit",
        value: "Submit"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_satisfaction_send"
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(SurveySatisfactionForm);