"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithTracking = void 0;
var _reactRedux = require("react-redux");
var _trackingAction = require("../actions/trackingAction");
var _trackingElement = require("../models/trackingElement");
var _trackingHelper = require("../helpers/trackingHelper");
/**
 * High Order Component pour le tracking
 * @param {*} InnerComponent
 */
var WithTracking = exports.WithTracking = function WithTracking(InnerComponent) {
  var mapStateToProps = function mapStateToProps(application) {
    return {
      viewedPageId: application && application.Tracking && application.Tracking.viewedPagedId ? application.Tracking.viewedPagedId : null,
      tracked: application && application.Tracking && application.Tracking.tracked ? application.Tracking.tracked : null,
      TrackingElement: _trackingElement.TrackingElement,
      TrackingHelper: _trackingHelper.TrackingHelper
    };
  };
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      // Méthode a appeler pour tracker Mysql
      doTrackingMysql: function doTrackingMysql(bodyTrackingParam, viewedPageId) {
        dispatch((0, _trackingAction.trackAction)(bodyTrackingParam, viewedPageId, "mysql"));
      },
      // Méthode a appeler pour tracker Mongo
      doTracking: function doTracking(trackingElement, viewedPageId, lang) {
        dispatch((0, _trackingAction.trackAction)(trackingElement, viewedPageId, lang));
      },
      // Il injecter ce hoc et appeler cette methode pour obtenir
      // le viewedPageId a passer en paramètre à doTracking et doTrackingMysql.
      // On a besoin de l'appeler une seule fois
      getViewedPageId: function getViewedPageId(bodyTrackingParam, language) {
        dispatch((0, _trackingAction.getViewedPageId)(bodyTrackingParam, language));
      }
    };
  };
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InnerComponent);
};