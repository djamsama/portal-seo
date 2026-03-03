"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hightLightClassName = exports.VideoTagSm = exports.ShopTagSm = exports.NewTagSm = exports.HightLightTagWrapper = exports.HightLightTagSm = exports.GreenTagSm = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/** Style commun aux tags, indépendamment de leur taille. */
var baseTagStyle = (0, _styledComponents.css)(["background-image:url(", "/common/pictos/tag-new-eco-green.svg);background-repeat:no-repeat;width:44px !important;height:22px;margin-bottom:2px;"], function (props) {
  return props.theme.pathImg;
});

/** New tag S sized. */
var NewTagSm = exports.NewTagSm = _styledComponents["default"].div.withConfig({
  componentId: "sc-14o3l-0"
})(["", " background-position:-42px -28px;"], baseTagStyle);

/** Video tag S sized. */
var VideoTagSm = exports.VideoTagSm = _styledComponents["default"].div.withConfig({
  componentId: "sc-14o3l-1"
})(["", " background-position:1px -28px;"], baseTagStyle);
/** Shop tag S sized. */
var ShopTagSm = exports.ShopTagSm = _styledComponents["default"].div.withConfig({
  componentId: "sc-14o3l-2"
})(["background-repeat:no-repeat;background-size:44px 16px;", " background-image:url(", "/common/pictos/shopFlag.png);background-position:center;"], baseTagStyle, function (props) {
  return props.theme.pathImg;
});
var GreenTagSm = exports.GreenTagSm = _styledComponents["default"].div.withConfig({
  componentId: "sc-14o3l-3"
})(["", " background-position:-85px -30px;"], baseTagStyle);

/** Video tag S sized. */
var HightLightTagSm = exports.HightLightTagSm = _styledComponents["default"].span.withConfig({
  componentId: "sc-14o3l-4"
})(["font-size:1em;color:#555;font-style:normal;position:absolute;top:-22px;right:0;"]);

/** Video tag S sized. */
var HightLightTagWrapper = exports.HightLightTagWrapper = _styledComponents["default"].div.withConfig({
  componentId: "sc-14o3l-5"
})(["background-position:-108px 0;font-size:1em;color:#555;font-style:normal;position:absolute;top:-22px;right:0;"]);
var hightLightClassName = exports.hightLightClassName = "fa fa-bookmark";