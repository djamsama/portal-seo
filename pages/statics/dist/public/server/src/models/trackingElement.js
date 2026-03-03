"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackingElement = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _constants = require("../commons/constants");
/**
 * Classe représentant un tracking d'élément du front
 *
 * @export
 * @class TrackingElement
 */
var TrackingElement = exports.TrackingElement = /*#__PURE__*/function () {
  /**
   * Type d'url de tracking
   *
   * @type {string}
   * @memberof TrackingElement
   */

  /**
   * Type d'élément tracké
   *
   * @type {TrackingElementType}
   * @memberof TrackingElement
   */

  /**
   * Id de l'élémént
   *
   * @type {number}
   * @memberof TrackingElement
   */

  /**
   * Indique, si l'évènement est de type click, la cible lors de l'ouverture du lien redirectUrl
   *
   * @type {boolean}
   * @memberof TrackingElement
   */

  /**
   * Id de l'emplacement de l'élément dans la page
   *
   * @type {number}
   * @memberof TrackingElement
   */

  /**
   * Mode d'affichage de l'élément
   *
   * @type {TrackingElementDisplayMode}
   * @memberof TrackingElement
   */

  /**
   * Type d'évènement lié au tracking
   *
   * @type {TrackingType}
   * @memberof TrackingElement
   */

  /**
   * Url de redirection de l'élément en cas de clic
   *
   * @type {string}
   * @memberof TrackingElement
   */

  /**
   * Id du type de la page
   *
   * @type {number}
   * @memberof TrackingElement
   */

  /**
   * Id de la société
   *
   * @type {number}
   * @memberof TrackingElement
   */

  /**
   * token Id pour le tracking des éléments pushés
   *
   * @type {number}
   * @memberof TrackingElement
   */

  /**
   * traking type GA | BAIDU | MONGO
   *
   * @type {TrackerType}
   * @memberof TrackingElement
   */

  /**
   * type de l'ite
   */

  /**
   * Object tracking
   * il doit être construit avec un object qui contient un element ou une liste d'élément
   * et les critères de tracking
      => exple pour un element vue:
      new TrackingElement({
        entityId: 123, Identifiant d'élément
        companyId: 3251, Identifiant de société
        campaignId: 4587, campaignId
        elementTypeId: 4,  element de type product ,
        displayMode: TRACKING_EVENTS.MODE_THUMBNAILS, // c'est un thumbnail
        placementId: 3, // Identifiant d'emplacement
        eventType: TRACKING_EVENTS.EVENT_TYPE_VIEW, // tracking d'un element vue
        context // dans le context il y a le pageTypeId
      }
      => exple pour une liste element vue pushed (brandCloud):
      new TrackingElement({
        "pageTypeId":260,
        "trackerType":"mongo",
        "trackerFrom":"front",
        "eventType":TRACKING_EVENTS.EVENT_TYPE_VIEW,
        "pushed":true,
        "elementList":[
              {
                  "campaignId":199799,
                  "elementId":9708,
                  "companyId":9708,
                  "elementTypeId":ELEMENT_TYPE["logo"],
                  "placementId":3,
                  "displayMode":TRACKING_EVENTS.MODE_THUMBNAILS
              },
              {
                "campaignId":201694,
                "elementId":6933,
                "companyId":6933,
                "elementTypeId":ELEMENT_TYPE["logo"],
                "placementId":3,
                "displayMode":TRACKING_EVENTS.MODE_THUMBNAILS
              }
            ]
      }
   *
   */
  function TrackingElement(item) {
    (0, _classCallCheck2["default"])(this, TrackingElement);
    this.placementId = 0; // Identifiant d'emplacement (table common.ContentPlacement)
    this.elementId = 0; // Identifiant d'élément (produit, catalogue, société, …)
    this.status = 0;
    this.pageTypeId = -1; // Identifiant du type de page (table PageType)
    this.trackerType = "mongo"; // type de tracking mongo/mysql
    this.trackerFrom = "front";
    this.eventType = "view"; // Type d'evenement (view, click, hover ...)
    this.campaignId = null;
    this.companyId = 0;
    this.pushed = false;
    this.clickThrough = false;
    this.displayMode = _constants.TRACKING_EVENTS.MODE_DEFAULT; // Mode d'affichage (thumbnail ou detail) uniquement pour les naturels.
    if (item) {
      this.initItem(item);
      if (this.pageTypeId < 0 && item && item.context && item.context.initData && item.context.initData.pageTypeId) {
        // $FlowFixMe
        this.pageTypeId = item.context.initData.pageTypeId;
      }
    }
  }

  /**
   *
   * @param {TrackingItem | TrackingElement} item
   */
  return (0, _createClass2["default"])(TrackingElement, [{
    key: "initItem",
    value: function initItem(item) {
      if (item) {
        /** tracking d'une liste */
        if (item.elementList) {
          this.elementList = item.elementList;
        }

        /** Identifiant d'élément (produit, catalogue, société, …)  */
        if (item.entityId) {
          // $FlowFixMe
          this.elementId = item.entityId;
        } else if (item.elementId) {
          this.elementId = item.elementId;
        }

        /** entityType
         * Identifiant du type d'élément (table ViewedContentType)
         * ELEMENT_TYPE["logo"] ou 1,
         * ELEMENT_TYPE["product"] ou 4,
         * ELEMENT_TYPE["pdf"] ou  5,
         * ELEMENT_TYPE["project"] ou  8,
         * ELEMENT_TYPE["trends:"] ou  9,
         * ELEMENT_TYPE["emag"] ou  10
         */
        if (item.elementTypeId) {
          this.elementTypeId = item.elementTypeId;
        } else if (item.entityType && typeof item.entityType === "string") {
          this.elementTypeId = _constants.ELEMENT_TYPE[item.entityType.toLowerCase()];
        }
        /** Identifiant de société */
        if (item.companyId) {
          this.companyId = item.companyId;
        }
        /** Identifiant d'emplacement (table common.ContentPlacement)  */
        if (item.placementId) {
          this.placementId = item.placementId;
        } else if (item.isNew) {
          this.placementId = 2;
        }
        /** campaignId */
        if (item.campaignId) {
          this.campaignId = item.campaignId;
        }

        /* mongo/mysql */
        if (item.trackerType) {
          this.trackerType = item.trackerType;
        }
        /** id du type de page  */
        if (item.pageTypeId) {
          this.pageTypeId = item.pageTypeId;
        }

        /** url type de page  */
        if (item.elementUrlType) {
          this.elementUrlType = item.elementUrlType;
        }

        /**
          * trailing =>
          MONGO_TRACKING_URL.SINGLE: /tracking/rest/external/v1/{viewedPageId}/{pageTypeId}/{placementId}/{elementTypeId}/{elementId}/{displayMode}/",
          MONGO_TRACKING_URL.PUSHED: /tracking/rest/external/v1/{viewedPageId}/{pageTypeId}/{campaignId}/{placementId}/{elementTypeId}/{elementId}/{displayMode}/",
          MONGO_TRACKING_URL.SURVEY: /tracking/rest/external/v1/{viewedPageId}/{pageTypeId}/{rating}"
         */
        if (item.trailing) {
          this.trailing = item.trailing;
        }
        /** redirectUrl */
        if (item.redirectUrl) {
          this.redirectUrl = item.redirectUrl;
        }

        /** type de l'event view/click/hover */
        if (item.eventType) {
          this.eventType = item.eventType;
        }
        /** tracking sur des elements pushés (brandCloud ...) */
        if (typeof item.pushed !== "undefined") {
          this.pushed = item.pushed;
        }
        /** tracking sur des survey */
        if (typeof item.survey !== "undefined") {
          if (typeof item.rating === "undefined") {
            throw new Error(" survey should have rating");
          }
          this.survey = item.survey;
          this.rating = item.rating;
          if (typeof item.reasonId !== "undefined") {
            this.reasonId = item.reasonId; // Survey avec une raison selectionnée
          }
        }

        /** reasonId */
        if (item.reasonId) {
          this.reasonId = item.reasonId;
        }

        /** tracking sur des clickThrough */
        if (typeof item.clickThrough !== "undefined") {
          this.clickThrough = item.clickThrough;
        }

        /** trackerFrom (front par defaut) */
        if (item.trackerFrom) {
          this.trackerFrom = item.trackerFrom;
        }
        if (item.deviceId) {
          this.deviceId = item.deviceId;
        }
        if (item.action) {
          this.action = item.action;
        }
        if (item.orderId) {
          this.orderId = item.orderId;
        }
      }
    }
  }, {
    key: "addDisplayMode",
    value: function addDisplayMode(displayMode) {
      this.displayMode = displayMode;
      return this;
    }
  }, {
    key: "addEventType",
    value: function addEventType(eventType) {
      this.eventType = eventType;
      return this;
    }
  }, {
    key: "addTrackerType",
    value: function addTrackerType(trackerType) {
      this.trackerType = trackerType;
      return this;
    }
  }]);
}();