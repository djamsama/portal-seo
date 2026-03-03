"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _reactFlickityComponent = _interopRequireDefault(require("react-flickity-component"));
var _component = _interopRequireDefault(require("@loadable/component"));
var _reactIntl = require("react-intl");
var _encryptHelper = _interopRequireDefault(require("../../helpers/encryptHelper"));
var _constants = require("../../commons/constants");
var _imageViewer = require("./styles/imageViewer");
var _video = _interopRequireDefault(require("../video"));
var _picture = _interopRequireDefault(require("../picture"));
var _imageWithZoom = _interopRequireDefault(require("./components/imageWithZoom"));
var _navigationHelper = _interopRequireDefault(require("../../helpers/navigationHelper"));
var _withGoogleAnalytics = require("../../hoc/withGoogleAnalytics");
var _responsive = require("../styles/responsive.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/no-unused-prop-types */ // $FlowFixMe
// $FlowFixMe
// $FlowFixMe
var Carousel = (0, _component["default"])(function () {
  return import("../carousel");
});
var Lightbox = (0, _component["default"])(function () {
  return import("../lightbox");
});
var ImageViewer = /*#__PURE__*/function (_Component) {
  // Mémoisation détection iOS côté client (iPhone/iPad + iPadOS)

  function ImageViewer(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImageViewer);
    _this = _callSuper(this, ImageViewer, [props]);
    /** * Gestion video et premiere selection  */
    // la video a-t-elle déjà été sélectionnée dans le carrousel ?
    (0, _defineProperty2["default"])(_this, "_videoSelectionDone", false);
    // Timer de tentative de sélection de la video
    (0, _defineProperty2["default"])(_this, "_selectVideoTimer", null);
    // Gestion de la synchro entre les 2 carrousels
    (0, _defineProperty2["default"])(_this, "_syncBound", false);
    // Gestion des listeners de scroll pour les dots
    (0, _defineProperty2["default"])(_this, "_listenersBound", false);
    // Le plein écran en cours concernait-il la vidéo ?
    (0, _defineProperty2["default"])(_this, "_fsWasVideo", false);
    (0, _defineProperty2["default"])(_this, "_suppressNavHoverUntil", 0);
    // eslint-disable-next-line react/sort-comp
    (0, _defineProperty2["default"])(_this, "isIOSRuntime", function () {
      if (typeof window === "undefined" || typeof navigator === "undefined") return false; // Bypass varnish
      if (_this._isIOS !== undefined) return !!_this._isIOS;
      var n = navigator;
      // iOS “classique” + iPadOS (MacIntel + touch)
      var isIOS = /iP(hone|od|ad)/.test(n.platform || "") || n.platform === "MacIntel" && (n.maxTouchPoints || 0) > 1;
      _this._isIOS = isIOS;
      return isIOS;
    });
    // Assure que l'élément est visible dans la fenêtre avec une marge en bas
    // eslint-disable-next-line react/sort-comp
    (0, _defineProperty2["default"])(_this, "ensureElementVisibleWithBottomMargin", function (el) {
      var marginBottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var forceMargin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (_this.isIOSRuntime()) return;
      var vv = window.visualViewport;
      var vw = vv ? vv.width : window.innerWidth;
      var vh = vv ? vv.height : window.innerHeight;
      var isMobile = Math.min(vw, vh) < 700;
      var applicableMarginBottom = isMobile ? 100 : forceMargin || marginBottom;
      var doScroll = function doScroll() {
        if (!el) return;
        var rect = el.getBoundingClientRect();
        var delta = rect.bottom - (window.innerHeight - applicableMarginBottom);
        if (Math.abs(delta) > 1) {
          window.scrollBy({
            top: delta,
            left: 0,
            behavior: "smooth"
          });
        }
      };
      if (isMobile) {
        setTimeout(doScroll, 800); // délai uniquement sur mobile
      } else {
        doScroll();
      }
    });
    // Gestion du scroll pour les dots une seule fois
    (0, _defineProperty2["default"])(_this, "setupFlickityOnce", function () {
      if (_this._listenersBound || !_this.flkty) return;
      _this.flkty.on("scroll", function () {
        var _ref = _this.flkty || {},
          pageDots = _ref.pageDots,
          selectedIndex = _ref.selectedIndex;
        if (pageDots) {
          _navigationHelper["default"].nextDot(pageDots.dots, pageDots.holder, selectedIndex);
        }
      });
      _this._listenersBound = true;
    });
    // Détection du mode plein écran (y compris prefixes)
    (0, _defineProperty2["default"])(_this, "isFullscreenActive", function () {
      if (typeof document === "undefined") return false;
      var d = document;
      return !!(d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement);
    });
    // Pause de la vidéo (YouTube via postMessage et <video> natif)
    (0, _defineProperty2["default"])(_this, "pauseCurrentVideo", function () {
      try {
        var wrapper = _this.videoWrapperRef;
        if (!wrapper) return;

        // YouTube iframe
        var iframe = wrapper.querySelector("iframe");
        if (iframe !== null && iframe !== void 0 && iframe.contentWindow) {
          // nécessite enablejsapi=1 côté YouTube
          iframe.contentWindow.postMessage(JSON.stringify({
            event: "command",
            func: "pauseVideo",
            args: []
          }), "*");
        }

        // <video> natif fallback (si jamais utilisé)
        var videoEl = wrapper.querySelector("video");
        if (videoEl !== null && videoEl !== void 0 && videoEl.pause) videoEl.pause();
      } catch (e) {
        var showError = false ? e : "";
        // eslint-disable-next-line no-console
        console.warn("pauseCurrentVideo error", showError);
      }
    });
    // Pas besoin de flickity-as-nav-for qui genere des erreurs de toutes facons
    // eslint-disable-next-line react/sort-comp
    (0, _defineProperty2["default"])(_this, "bindFlickitySync", function () {
      if (_this._syncBound || !_this.flkty || !_this.navFlkty) return;
      var that = _this;
      _this.onMainSelect = function () {
        // Empêche la resélection pendant le plein écran (ex: YouTube)
        if (_this.isFullscreenActive()) return;
        if (_this.navFlkty && typeof _this.navFlkty.select === "function") {
          _this.navFlkty.select(_this.flkty.selectedIndex);
        }
      };
      _this._onNavSelect = function () {
        // Ignore immédiatement après la sortie du plein écran
        if (Date.now() < _this._suppressNavHoverUntil) return;
        // Empêche la resélection pendant le plein écran
        if (_this.isFullscreenActive()) return;
        if (that.flkty && typeof that.flkty.select === "function") {
          var idx = that.navFlkty.selectedIndex;
          if (idx !== that.flkty.selectedIndex) that.flkty.select(idx);
        }
      };
      _this.flkty.on("select", _this.onMainSelect);
      _this.navFlkty.on("select", _this._onNavSelect);
      _this._syncBound = true;

      // Ajout des data-cy sur les Btn de nav next / prev
      if (typeof document !== "undefined") {
        var nextBtnNav = _this.flkty.nextButton.element;
        if (nextBtnNav) {
          nextBtnNav.setAttribute("data-cy", "navNextButton");
        }
        var prevBtnNav = _this.flkty.prevButton.element;
        if (prevBtnNav) {
          prevBtnNav.setAttribute("data-cy", "navPrevButton");
        }
      }
    });
    // Lorsque que l'url contient #video on selectionne la video dans le carrousel
    // et on active l'autoplay
    // eslint-disable-next-line react/sort-comp
    (0, _defineProperty2["default"])(_this, "selectVideoWhenReady", function (videoIndex) {
      var _this$flkty2;
      if (_this._videoSelectionDone) return;

      // On tente de sélectionner la vidéo dès que Flickity est prêt
      var trySelect = function trySelect() {
        if (!_this.flkty || _this._videoSelectionDone) return;

        // Flickity est prêt lorsqu'il a des cells/slides
        var hasCells = Array.isArray(_this.flkty.cells) && _this.flkty.cells.length > 0;
        if (hasCells) {
          _this.flkty.select(videoIndex, true, true);
          _this._videoSelectionDone = true;
          requestAnimationFrame(function () {
            setTimeout(function () {
              return _this.ensureElementVisibleWithBottomMargin(_this.navPicsWrapper, 100);
            }, 0);
          });
          if (_this._selectVideoTimer) {
            clearInterval(_this._selectVideoTimer);
            _this._selectVideoTimer = null;
          }
        }
      };

      // On essaye de sélectionner la vidéo de 3 façons:
      // => On fait un premier test
      trySelect();

      // =>  On refait un test apres quelques millisecondes au cas où flickity n’était pas prêt
      if (!_this._videoSelectionDone && !_this._selectVideoTimer) {
        _this._selectVideoTimer = setInterval(trySelect, 100);
      }

      //  => Si ca ne marche pas on reteste quand flickity est ready (s’il n’était pas prêt)
      var _onReady = function onReady() {
        var _this$flkty;
        if (!_this._videoSelectionDone) trySelect();
        if ((_this$flkty = _this.flkty) !== null && _this$flkty !== void 0 && _this$flkty.off) _this.flkty.off("ready", _onReady);
      };
      if ((_this$flkty2 = _this.flkty) !== null && _this$flkty2 !== void 0 && _this$flkty2.on) _this.flkty.on("ready", _onReady);
    });
    (0, _defineProperty2["default"])(_this, "onFullscreenChange", function () {
      if (typeof document === "undefined") return;
      var d = document;
      var fsEl = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
      if (fsEl) {
        // Entrée en plein écran: mémorise si c'est notre vidéo
        _this._fsWasVideo = !!(_this.videoWrapperRef && _this.videoWrapperRef.contains(fsEl));
        return;
      }

      // Sortie de plein écran: désactive temporairement le hover des vignettes
      _this._suppressNavHoverUntil = Date.now() + 800;

      // Sortie de plein écran
      if (_this._fsWasVideo) {
        var picturesList = _this.props.picturesList;
        var videoIndex = picturesList ? picturesList.length : 0;

        // Soit on sélectionne la vidéo si elle n'est pas sélectionnée...
        if (_this.flkty && typeof _this.flkty.select === "function" && _this.flkty.selectedIndex !== videoIndex) {
          _this.flkty.select(videoIndex);
        } /* else {
          // ... soit on met la vidéo en pause si elle est déjà sélectionnée
          this.pauseCurrentVideo();
          } */
        requestAnimationFrame(function () {
          setTimeout(function () {
            return _this.ensureElementVisibleWithBottomMargin(_this.navPicsWrapper, 200, 200);
          }, 0);
        });
      }
      _this._fsWasVideo = false;
    });
    _this.state = {
      autoPlay: false,
      fullScreenEnabled: false,
      clickedIndexSlide: -1,
      tracked: false
    };
    _this.onNavMouseHover = _this.onNavMouseHover.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.toogleFullScreenViewer = _this.toogleFullScreenViewer.bind(_this);
    _this.onFullscreenChange = _this.onFullscreenChange.bind(_this);
    _this.pauseCurrentVideo = _this.pauseCurrentVideo.bind(_this);
    _this.selectVideo = "";
    return _this;
  }
  (0, _inherits2["default"])(ImageViewer, _Component);
  return (0, _createClass2["default"])(ImageViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        hasVideo = _this$props.hasVideo,
        picturesList = _this$props.picturesList;

      // Listen fullscreen changes (tous navigateurs)
      if (typeof document !== "undefined") {
        var d = document;
        var handler = this.onFullscreenChange;
        d.addEventListener("fullscreenchange", handler);
        d.addEventListener("webkitfullscreenchange", handler);
        d.addEventListener("mozfullscreenchange", handler);
        d.addEventListener("MSFullscreenChange", handler);
      }

      // il y a une video et le hash est dans l'url on lance la selection de la video
      if (hasVideo && typeof window !== "undefined" && window.location.hash.indexOf(_constants.VIDEO_HASH) !== -1) {
        this.selectVideo = "is-selected";
        this.setState({
          autoPlay: true
        });
        this.selectVideoWhenReady(picturesList.length);
      }

      // Attachement de la synchro et des listeners
      this.bindFlickitySync();
      this.setupFlickityOnce();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // nettoyage des listeners fullscreen
      if (typeof document !== "undefined") {
        var d = document;
        var handler = this.onFullscreenChange;
        d.removeEventListener("fullscreenchange", handler);
        d.removeEventListener("webkitfullscreenchange", handler);
        d.removeEventListener("mozfullscreenchange", handler);
        d.removeEventListener("MSFullscreenChange", handler);
      }
      if (this._selectVideoTimer) {
        clearInterval(this._selectVideoTimer);
        this._selectVideoTimer = null;
      }
      // nettoyage des listeners
      if (this._syncBound) {
        try {
          var _this$flkty3, _this$flkty3$off, _this$navFlkty, _this$navFlkty$off;
          (_this$flkty3 = this.flkty) === null || _this$flkty3 === void 0 || (_this$flkty3$off = _this$flkty3.off) === null || _this$flkty3$off === void 0 || _this$flkty3$off.call(_this$flkty3, "select", this.onMainSelect);
          (_this$navFlkty = this.navFlkty) === null || _this$navFlkty === void 0 || (_this$navFlkty$off = _this$navFlkty.off) === null || _this$navFlkty$off === void 0 || _this$navFlkty$off.call(_this$navFlkty, "select", this._onNavSelect);
        } catch (e) {
          var showError = false ? e : "";
          // eslint-disable-next-line no-console
          console.error("Error during flickity sync unbinding", showError);
        }
        this._syncBound = false;
      }
    }
  }, {
    key: "handleClick",
    value:
    /**
     * Gestion du click.
     * @param {*} e L'évènement utilisateur
     */
    function handleClick(e) {
      var _this$flkty4 = this.flkty,
        pageDots = _this$flkty4.pageDots,
        selectedIndex = _this$flkty4.selectedIndex;
      var _this$props2 = this.props,
        gaCategory = _this$props2.gaCategory,
        googleAnalytics = _this$props2.googleAnalytics,
        GOOGLE_ANALYTICS_EVENTS = _this$props2.GOOGLE_ANALYTICS_EVENTS;
      var tracked = this.state.tracked;
      if (!tracked && gaCategory) {
        googleAnalytics.event({
          action: GOOGLE_ANALYTICS_EVENTS.CLICK_ZOOM,
          category: gaCategory,
          label: GOOGLE_ANALYTICS_EVENTS.CLICK_ZOOM
        });
        this.setState({
          tracked: true
        });
      }
      if (pageDots) {
        _navigationHelper["default"].dotClick(e, pageDots.dots, pageDots.holder, selectedIndex);
      }
    }
  }, {
    key: "onNavMouseHover",
    value: function onNavMouseHover(e, index) {
      // Ignore le hover immédiatement après la sortie du plein écran
      if (Date.now() < this._suppressNavHoverUntil) return;
      if (!this.navFlkty || !this.flkty) return;
      if (!this.navFlkty.isAnimating || " ".concat(e.currentTarget.className, " ").replace(/[\n\t]/g, " ").indexOf(" is-selected ") > -1) {
        this.flkty.select(index);
      }
    }
  }, {
    key: "toogleFullScreenViewer",
    value: function toogleFullScreenViewer(e, index) {
      var fullScreenEnabled = this.state.fullScreenEnabled;
      this.setState({
        fullScreenEnabled: !fullScreenEnabled,
        clickedIndexSlide: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        picturesList = _this$props3.picturesList,
        children = _this$props3.children,
        secondaryViewerHeight = _this$props3.secondaryViewerHeight,
        viewerWidth = _this$props3.viewerWidth,
        hasVideo = _this$props3.hasVideo,
        videoUrl = _this$props3.videoUrl,
        videoThumbUrl = _this$props3.videoThumbUrl,
        mainPictureMaxHeight = _this$props3.mainPictureMaxHeight,
        brand = _this$props3.brand,
        productLabel = _this$props3.productLabel,
        intl = _this$props3.intl,
        metaObject = _this$props3.metaObject;
      var altFromTitle = metaObject === null || metaObject === void 0 ? void 0 : metaObject.title;
      var _this$state = this.state,
        autoPlay = _this$state.autoPlay,
        fullScreenEnabled = _this$state.fullScreenEnabled,
        clickedIndexSlide = _this$state.clickedIndexSlide;
      // Même index initial pour main et nav si #video présent
      var wantVideo = hasVideo && typeof window !== "undefined" && window.location.hash.indexOf(_constants.VIDEO_HASH) !== -1;
      var videoIndex = picturesList.length;
      var initialIndex = wantVideo ? videoIndex : 0;
      if (picturesList === null || picturesList.length < 1) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
      var mainPicture = picturesList[0];
      var numberOfItem = picturesList.length;

      // On n'affiche pas les fleches si on a qu'un seul element.
      var usePrevNextButton = numberOfItem > 1;
      if (typeof window !== "undefined") {
        // rendu coté client
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, fullScreenEnabled && /*#__PURE__*/_react["default"].createElement(Lightbox, {
          hoveredInterface: true,
          label: productLabel,
          brand: brand,
          ToggleLightBox: this.toogleFullScreenViewer,
          render: function render(parentState) {
            return /*#__PURE__*/_react["default"].createElement(Carousel, {
              media: hasVideo ? [].concat((0, _toConsumableArray2["default"])(picturesList), [{
                videoUrl: videoUrl,
                alt: productLabel || "video"
              }]) : picturesList,
              slideIndex: clickedIndexSlide,
              parentState: parentState,
              animated: true,
              fullScreen: true,
              alt: altFromTitle
            });
          }
        }, /*#__PURE__*/_react["default"].createElement(Carousel, {
          media: picturesList,
          animated: true,
          fullScreen: true,
          slideIndex: clickedIndexSlide
        })), /*#__PURE__*/_react["default"].createElement(_imageViewer.WrapperViewer, null, /*#__PURE__*/_react["default"].createElement(_imageViewer.ZoomContainer, {
          id: "zoom-lens-custom",
          viewerWidth: viewerWidth
        }), /*#__PURE__*/_react["default"].createElement(_imageViewer.WrapperBigPics, {
          viewerWidth: viewerWidth,
          pictureMediumHeight: picturesList[0].pictureMediumHeight,
          mainPictureMaxHeight: mainPictureMaxHeight,
          onClick: function onClick(e) {
            return _this2.handleClick(e);
          }
        }, children, /*#__PURE__*/_react["default"].createElement(_reactFlickityComponent["default"], {
          options: {
            prevNextButtons: usePrevNextButton,
            pageDots: true,
            draggable: true,
            selectedAttraction: 1,
            friction: 1,
            lazyLoad: true,
            reloadOnUpdate: true,
            resize: true,
            setGallerySize: true,
            imagesLoaded: true,
            initialIndex: initialIndex
          },
          className: "mainf",
          flickityRef: function flickityRef(c) {
            _this2.flkty = c;
            _this2.bindFlickitySync();
            _this2.setupFlickityOnce();
          }
        }, picturesList && picturesList.map(function (item, index) {
          return (
            /*#__PURE__*/
            // eslint-disable-next-line react/no-array-index-key
            _react["default"].createElement(_imageViewer.ItemWrapper, {
              key: "item_".concat(index),
              onClick: function onClick(e) {
                return _this2.toogleFullScreenViewer(e, index);
              }
            }, viewerWidth < item.pictureWidth && viewerWidth < item.pictureHeight && /*#__PURE__*/_react["default"].createElement(_imageWithZoom["default"], {
              imageUrl: item.pictureMediumUrl,
              sources: [{
                srcset: item.webpPictureMediumUrl
              }, {
                srcset: item.pictureMediumUrl
              }],
              zoomedImageSrcUrl: item.pictureMetaUrl,
              zoomedImageSources: [{
                srcset: item.webpPictureBigUrl
              }, {
                srcset: item.pictureMetaUrl
              }],
              alt: "".concat(altFromTitle || item.alt).concat(index !== 0 ? " - ".concat(intl.formatMessage({
                id: "fo_product_alt_image"
              }, {
                "0": index + 1
              })) : ""),
              zoomedImageDimensions: {
                width: item.pictureWidth,
                height: item.pictureHeight
              },
              lazy: index !== 0,
              dataCy: "bigImage_".concat(index)
            }), !(viewerWidth < item.pictureWidth && viewerWidth < item.pictureHeight) && /*#__PURE__*/_react["default"].createElement(_picture["default"], {
              alt: "".concat(altFromTitle || item.alt).concat(index !== 0 ? " - ".concat(intl.formatMessage({
                id: "fo_product_alt_image"
              }, {
                "0": index + 1
              })) : ""),
              "data-flickity-lazyload": item.pictureMediumUrl,
              sources: [{
                srcset: item.webpPictureMediumUrl
              }, {
                srcset: item.pictureMediumUrl
              }],
              lazy: index !== 0,
              dataCy: "bigImage_".concat(index)
            }))
          );
        }), hasVideo === true && videoUrl && /*#__PURE__*/_react["default"].createElement(_imageViewer.WrapperVideo, {
          minHeightVideo: this.selectVideo ? "140" : "",
          viewerWidth: viewerWidth,
          key: "item_".concat(numberOfItem),
          ref: function ref(v) {
            _this2.videoWrapperRef = v;
          }
        }, /*#__PURE__*/_react["default"].createElement(_video["default"], {
          thumbnail: videoThumbUrl,
          url: _encryptHelper["default"].decrypt(videoUrl),
          autoPlay: autoPlay,
          selectVideo: this === null || this === void 0 ? void 0 : this.selectVideo
        })))), /*#__PURE__*/_react["default"].createElement(_imageViewer.WrapperNavPics, {
          id: "navPicsWrapper",
          ref: function ref(v) {
            _this2.navPicsWrapper = v;
          },
          secondaryViewerHeight: secondaryViewerHeight,
          viewerWidth: viewerWidth
        }, /*#__PURE__*/_react["default"].createElement(_reactFlickityComponent["default"], {
          options: {
            prevNextButtons: false,
            contain: true,
            pageDots: false,
            draggable: true,
            groupCells: true,
            selectedAttraction: 0.05,
            friction: 0.3,
            // freeScroll: true,
            cellAlign: "center",
            initialIndex: initialIndex
          },
          className: "secondaryf",
          flickityRef: function flickityRef(c) {
            _this2.navFlkty = c;
            _this2.bindFlickitySync();
          }
        }, picturesList && picturesList.map(function (item, index) {
          var blankSource = {
            srcset: "".concat("https://img.virtual-expo.com", "/media/images/common/request/blank.jpg 1w"),
            media: "(max-width: ".concat(_responsive.breakPoints.md, "px)"),
            sizes: "1px"
          };
          var thumbSource = {
            srcset: item.pictureThumbUrl,
            media: "(min-width: ".concat(_responsive.breakPoints.md + 1, "px)")
          };
          var thumbWebpSource = {
            srcset: item.webpPictureThumbUrl,
            media: "(min-width: ".concat(_responsive.breakPoints.md + 1, "px)")
          };
          return (
            /*#__PURE__*/
            // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
            _react["default"].createElement(_imageViewer.NavPicsWrapper, {
              onMouseOver: function onMouseOver(e) {
                return _this2.onNavMouseHover(e, index);
              },
              key: item.pictureId
            }, /*#__PURE__*/_react["default"].createElement(_picture["default"], {
              src: item.pictureThumbUrl,
              alt: "".concat(altFromTitle || item.alt).concat(index !== 0 ? " - ".concat(intl.formatMessage({
                id: "fo_product_alt_image"
              }, {
                "0": index + 1
              })) : ""),
              lazy: false,
              sources: [blankSource, thumbWebpSource, thumbSource],
              dataCy: "navImage_".concat(index)
            }))
          );
        }), hasVideo === true &&
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        _react["default"].createElement(_imageViewer.NavPicsWrapper, {
          onMouseOver: function onMouseOver(e) {
            return _this2.onNavMouseHover(e, numberOfItem);
          }
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/stand/product/picto-video.png"),
          alt: ""
        }))))));
      }

      // rendu coté serveur
      return /*#__PURE__*/_react["default"].createElement(_imageViewer.WrapperViewer, null, /*#__PURE__*/_react["default"].createElement(_imageViewer.ZoomContainer, {
        id: "zoom-lens-custom",
        viewerWidth: viewerWidth
      }), /*#__PURE__*/_react["default"].createElement(_imageViewer.WrapperBigPics, {
        pictureMediumHeight: picturesList[0].pictureMediumHeight,
        viewerWidth: viewerWidth,
        mainPictureMaxHeight: mainPictureMaxHeight
      }, children, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mainf"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flickity-viewport"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_imageViewer.ItemWrapper, {
        className: "is-selected"
      }, /*#__PURE__*/_react["default"].createElement(_imageWithZoom["default"], {
        imageUrl: mainPicture.pictureMediumUrl,
        sources: [{
          srcset: mainPicture.webpPictureMediumUrl
        }, {
          srcset: mainPicture.pictureMediumUrl
        }],
        zoomedImageSrcUrl: mainPicture.pictureMetaUrl,
        zoomedImageSources: [{
          srcset: mainPicture.webpPictureBigUrl
        }, {
          srcset: mainPicture.pictureMetaUrl
        }],
        alt: altFromTitle || mainPicture.alt,
        zoomedImageDimensions: {
          width: mainPicture.pictureWidth,
          height: mainPicture.pictureHeight
        },
        lazy: false
      })))))), /*#__PURE__*/_react["default"].createElement(_imageViewer.WrapperNavPics, {
        secondaryViewerHeight: secondaryViewerHeight,
        viewerWidth: viewerWidth
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "secondaryf "
      }, picturesList && picturesList.map(function (item, index) {
        var blankSource = {
          srcset: "".concat("https://img.virtual-expo.com", "/media/images/common/request/blank.jpg 1w"),
          media: "(max-width: ".concat(_responsive.breakPoints.md, "px)"),
          sizes: "1px"
        };
        var thumbSource = {
          srcset: item.pictureThumbUrl,
          media: "(min-width: ".concat(_responsive.breakPoints.md + 1, "px)")
        };
        var thumbWebpSource = {
          srcset: item.webpPictureThumbUrl,
          media: "(min-width: ".concat(_responsive.breakPoints.md + 1, "px)")
        };
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          _react["default"].createElement(_imageViewer.NavPicsWrapper, {
            onMouseHover: _this2.onNavMouseHover,
            key: index,
            style: {
              display: "inline-block"
            }
          }, /*#__PURE__*/_react["default"].createElement(_picture["default"], {
            alt: "".concat(altFromTitle || item.alt).concat(index !== 0 ? " - ".concat(intl.formatMessage({
              id: "fo_product_alt_image"
            }, {
              "0": index + 1
            })) : ""),
            lazy: false,
            sources: [blankSource, thumbWebpSource, thumbSource]
          }))
        );
      }), hasVideo === true && /*#__PURE__*/_react["default"].createElement(_imageViewer.NavPicsWrapper, null, /*#__PURE__*/_react["default"].createElement("img", {
        src: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/stand/product/picto-video.png"),
        alt: ""
      })))));
    }
  }]);
}(_react.Component);
ImageViewer.defaultProps = {
  hasVideo: false,
  children: null,
  picturesList: [],
  mainPictureMaxHeight: null,
  secondaryViewerHeight: 60,
  viewerWidth: 500,
  videoUrl: "",
  videoThumbUrl: "",
  gaCategory: null,
  metaObject: null
};
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(ImageViewer));