"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specificMinMedia = exports.specificMaxMedia = exports.mediaResolution = exports.mediaMinWidth = exports.mediaMinMaxWidth = exports.mediaMinMaxBannersWidth = exports.media = exports.getBreakpoint = exports["default"] = exports.breakPointsType = exports.breakPoints = exports.bannersSizes = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _styledComponents = require("styled-components");
var breakPointsType = exports.breakPointsType = {
  xxs: "xxs",
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg"
};
var breakPoints = exports.breakPoints = {
  xxs: 420,
  xs: 768,
  sm: 1024,
  md: 1279,
  lg: 1599
};
var _SIZES = {
  screenXxsMin: breakPoints.xxs,
  screenXsMin: breakPoints.xs,
  screenSmMin: breakPoints.sm,
  screenMdMin: breakPoints.md,
  screenLgMin: breakPoints.lg
};
var bannersSizes = exports.bannersSizes = {
  bannersXxs: 360,
  bannersXs: 767,
  bannersSm: 1279,
  bannersMd: 1439,
  bannersLg: 1440,
  sizes: {
    Xxs: {
      w: 420,
      h: 150
    },
    Xs: {
      w: 760,
      h: 150
    },
    Sm: {
      w: 1115,
      h: 192
    },
    Md: {
      w: 1280,
      h: 220
    },
    Lg: {
      w: 1920,
      h: 330
    }
  },
  usableArea: 1544
};

/**
 * Classe permettant la gestion du responsive pour le css in js.
 */
var Responsive = /*#__PURE__*/function () {
  function Responsive() {
    (0, _classCallCheck2["default"])(this, Responsive);
  }
  return (0, _createClass2["default"])(Responsive, null, [{
    key: "sizes",
    value:
    /**
     * Retourne la liste des breakpoints.
     */
    function sizes() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var i = min ? 1 : 0;
      return {
        screenXxsMin: _SIZES.screenXxsMin + i,
        screenXsMin: _SIZES.screenXsMin + i,
        screenSmMin: _SIZES.screenSmMin + i,
        screenMdMin: _SIZES.screenMdMin + i,
        screenLgMin: _SIZES.screenLgMin + i
      };
    }

    /**
     * Retourne la liste des range des breakpoints.
     */
  }, {
    key: "sizesRange",
    value: function sizesRange() {
      return {
        screenXxsMin: [0, _SIZES.screenXxsMin],
        screenXsMin: [_SIZES.screenXxsMin + 1, _SIZES.screenXsMin],
        screenSmMin: [_SIZES.screenXsMin + 1, _SIZES.screenSmMin],
        screenMdMin: [_SIZES.screenSmMin + 1, _SIZES.screenMdMin],
        screenLgMin: [_SIZES.screenMdMin + 1, _SIZES.screenLgMin]
      };
    }

    /**
     * Retourne les media query max-width (formatté pour styled-component) en fonction des breakpoints definis dans la methode sizes().
     */
  }, {
    key: "media",
    value: function media() {
      var sizes = Responsive.sizes();

      // Iterate through the sizes and create a media template
      var media = Object.keys(sizes).reduce(function (acc, label) {
        acc[label] = function () {
          return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], sizes[label], _styledComponents.css.apply(void 0, arguments));
        };
        return acc;
      }, {});
      return media;
    }

    // Fonctionn qui permet de gerer les dpi (mode zoomé à 125% ou dezooomé)
  }, {
    key: "mediaResolution",
    value: function mediaResolution() {
      var resolutions = {
        screen96dpi: "96dpi",
        screen110dpi: "110dpi"
      };
      var media = Object.keys(resolutions).reduce(function (acc, label) {
        acc[label] = function () {
          return (0, _styledComponents.css)(["@media (resolution:", "){", ";}"], resolutions[label], _styledComponents.css.apply(void 0, arguments));
        };
        return acc;
      }, {});
      return media;
    }

    /**
     * Retourne les media query max-width (formatté pour styled-component) en fonction de la taille passée en paramètre.
     */
  }, {
    key: "specificMaxMedia",
    value: function specificMaxMedia(size) {
      return function () {
        return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], size, _styledComponents.css.apply(void 0, arguments));
      };
    }

    /**
     * Retourne les media query max-width (formatté pour styled-component) en fonction de la taille passée en paramètre.
     */
  }, {
    key: "specificMinMedia",
    value: function specificMinMedia(size) {
      return function () {
        return (0, _styledComponents.css)(["@media (min-width:", "px){", ";}"], size, _styledComponents.css.apply(void 0, arguments));
      };
    }

    /**
     * Retourne les media query min-width (formatté pour styled-component) en fonction des breakpoints definis dans la methode sizes().
     */
  }, {
    key: "mediaMinWidth",
    value: function mediaMinWidth() {
      var sizes = Responsive.sizes(true);
      // Iterate through the sizes and create a media template
      var mediaMinWidth = Object.keys(sizes).reduce(function (acc, label) {
        acc[label] = function () {
          return (0, _styledComponents.css)(["@media (min-width:", "px){", ";}"], sizes[label], _styledComponents.css.apply(void 0, arguments));
        };
        return acc;
      }, {});
      return mediaMinWidth;
    }

    /**
     * Retourne les media query (formatté pour styled-component) en fonction des breakpoints
     *  definis dans la methode sizes() avec ecran compris entre 2 valeurs
     */
  }, {
    key: "mediaMinMaxWidth",
    value: function mediaMinMaxWidth() {
      var sizes = Responsive.sizesRange();

      // Iterate through the sizes and create a media template
      var mediaMinWidth = Object.keys(sizes).reduce(function (acc, label) {
        acc[label] = label !== "screenLgMin" ? function () {
          return (0, _styledComponents.css)(["@media (min-width:", "px) and (max-width:", "px){", ";}"], sizes[label][0], sizes[label][1], _styledComponents.css.apply(void 0, arguments));
        } :
        // Si label est 'screenLgMin on a juste besoin de d'un media au moins egal a sizes[label][0]
        function () {
          return (0, _styledComponents.css)(["@media (min-width:", "px){", ";}"], sizes[label][0], _styledComponents.css.apply(void 0, arguments));
        };
        return acc;
      }, {});
      return mediaMinWidth;
    }

    /** ***** PARTIE BANNIERES ********** */
    /**
     * Retourne la liste des range des breakpoints Spécifiques bannières.
     */
  }, {
    key: "sizesBannersRange",
    value: function sizesBannersRange() {
      return {
        screenXxsMin: [0, bannersSizes.bannersXxs],
        screenXsMin: [bannersSizes.bannersXxs + 1, bannersSizes.bannersXs],
        screenSmMin: [bannersSizes.bannersXs + 1, bannersSizes.bannersSm],
        screenMdMin: [bannersSizes.bannersSm + 1, bannersSizes.bannersMd],
        screenLgMin: [bannersSizes.bannersMd + 1, bannersSizes.bannersLg]
      };
    }

    /**
     * Specifique bannières:
     *
     * Retourne les media query (formatté pour styled-component) en fonction des breakpoints
     *  définis dans la méthode sizesBannersRange() avec écran compris entre 2 valeurs
     */
  }, {
    key: "mediaMinMaxBannersWidth",
    value: function mediaMinMaxBannersWidth() {
      var sizes = Responsive.sizesBannersRange();
      // Iterate through the sizes and create a media template
      var bannersWidth = Object.keys(sizes).reduce(function (acc, label) {
        acc[label] = label !== "screenLgMin" ? function () {
          return (0, _styledComponents.css)(["@media (min-width:", "px) and (max-width:", "px){", ";}"], sizes[label][0], sizes[label][1], _styledComponents.css.apply(void 0, arguments));
        } :
        // Si label est 'screenLgMin on a juste besoin de d'un media au moins egal a sizes[label][0]
        function () {
          return (0, _styledComponents.css)(["@media (min-width:", "px){", ";}"], sizes[label][0], _styledComponents.css.apply(void 0, arguments));
        };
        return acc;
      }, {});
      return bannersWidth;
    }

    /** Le viewport est il inférieur au breakPoint large (lg). */
  }, {
    key: "getBreakpoint",
    value: function getBreakpoint() {
      var viewportBreakPoint = "lg";
      if (false) {
        var _window = window,
          width = _window.innerWidth;
        switch (true) {
          case width <= breakPoints.xxs:
            viewportBreakPoint = breakPointsType.xxs;
            break;
          case width > breakPoints.xxs && width <= breakPoints.xs:
            viewportBreakPoint = breakPointsType.xs;
            break;
          case width > breakPoints.xs && width <= breakPoints.sm:
            viewportBreakPoint = breakPointsType.sm;
            break;
          case width > breakPoints.sm && width <= breakPoints.md:
            viewportBreakPoint = breakPointsType.md;
            break;
          default:
            viewportBreakPoint = breakPointsType.lg;
        }
      }
      return viewportBreakPoint;
    }

    /** Le viewport est il inférieur au breakPoint small (sm). */
  }, {
    key: "isSmViewport",
    value: function isSmViewport() {
      if (false) {
        var _window2 = window,
          width = _window2.innerWidth;
        return width <= breakPoints.sm;
      }
      return false;
    }

    /** Le viewport est il inférieur au breakPoint extra small (xs). */
  }, {
    key: "isXsViewport",
    value: function isXsViewport() {
      if (false) {
        var _window3 = window,
          width = _window3.innerWidth;
        return width <= breakPoints.xs;
      }
      return false;
    }
  }]);
}();
var media = exports.media = Responsive.media();
var mediaResolution = exports.mediaResolution = Responsive.mediaResolution();
var mediaMinMaxBannersWidth = exports.mediaMinMaxBannersWidth = Responsive.mediaMinMaxBannersWidth();
var mediaMinMaxWidth = exports.mediaMinMaxWidth = Responsive.mediaMinMaxWidth();
var mediaMinWidth = exports.mediaMinWidth = Responsive.mediaMinWidth();
var specificMaxMedia = exports.specificMaxMedia = function specificMaxMedia(specific) {
  return Responsive.specificMaxMedia(specific);
};
var specificMinMedia = exports.specificMinMedia = function specificMinMedia(specific) {
  return Responsive.specificMinMedia(specific);
};
var getBreakpoint = exports.getBreakpoint = function getBreakpoint() {
  return Responsive.getBreakpoint();
};
// @component
var _default = exports["default"] = Responsive;