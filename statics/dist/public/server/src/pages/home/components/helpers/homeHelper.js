"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _globalHelper = require("../../../../helpers/globalHelper");
var _trackingElement = require("../../../../models/trackingElement");
var _constants = require("../../../../commons/constants");
var HomeHelper = exports["default"] = /*#__PURE__*/function () {
  function HomeHelper() {
    (0, _classCallCheck2["default"])(this, HomeHelper);
  }
  return (0, _createClass2["default"])(HomeHelper, null, [{
    key: "mergeNewAndPushItems",
    value:
    /**
     * Listes des items (nouveaux produits, nouveaux projects ... de la homePage)
     *
     * @param {*} datas
     * @param {*} nbMax nombre max par ligne
     */
    function mergeNewAndPushItems(datas, nbMax) {
      if (!nbMax) {
        throw new Error("Need nbMax to merge items");
      }
      var data = [];
      var flagDatas = {};
      if (datas) {
        // Les pushed
        if (datas[0] && datas[0].data && datas[0].data.content && datas[0].data.content.length > 0) {
          /** nombre max d'item dans une ligne */
          var need = nbMax - datas[0].data.content.length;
          var data1 = _globalHelper.GlobalHelper.shuffle(datas[0].data.content.slice(0, need).map(function (el) {
            // eslint-disable-next-line no-param-reassign
            el.pushed = true;
            flagDatas[el.id] = true;
            return el;
          }));
          data = (0, _toConsumableArray2["default"])(data1);
        }

        // Les non pushed
        if (data.length < nbMax && datas[1] && datas[1].data && datas[1].data.content) {
          var _need = nbMax - data.length; // il reste 'need' place
          var datasNatural = []; // Les items non pushed
          datas[1].data.content.map(function (el) {
            if (!flagDatas[el.id]) {
              // Il n'est pas dans les pushed on l'ajoute
              // eslint-disable-next-line no-param-reassign
              el.pushed = false;
              datasNatural.push(el);
            }
            return true;
          });
          var data2 = _globalHelper.GlobalHelper.shuffle(datasNatural.slice(0, _need));
          data = [].concat((0, _toConsumableArray2["default"])(data), (0, _toConsumableArray2["default"])(data2));
        }
      }
      return data;
    }

    /**
     * Fait le tracking statsco "view" et renvoie le trackingElement pour le click
     *
     * @param {TrackingItem} item
     * @param {TrackingElementType} typeItem
     * @param {number} placementId
     * @param {number} pageTypeId
      * @param {boolean} isProduct
     */
  }, {
    key: "getTrackElementClick",
    value: function getTrackElementClick(item, typeItem, placementId, pageTypeId) {
      var trackingItem = {
        elementId: item.id,
        companyId: item && item.company && item.company.id ? item.company.id : null,
        // $FlowFixMe
        elementTypeId: typeItem,
        placementId: placementId,
        displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS
      };
      if (typeItem === _constants.ELEMENT_TYPE.product) {
        trackingItem.id = item.id;
      }
      trackingItem.pushed = !!item.pushed;
      trackingItem.campaignId = item.campaignId;
      var trackingElement = new _trackingElement.TrackingElement(trackingItem);
      trackingElement.pageTypeId = pageTypeId;
      return trackingElement.addEventType(_constants.TRACKING_EVENTS.EVENT_TYPE_CLICK).addDisplayMode(_constants.TRACKING_EVENTS.MODE_THUMBNAILS);
    }
  }]);
}();