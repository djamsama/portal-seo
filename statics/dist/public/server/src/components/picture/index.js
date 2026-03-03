"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _lazysizes = _interopRequireDefault(require("lazysizes"));
require("lazysizes/plugins/attrchange/ls.attrchange");
var _omit = _interopRequireDefault(require("lodash/omit"));
var _excluded = ["alt", "src", "sources", "lazy", "onLoad", "dataCy"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // eslint-disable-next-line no-unused-vars
// Permet le lazy loading des images
// Module gérant le rafraichissement des éléments lazy loadés
/** Types d'images manipulées. */
var imageTypes = {
  JPG: {
    extension: "jpg",
    mimeType: "image/jpeg"
  },
  JPEG: {
    extension: "jpeg",
    mimeType: "image/jpeg"
  },
  WEBP: {
    extension: "webp",
    mimeType: "image/webp"
  },
  PNG: {
    extension: "png",
    mimeType: "image/png"
  }
};
/**
 * Composant permettant la gestion des différents formats d'image ainsi que le côté resposif de leur affichage.
 */
var Picture = exports["default"] = /*#__PURE__*/function (_Component) {
  function Picture(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Picture);
    _this = _callSuper(this, Picture, [props]);
    _this.renderPicture = _this.renderPicture.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Picture, _Component);
  return (0, _createClass2["default"])(Picture, [{
    key: "renderPicture",
    value: function renderPicture() {
      var sources = this.props.sources;
      var pictureSources = [];
      sources.map(function (source, index) {
        if (source && source.srcset !== null) {
          pictureSources.push(/*#__PURE__*/_react["default"].createElement("source", {
            // eslint-disable-next-line react/no-array-index-key
            key: "".concat(source.srcset, "_").concat(index),
            srcSet: source.srcset,
            media: source.media,
            sizes: source.sizes,
            type: Picture.handleType(source.srcset)
          }));
        }
      });
      if (pictureSources && pictureSources.length > 0) {
        return pictureSources;
      }
      var noImgSrc = "".concat("https://img.virtual-expo.com", "/media/images/common/pictos/no-image-mg.gif");
      return [/*#__PURE__*/_react["default"].createElement("source", {
        // eslint-disable-next-line react/no-array-index-key
        key: "".concat(noImgSrc, "_", 0),
        srcSet: noImgSrc,
        type: "image/gif"
      })];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        alt = _this$props.alt,
        src = _this$props.src,
        sources = _this$props.sources,
        lazy = _this$props.lazy,
        onLoad = _this$props.onLoad,
        dataCy = _this$props.dataCy,
        other = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      // On transfère les props compatibles uniquement
      var compliantProps = (0, _omit["default"])(other, ["elementDimensions", "detectedEnvironment", "isActive", "isPositionOutside", "positionX", "positionY"]);
      var classNameString = lazy ? "lazyload" : "";
      var loading = lazy ? {
        loading: "lazy"
      } : {};
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("picture", null, this.renderPicture(), /*#__PURE__*/_react["default"].createElement("img", (0, _extends2["default"])({
        "data-src": src,
        alt: alt,
        onLoad: onLoad
        // eslint-disable-next-line react/jsx-props-no-spreading
      }, loading, {
        className: classNameString
        // eslint-disable-next-line react/jsx-props-no-spreading
      }, compliantProps, {
        "data-cy": dataCy
      }))));
    }
  }], [{
    key: "handleType",
    value: /** Gestion du type. */
    function handleType(path) {
      var extension = path !== undefined ? path.split(".").pop().toLowerCase() : "";
      switch (extension) {
        case imageTypes.JPG.extension:
        case imageTypes.JPEG.extension:
          return imageTypes.JPG.mimeType;
        case imageTypes.WEBP.extension:
          return imageTypes.WEBP.mimeType;
        case imageTypes.PNG.extension:
          return imageTypes.PNG.mimeType;
        default:
          return "";
      }
    }
  }]);
}(_react.Component);
Picture.defaultProps = {
  alt: "",
  src: undefined,
  sources: [],
  lazy: true,
  onLoad: undefined
};