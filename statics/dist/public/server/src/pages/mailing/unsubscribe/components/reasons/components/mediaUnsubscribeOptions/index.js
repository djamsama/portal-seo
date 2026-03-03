"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _mediaSubscriptionSwitch = _interopRequireDefault(require("./components/mediaSubscriptionSwitch"));
var _radioField = _interopRequireDefault(require("./components/radioField"));
var _sectionMediaTypeTab = _interopRequireDefault(require("./components/sectionMediaTypeTab"));
var _mediaUnsubscribeOptions = require("./styles/mediaUnsubscribeOptions");
var MediaUnsubscribeOptions = function MediaUnsubscribeOptions(_ref) {
  var _allMediaSubscription;
  var allMediaSubscriptions = _ref.allMediaSubscriptions,
    site = _ref.site,
    selectedOption = _ref.selectedOption,
    onRadioOptionChange = _ref.onRadioOptionChange;
  return /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.Container, null, /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.UnsubscribePreferences, null, /*#__PURE__*/_react["default"].createElement(_radioField["default"], {
    id: "globalUnsubscribe",
    labelId: "fo_unsubscribe_all_mediatypes_label",
    radioButtonName: "unsubscribe-all-mediatypes",
    onClick: function onClick() {
      return onRadioOptionChange(1);
    },
    checked: selectedOption === 1,
    value: 1
  })), /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.UnsubscribePreferences, null, /*#__PURE__*/_react["default"].createElement(_radioField["default"], {
    id: "partialUnsubscribe",
    labelId: "fo_unsubscribe_mediatype_label",
    radioButtonName: "unsubscribe-by-communication",
    onClick: function onClick() {
      return onRadioOptionChange(2);
    },
    checked: selectedOption === 2,
    value: 2
  })), /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.SectionMediaTypeForm, {
    selected: selectedOption === 2
  }, /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab["default"], {
    labelId: "fo_unsubscribe_newsletter_univers_title"
  }, /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.UniversesListContainer, null, allMediaSubscriptions === null || allMediaSubscriptions === void 0 || (_allMediaSubscription = allMediaSubscriptions.newsletterSubscriptions) === null || _allMediaSubscription === void 0 ? void 0 : _allMediaSubscription.map(function (mediaSubscription) {
    return /*#__PURE__*/_react["default"].createElement(_mediaSubscriptionSwitch["default"], {
      key: mediaSubscription.universeId,
      site: site,
      mediaSubscription: mediaSubscription
    });
  }))), /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab["default"], {
    labelId: "fo_unsubscribe_newsletter_thematic_title"
  }, /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.SectionMediaTypeDescription, null, (allMediaSubscriptions === null || allMediaSubscriptions === void 0 ? void 0 : allMediaSubscriptions.thematicSubscription) && /*#__PURE__*/_react["default"].createElement(_mediaSubscriptionSwitch["default"], {
    site: site,
    hideLeftBorder: true,
    mediaSubscription: allMediaSubscriptions.thematicSubscription
  }))), /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab["default"], {
    labelId: "fo_unsubscribe_newsletter_emag_title"
  }, /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.SectionMediaTypeDescription, null, (allMediaSubscriptions === null || allMediaSubscriptions === void 0 ? void 0 : allMediaSubscriptions.emagSubscription) && /*#__PURE__*/_react["default"].createElement(_mediaSubscriptionSwitch["default"], {
    site: site,
    hideLeftBorder: true,
    mediaSubscription: allMediaSubscriptions.emagSubscription
  }))), /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab["default"], {
    labelId: "fo_unsubscribe_newsletter_targeted-emailing_title"
  }, /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.SectionMediaTypeDescription, null, (allMediaSubscriptions === null || allMediaSubscriptions === void 0 ? void 0 : allMediaSubscriptions.targetedEmailingSubscription) && /*#__PURE__*/_react["default"].createElement(_mediaSubscriptionSwitch["default"], {
    site: site,
    hideLeftBorder: true,
    mediaSubscription: allMediaSubscriptions.targetedEmailingSubscription
  }))), /*#__PURE__*/_react["default"].createElement(_sectionMediaTypeTab["default"], {
    labelId: "fo_unsubscribe_newsletter_mailing-scenario_title"
  }, /*#__PURE__*/_react["default"].createElement(_mediaUnsubscribeOptions.SectionMediaTypeDescription, null, (allMediaSubscriptions === null || allMediaSubscriptions === void 0 ? void 0 : allMediaSubscriptions.otherMailSubscription) && /*#__PURE__*/_react["default"].createElement(_mediaSubscriptionSwitch["default"], {
    site: site,
    hideLeftBorder: true,
    mediaSubscription: allMediaSubscriptions.otherMailSubscription
  })))));
};
var _default = exports["default"] = MediaUnsubscribeOptions;