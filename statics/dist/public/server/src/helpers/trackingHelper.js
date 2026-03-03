"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackingHelper = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _groupBy = _interopRequireDefault(require("lodash/groupBy"));
var _camelCase = _interopRequireDefault(require("lodash/camelCase"));
var _trackingElement = require("../models/trackingElement");
var _constants = require("../commons/constants");
var _withGoogleAnalytics = require("../hoc/withGoogleAnalytics");
/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
var TrackingHelper = exports.TrackingHelper = /*#__PURE__*/function () {
  function TrackingHelper() {
    (0, _classCallCheck2["default"])(this, TrackingHelper);
  }
  return (0, _createClass2["default"])(TrackingHelper, null, [{
    key: "transformTrackingList",
    value:
    /**
     *
     * @param {*} lists la liste a transformer
     * @param {*} numberWeWant le nombre de champ que l'on prend par 'groupBy'. Default value: 2
     * @param {*} groupByKey  la clé sur laquelle on va 'groupBy'. Default value: 'companyId'
     */
    function transformTrackingList(list, type) {
      var numberWeWant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var groupByKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "companyId";
      var properties = ["companyId", "elementId", "elementTypeId"];
      var filteredList = [];
      list.forEach(function (elt) {
        var newElt = {};
        properties.forEach(function (property) {
          newElt[property] = elt[property];
        });
        filteredList.push(newElt);
      });
      var transformedList = [];
      var listGrouped = (0, _groupBy["default"])(filteredList, groupByKey);
      Object.keys(listGrouped).forEach(function (key) {
        transformedList = [].concat((0, _toConsumableArray2["default"])(transformedList), (0, _toConsumableArray2["default"])(listGrouped[key].slice(0, numberWeWant)));
      });
      return transformedList;
    }

    /**
     *
     * @param {*} list la liste a transformer
     * @param {ELEMENT_TYPE} viewedContentType ( ̀ logo`, `product`,  `pdf`, `project`, `trends` ou  `emag`)
     *  s'il n'est pas fourni on recupere le list.elt.placementId
     */
    // $FlowFixMe
  }, {
    key: "registerVisitContentList",
    value: function registerVisitContentList(list, viewedContentType) {
      var trackatoredList = list.map(function (elt) {
        return {
          companyId: elt.companyId,
          elementId: elt.elementId,
          // elementTypeId: elt.elementType,
          elementTypeId: viewedContentType ? _constants.ELEMENT_TYPE[viewedContentType] : elt.elementType
        };
      });
      return trackatoredList;
    }

    /**
     *
     * @param Array<DataTrackingElement> list la liste d'element a envoyé
     * @param {DataTrackingElement} rvc ( ̀ logo`, `product`,  `pdf`, `project`, `trends` ou  `emag`)
     *  s'il n'est pas fourni on recupere le list.elt.placementId
     *
     */
  }, {
    key: "addRegisterVisitContentToList",
    value: function addRegisterVisitContentToList(companyId, elementId, elementTypeId, list) {
      var newList = !list || list.length <= 0 ? [] : list;
      newList.push({
        companyId: companyId,
        elementId: elementId,
        elementTypeId: typeof elementTypeId === "number" ? elementTypeId : _constants.ELEMENT_TYPE[elementTypeId]
      });
      return newList;
    }

    /**
     * On récupère une liste de produits/emags/trends/project qu'on va transformer en une liste d'element a envoyer pour le tracking
     *
     * @param { Array<Brand>} items
     * @param { boolean } pushed
     * @param {VeContext} context
     */
  }, {
    key: "itemsToTrackingElements",
    value: function itemsToTrackingElements(items) {
      var elementsInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        pushed: false,
        elementTypeId: _constants.ELEMENT_TYPE.product,
        placementId: 0,
        displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
        brand: false
      };
      var context = arguments.length > 2 ? arguments[2] : undefined;
      // $FlowFixMe
      var trackingElements = [];
      if (items.length > 0) {
        trackingElements = items.map(function (item) {
          var elementTracked = {};
          if (item.id) {
            elementTracked.elementId = item.id;
          }
          if (item.campaignId) {
            elementTracked.campaignId = item.campaignId;
          }
          if (item.entityId) {
            elementTracked.entityId = item.entityId;
          }
          if (item.campaignId) {
            elementTracked.campaignId = item.campaignId;
          }
          if (elementsInfo && elementsInfo.brand) {
            // c'est un brand c'est donc l'item.id qu'il faut mettre dans companyId
            elementTracked.companyId = item.id;
          } else if (item && item.company && item.company.id && elementsInfo && elementsInfo.brand !== true) {
            elementTracked.companyId = item.company.id;
          }
          if (elementsInfo && (elementsInfo.elementTypeId || elementsInfo.elementTypeId === 0)) {
            elementTracked.elementTypeId = elementsInfo.elementTypeId;
          }
          if (elementsInfo && (elementsInfo.placementId || elementsInfo.placementId === 0)) {
            elementTracked.placementId = elementsInfo.placementId;
          }
          if (elementsInfo && elementsInfo.displayMode) {
            elementTracked.displayMode = elementsInfo.displayMode;
          }
          return elementTracked;
        });
      }
      var trackItem = {
        elementList: trackingElements,
        pushed: elementsInfo.pushed
      };
      if (context) {
        trackItem.context = context;
      }
      return new _trackingElement.TrackingElement(trackItem);
    }

    /**
     * Retourne true si deja tracké
     *
     * @param {TrackingElement} trackingElement
     * @param { tracked } Tracked
     */
    // $FlowFixMe
  }, {
    key: "isAlreadyTrack",
    value: function isAlreadyTrack(trackingElement, tracked) {
      var id = TrackingHelper.getTrackingListId(trackingElement);
      return tracked[id] !== undefined;
    }

    /**
     *  Creation d'un id pour une liste trackée
     * @param {TrackingElement} element
     */
  }, {
    key: "getTrackingListId",
    value: function getTrackingListId(element) {
      var listId = element.elementList.sort().map(function (el) {
        return el.elementId;
      }).join();
      if (element.eventType) {
        listId += element.eventType + element.displayMode + element.pushed.toString();
      }
      return listId;
    }

    /**
     *  Creation d'un id pour un element tracké
     *
     * @param {TrackingElement} element
     */
  }, {
    key: "getTrackingId",
    value: function getTrackingId(element) {
      if (element) {
        var elementId = element && element.elementId ? element.elementId.toString() : "";
        var elementPushed = element && element.pushed ? element.pushed.toString() : "";
        return "".concat(elementId).concat(element.eventType).concat(element.displayMode).concat(elementPushed);
      }
      console.warn("Cannot getTrackingId undefined element");
      return null;
    }

    /**
     * Compteur
     *
     * @param {*} id
     * @param {*} current
     *
     */
  }, {
    key: "count",
    value: function count(id, current) {
      var formattedId = (0, _camelCase["default"])(id);
      if (!current) {
        return {
          now: 0,
          after: 1
        };
      }
      if (!current[formattedId] || typeof current[formattedId] !== "number") {
        return {
          now: 0,
          after: 1
        };
      }
      return {
        now: current[formattedId],
        after: current[formattedId] + 1
      };
    }

    /**
     * Envoi d'un Event GA
     *
     * @param {*} newEvent
     *
     */
  }, {
    key: "sendGaTrackingEvent",
    value: function sendGaTrackingEvent(newEvent) {
      try {
        if (newEvent && newEvent.category && newEvent.action) {
          _withGoogleAnalytics.googleAnalytics.event(newEvent);
        } else {
          console.warn(" newEvent not send invalid parameters");
        }
      } catch (error) {
        console.warn(" newEvent not send ", [newEvent, error]);
      }
    }
  }, {
    key: "getRequestTypeFromRequest",
    value: function getRequestTypeFromRequest(requestType, requestButtonLayout) {
      // Identification de type de la demande (Doc, Devis, Ou, Tel, Question).
      var requestTypeValue = null;
      switch (requestType) {
        case "DOC":
          requestTypeValue = "Doc";
          break;
        case "QUESTION":
          requestTypeValue = "Question";
          break;
        case "QUOTE":
          requestTypeValue = "Devis";
          break;
        case "WHERE_TO_BUY":
          requestTypeValue = "Ou";
          break;
        case "WHERE_TO_BUY_CONTACT_DEALER":
          requestTypeValue = "Tel";
          break;
        case "NOTATION_DEALER":
        case "NOTATION_VIRTUAL_STORE":
          requestTypeValue = "_NotationDistri";
          break;
        case "NOTATION_MAIN_CONTACT":
          requestTypeValue = "_NotationMM";
          break;
        case "NOTATION_AREA_MANAGER":
          requestTypeValue = "_NotationRZ";
          break;
        case "NO_SUPPLIER":
          requestTypeValue = "_NoSupplier";
          break;
        default:
          requestTypeValue = "Contact";
          break;
      }
      if (requestButtonLayout === "SMALL") {
        requestTypeValue += "Small";
      }
      return "Request".concat(requestTypeValue);
    }
  }, {
    key: "getTypeFromContactType",
    value: function getTypeFromContactType(contacType) {
      var requestTypeValue = "";
      switch (contacType) {
        case "DEALER":
        case "VIRTUAL_STORE":
          requestTypeValue += "Distri";
          break;
        case "MAIN_CONTACT":
          requestTypeValue += "MM";
          break;
        case "AREA_MANAGER":
          requestTypeValue += "RZ";
          break;
        case "NO_SUPPLIER":
          requestTypeValue += "NoSupplier";
          break;
        default:
          break;
      }
      return requestTypeValue;
    }
  }, {
    key: "getRequestPriceTypeFromRequest",
    value: function getRequestPriceTypeFromRequest(requestType, item) {
      var requestTypeValue = "None/";
      if (item && item.productPrice) {
        switch (item.productPrice.priceType) {
          case "INDICATIVE_PRICE":
            requestTypeValue = "Indicative/";
            break;
          case "PRICE_FROM":
            requestTypeValue = "From/";
            break;
          case "PRICE_RANGE":
            requestTypeValue = "Range/";
            break;
          default:
            break;
        }
      }
      if (item && item.type) {
        requestTypeValue += TrackingHelper.getTypeFromContactType(item.type);
      }
      return requestTypeValue;
    }
  }, {
    key: "getSourceTypeFromRequest",
    value: function getSourceTypeFromRequest(itemType) {
      var sourceTypeValue = "";
      switch (itemType) {
        case "PRODUCT":
          sourceTypeValue = "Produit";
          break;
        case "NEWS":
          sourceTypeValue = "Press";
          break;
        case "CATALOG":
          sourceTypeValue = "PDF";
          break;
        case "EXHIBITION":
          sourceTypeValue = "Exhibition";
          break;
        case "PROJECT":
          sourceTypeValue = "Project";
          break;
        case "TREND":
          sourceTypeValue = "Trend";
          break;
        default:
          sourceTypeValue = ""; // TODO
          break;
      }
      return sourceTypeValue;
    }
  }, {
    key: "getLabelFromRequest",
    value: function getLabelFromRequest(note) {
      if (!note && note !== 0) {
        return "None";
      }
      return "".concat((Math.round(note * 2) / 2).toString());
    }
  }]);
}();