"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _labels = require("../../../../../commons/labels");
var SITE_LABEL = "@siteLabel@";
var NotificationsSubscriptionMySpaceHelper = exports["default"] = /*#__PURE__*/function () {
  function NotificationsSubscriptionMySpaceHelper(intl) {
    (0, _classCallCheck2["default"])(this, NotificationsSubscriptionMySpaceHelper);
    this.intl = intl;
  }

  /**
   * Creation de l'objet qui contient les messages de notification
   *
   * @param {*} currentSiteLabel
   * @param {*} titleNotification
   * @param {*} successMessageKey
   * @param {*} failedMessageKey
   */
  return (0, _createClass2["default"])(NotificationsSubscriptionMySpaceHelper, [{
    key: "getNotification",
    value: function getNotification(titleNotification, currentSiteLabel, successMessageKey, failedMessageKey) {
      return {
        success: {
          title: titleNotification,
          message: this.intl.formatMessage({
            id: successMessageKey
          }).replace(SITE_LABEL, currentSiteLabel)
        },
        error: {
          title: titleNotification,
          message: this.intl.formatMessage({
            id: failedMessageKey
          })
        }
      };
    }

    /**
     * Creation des messages pour les notifications
     *
     * @param {*} intl
     * @param {*} mySpaceMy
     */
  }, {
    key: "notificationOps",
    value: function notificationOps() {
      var mySpaceMy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _labels.MY_UPPERFIRST;
      /** **  Titre de la notification   ** */
      // TODO: Pour etre comme l'exkistant il faut ajouter le titre des notifications ("notification") de myspace traduit (demander traduction)
      var currentSiteLabel = this.intl.formatMessage({
        id: "global_casedsitelabel"
      });
      var titleNotification = mySpaceMy + currentSiteLabel;
      /** **  /Titre de la notification   ** */
      return {
        "default": {
          subscribe: this.getNotification(titleNotification, currentSiteLabel, "fo_myspace_subscription_askSubscriptionSuccess", "fo_myspace_subscription_askSubscriptionFailed"),
          unsubscribe: this.getNotification(titleNotification, currentSiteLabel, "fo_myspace_subscription_askUnsubscriptionSuccess", "fo_myspace_subscription_askSubscriptionFailed")
        },
        emag: {
          subscribe: this.getNotification(titleNotification, currentSiteLabel, "fo_myspace_subscription_emagSubcriptionNotificationSuccess", "fo_myspace_subscription_askSubscriptionFailed"),
          unsubscribe: this.getNotification(titleNotification, currentSiteLabel, "fo_myspace_subscription_emagUnsubcriptionNotificationSuccess", "fo_myspace_subscription_askSubscriptionFailed")
        }
      };
    }
  }]);
}();