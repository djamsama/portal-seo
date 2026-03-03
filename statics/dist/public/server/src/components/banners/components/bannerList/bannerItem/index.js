"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _link = require("../../../../link");
var _globalHelper = require("../../../../../helpers/globalHelper");
var _banners = require("../../../styles/banners.jsx");
var _trackingElement = require("../../../../../models/trackingElement");
var _constants = require("../../../../../commons/constants");
var _withTracking = require("../../../../../hoc/withTracking");
var _trackingStatsCo = require("../../../../../commons/tracking/trackingStatsCo");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var BannerItem = function BannerItem(props) {
  var banner = props.banner;
  var ref = (0, _react.useRef)(null);
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    skip: false
  };
  var callbackFunction = function callbackFunction(entries, observer) {
    var viewedPageId = props.viewedPageId;
    entries.forEach(function (entry) {
      if (entry.target.parentElement.parentNode.className.includes("is-selected") && entry.target.complete) {
        // Exclut les images du carrousel qui ne sont pas affichées.
        setTimeout(function () {
          if (entry.isIntersecting) {
            var trackingItem = {
              eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_VIEW,
              elementUrlType: _trackingStatsCo.MONGO_TRACKING_URL.Banner,
              campaignId: banner.campaignId,
              elementId: banner.id,
              companyId: banner.companyId,
              elementTypeId: _constants.ELEMENT_TYPE.banner,
              placementId: banner.refPlacementId,
              // eslint-disable-next-line no-nested-ternary
              deviceId: _globalHelper.GlobalHelper.isMobileOnly() ? 2 : _globalHelper.GlobalHelper.isTabletSmall() ? 3 : 1,
              viewedPageId: props.viewedPageId,
              action: "view",
              orderId: banner.id,
              pageTypeId: props.pageTypeId
            };
            var trackingElement = new _trackingElement.TrackingElement(trackingItem);

            // Tracking call
            if (props.viewedPageId && props.doTracking && !banner.seen) {
              props.doTracking(trackingElement, viewedPageId);
              banner.seen = true;
              observer.unobserve(entry.target);
            }
          } else {
            observer.unobserve(entry.target);
          }
        }, 200);
      }
    });
  };
  (0, _react.useLayoutEffect)(function () {
    var observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) observer.observe(ref.current);
    return function () {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);
  var Component = _banners.BannerLink;
  if (banner) {
    var trackingItem = {
      eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_VIEW,
      elementUrlType: _trackingStatsCo.MONGO_TRACKING_URL.Banner,
      campaignId: banner.campaignId,
      elementId: banner.id,
      companyId: banner.companyId,
      elementTypeId: _constants.ELEMENT_TYPE.banner,
      placementId: banner.refPlacementId,
      // eslint-disable-next-line no-nested-ternary
      deviceId: _globalHelper.GlobalHelper.isMobileOnly() ? 2 : _globalHelper.GlobalHelper.isTabletSmall() ? 3 : 1,
      viewedPageId: props.viewedPageId,
      action: "click",
      orderId: banner.id,
      pageTypeId: props.pageTypeId
    };
    var trackingElement = new _trackingElement.TrackingElement(trackingItem);
    var divClassType = _globalHelper.GlobalHelper.isTabletSmall() ? "br-item-tab" : "br-item";
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: divClassType
    }, /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
      component: Component,
      to: banner.redirectUrl,
      title: banner.title,
      alt: banner.title,
      encrypt: true,
      track: trackingElement
    }, /*#__PURE__*/_react["default"].createElement("img", {
      ref: ref,
      src: _globalHelper.GlobalHelper.isMobileOnly() && !_globalHelper.GlobalHelper.isTabletSmall() ? banner.imageMobileUrl : banner.imageUrl,
      alt: banner.title
    })));
  }
  return /*#__PURE__*/_react["default"].createElement("div", null);
};
var _default = exports["default"] = (0, _withTracking.WithTracking)(BannerItem);