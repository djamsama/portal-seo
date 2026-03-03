"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannersHelper = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defaultValues = require("../constants/defaultValues");
var _responsive = require("../components/styles/responsive");
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
var BannersHelper = exports.BannersHelper = /*#__PURE__*/function () {
  function BannersHelper() {
    (0, _classCallCheck2["default"])(this, BannersHelper);
  }
  return (0, _createClass2["default"])(BannersHelper, null, [{
    key: "giveDimensionsFor",
    value: function giveDimensionsFor(width) {
      var dim = _responsive.bannersSizes.sizes.Lg;
      switch (true) {
        case width < _responsive.bannersSizes.bannersSm:
          {
            dim = {
              w: width,
              h: _responsive.bannersSizes.sizes.Sm.h
            };
            return dim;
          }
        case width >= _responsive.bannersSizes.bannersSm && width < _responsive.bannersSizes.bannersMd:
          dim = {
            w: width,
            h: _responsive.bannersSizes.sizes.Md.h
          };
          return dim;
        case width >= _responsive.bannersSizes.bannersMd:
          dim = {
            w: width,
            h: _responsive.bannersSizes.sizes.Lg.h
          };
          return dim;
        default:
          return dim;
      }
    }
  }, {
    key: "resizeCrop",
    value: function resizeCrop(under, newDim) {
      var windowWidth = window.innerWidth;
      var headerBanner = document.getElementById("header-banner");
      var width = newDim.w;
      var marginTop = 0;
      var marginLeft = 0;
      if (windowWidth < newDim.w) {
        width = windowWidth;
        // calcul de la marge gauche pour centrer la banniere horizontalement. On va cropper l'image comme cela.
        marginLeft = (windowWidth - newDim.w) / 2;
      }
      // Calcul de la marge superieur pour n'afficher que la partie utile de l'image.
      marginTop = (Math.ceil(under * newDim.w) - parseInt(headerBanner.style.height, 10)) / -2;
      if (marginTop > 0) {
        marginTop = 0;
      }
      headerBanner.style.width = "".concat(width, "px");
      headerBanner.style.height = "".concat(newDim.h, "px");
      headerBanner.style.marginLeft = 0;
      if (marginTop < 0) {
        headerBanner.style.marginBottom = "".concat(marginTop * -1, "px");
      }
      document.querySelectorAll("iframe[id^=\"google_ads\"]").forEach(function (iframe) {
        iframe.style.height = "".concat(newDim.h, "px");
        iframe.style.width = "".concat(width, "px");
      });
      Object.keys(BannersHelper.listenedImgs).map(function (img) {
        BannersHelper.listenedImgs[img].style.marginLeft = "".concat(marginLeft, "px");
        BannersHelper.listenedImgs[img].style.marginTop = "".concat(marginTop, "px");
        BannersHelper.listenedImgs[img].style.width = "".concat(newDim.w, "px");
        BannersHelper.listenedImgs[img].style.height = "auto";
        return true;
      });
    }
  }, {
    key: "doResize",
    value: function doResize() {
      var windowWidth = window.innerWidth;
      // Largeur utile de la banniere
      var widthUsableArea = _responsive.bannersSizes.usableArea;
      // Hauteurs maximum de la zone banniere.
      var newDim = BannersHelper.giveDimensionsFor(windowWidth);
      // La largeur maximum de la banniere
      var maxWidth = _responsive.bannersSizes.sizes.Lg.w;
      if (BannersHelper.listenedImgs) {
        var originalImageHeight = _responsive.bannersSizes.sizes.Lg.h;
        var originalImageWidth = _responsive.bannersSizes.sizes.Lg.w;
        var imageHeight = _responsive.bannersSizes.sizes.Lg.h;
        Object.keys(BannersHelper.listenedImgs).map(function (img) {
          imageHeight = BannersHelper.listenedImgs[img].height;
          return true;
        });
        var under = originalImageHeight / originalImageWidth;
        // Traitement pour les resolutions superieurs à 1920px : la zone banniere ne doit pas depasser 1920px.
        var bodyWidth = windowWidth > maxWidth ? maxWidth : windowWidth;
        var ecart = imageHeight * 0.05;
        var heightBannerDiv = imageHeight - ecart;
        if (windowWidth >= _responsive.bannersSizes.bannersSm) {
          heightBannerDiv = newDim.h;
          if (windowWidth >= _responsive.bannersSizes.bannersMd && bodyWidth < widthUsableArea) {
            heightBannerDiv = 260;
          }
        }

        // Resize iframe
        document.querySelectorAll("iframe[id^=\"google_ads\"]").forEach(function (iframe) {
          iframe.style.height = "".concat(heightBannerDiv, "px");
        });
        document.querySelectorAll('div[class^="flickity-viewport"]')[0].style.height = "".concat(heightBannerDiv, "px");
        // $FlowFixMe
        var headerBanner = document.getElementById("header-banner").style;
        headerBanner.height = "".concat(heightBannerDiv, "px");

        // Fenetre inférieure a la largeur utile
        if (bodyWidth < widthUsableArea) {
          var marginLeft = 0;
          // La largeur de la zone banniere est à 100% de la taille de la page.
          var _width = bodyWidth;
          // Calcul de la hauteur pour conserver le ratio.
          var height = Math.ceil(under * bodyWidth);
          // Calcul de la marge superieur à appliqué sur la balise image pour n'afficher que la partie utile de l'image.
          var marginTop = (Math.ceil(under * bodyWidth) - parseInt(headerBanner.height, 10)) / -2;
          // On ne devrait pas avoir de marge positive.
          if (marginTop > 0) {
            marginTop = 0;
          }

          // Si il n'est plus possible de croper en hauteur: dans ce cas il faut cropper à gauche et à droite
          if (height < heightBannerDiv) {
            if (windowWidth >= _responsive.bannersSizes.bannersSm) {
              BannersHelper.resizeCrop(under, {
                w: _responsive.bannersSizes.sizes.Md.w,
                h: _responsive.bannersSizes.sizes.Md.h
              });
              return;
            }
            // La banniere a été redimensionnée: il faut calculer la nouvelle largeur de la zone utile.
            widthUsableArea = widthUsableArea * (_responsive.bannersSizes.sizes.Sm.w / maxWidth) - 200;
            if (windowWidth >= _responsive.bannersSizes.bannersXs && widthUsableArea < bodyWidth && widthUsableArea < 600) {
              BannersHelper.resizeCrop(under, {
                w: _responsive.bannersSizes.sizes.Sm.w,
                h: _responsive.bannersSizes.sizes.Sm.h
              });
              return;
            }
          }
          if (windowWidth <= _responsive.bannersSizes.bannersLg) {
            if (bodyWidth < _responsive.bannersSizes.sizes.Sm.w) {
              ecart = height * 0.05;
              heightBannerDiv = height - ecart;
            } else {
              ecart = 200 * 0.05;
              heightBannerDiv = height - ecart;
            }
          }
          // Resize Conteneur
          headerBanner.width = "".concat(_width, "px");
          headerBanner.marginLeft = "".concat(marginLeft, "px");
          if (marginTop < 0) {
            headerBanner.marginBottom = "".concat(marginTop * -1, "px");
          }
          // Resize iframe
          document.querySelectorAll("iframe[id^=\"google_ads\"]").forEach(function (iframe) {
            iframe.style.width = "".concat(_width, "px");
          });
          // Resize images
          Object.keys(BannersHelper.listenedImgs).map(function (img) {
            BannersHelper.listenedImgs[img].style.marginTop = "".concat(marginTop, "px");
            BannersHelper.listenedImgs[img].style.width = "".concat(_width, "px");
            BannersHelper.listenedImgs[img].style.height = "".concat(height, "px");
            BannersHelper.listenedImgs[img].style.marginLeft = 0;
            BannersHelper.listenedImgs[img].style.left = 0;
            return true;
          });
        }
        // Cas taille de la fenetre superieur ou égale à la largeur utile de la banniere
        else {
          document.querySelectorAll("iframe[id^=\"google_ads\"]").forEach(function (iframe) {
            iframe.style.marginTop = "0px";
          });
          BannersHelper.resizeCrop(under, {
            w: _responsive.bannersSizes.sizes.Lg.w,
            h: _responsive.bannersSizes.sizes.Lg.h
          });
        }
        document.querySelectorAll("iframe[id^=\"google_ads\"]").forEach(function (iframe) {
          iframe.style.height = "".concat(heightBannerDiv, "px");
        });
      }
    }
  }, {
    key: "removeEvent",
    value: function removeEvent() {
      if (BannersHelper.eventResize) {
        window.removeEventListener("resize", BannersHelper.doResize);
        BannersHelper.eventResize = false;
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      if (!BannersHelper.eventResize) {
        BannersHelper.eventResize = true;
        window.addEventListener("resize", BannersHelper.doResize);
      }
    }
  }, {
    key: "manageLinkIframeDfp",
    value: function manageLinkIframeDfp() {
      var startWith = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      // On récupère les iframes dont on veut changer le comportement des liens
      // $FlowFixMe
      var iframes = document.querySelectorAll("iframe[id^=\"".concat(startWith, "\"]"));
      BannersHelper.addEvent();
      if (!BannersHelper.listenedImgs) {
        BannersHelper.listenedImgs = {};
      }
      if (iframes.length > 0) {
        // On parcours les iframes pour changer les liens
        iframes.forEach(function (currentIframe) {
          var doc = currentIframe.contentDocument ? currentIframe.contentDocument : currentIframe.contentWindow.document;
          var links = doc.getElementsByTagName("a");
          var imgs = doc.getElementsByTagName("img");
          if (links && links.length === 1) {
            var currentLink = links.item(0);
            var currentImg = imgs.item(0);
            if (currentImg && BannersHelper.listenedImgs && !BannersHelper.listenedImgs[currentImg.src]) {
              BannersHelper.listenedImgs[currentImg.src] = currentImg;
            }
            if (currentLink) {
              if (iframes.length === 1) {
                currentLink.style.cursor = "default";
              }
              currentLink.href = currentLink.href.replace(new RegExp("http://", "g"), "".concat(_defaultValues.DEFAULT_PROTOCOL, "://"));
              currentLink.onclick = function (event) {
                if (iframes.length === 1) {
                  // S'il n'y a qu'une seule bannière, par exemple un stand qui a sa propre bannière,
                  // on affiche que celle-ci et elle n'est pas clickable
                  event.preventDefault();
                  return false;
                }
                if (currentLink && currentLink.target === "_blank") {
                  window.open(currentLink.href);
                } else {
                  document.location.href = currentLink.href;
                }
                return false;
              };
            }
          }
        });
        BannersHelper.doResize();
      }
    }
  }]);
}();