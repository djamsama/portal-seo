"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _contextComponent = require("../../components/contextComponent");
var _pageLayout = _interopRequireDefault(require("../../layouts/pageLayout"));
var _withTracking = require("../../hoc/withTracking");
var _constants = require("../../commons/constants");
var _link = require("../../components/link");
var _trackingHelper = require("../../helpers/trackingHelper");
var _breadcrumbs = _interopRequireDefault(require("../../components/breadcrumbs"));
var _mockTrackingInfo = require("./mockTrackingInfo.js");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/img-redundant-alt */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/mouse-events-have-key-events */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/button-has-type */ /* eslint-disable react/no-access-state-in-setstate */
var Image = _styledComponents["default"].img.withConfig({
  componentId: "sc-szs34g-0"
})([":hover{opacity:0.3;}"]);
var WrapperCard = _styledComponents["default"].div.withConfig({
  componentId: "sc-szs34g-1"
})([".cardContainer{}"]);
var EmptyPage = /*#__PURE__*/function (_ContextComponent) {
  function EmptyPage(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, EmptyPage);
    _this = _callSuper(this, EmptyPage, [props, context]);
    _this.mockList = _this.mockList.bind(_this);
    if (!_this.pageTypeId && context && context.initData && context.initData.pageTypeId) {
      _this.pageTypeId = context.initData.pageTypeId;
    }
    return _this;
  }
  (0, _inherits2["default"])(EmptyPage, _ContextComponent);
  return (0, _createClass2["default"])(EmptyPage, [{
    key: "mockList",
    value: function mockList() {
      // Création d'un mock d'une liste trackée
      var uneListe = this.context.initData && this.context.initData.trackingInfo && this.context.initData.trackingInfo.elementList ? this.context.initData.trackingInfo.elementList : _mockTrackingInfo.mockTrackingInfo2.elementList;
      uneListe = _trackingHelper.TrackingHelper.transformTrackingList(uneListe);
      return new this.props.TrackingElement({
        elementList: uneListe,
        pageTypeId: this.pageTypeId
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (false && this.pageTypeId && !this.props.viewedPageId) {
        /** ***************************************************************** */
        /** **  Recuperation du  viewedPageId   Element list vide    (mysql)  */
        /** ***************************************************************** */
        // Envoi du tracking
        this.props.getViewedPageId({
          pageTypeId: this.pageTypeId,
          elementList: []
        });

        /** ***************************************************************** */
        /** **  Recuperation du  viewedPageId   Element list rempli   (mysql) */
        /** ***************************************************************** */
        // registerVisitContentList est l'equivalent de registerVisitContent des jsp, on lui passe une liste
        // dans laquelle il va il va récupérer  companyId, elementId
        // et placementId sauf si viewedContentType est fourni dans ce ca il récupérera le placementId associé
        var trackatoredList = _trackingHelper.TrackingHelper.registerVisitContentList(_mockTrackingInfo.mockFilledElementList.elementList, "product");
        // Envoi du tracking
        this.props.getViewedPageId({
          pageTypeId: this.pageTypeId,
          elementList: trackatoredList
        });

        /** ***************************************************************** */
        /** ** Cas d'une creation d'une liste et ajout des elements un par un */
        /** **                      (mysql)                                   */
        /** ***************************************************************** */

        var uneNouvelleListe = _trackingHelper.TrackingHelper.addRegisterVisitContentToList(2180685, 5106, 4, null); // Ajout de 1er element avec l'id du placementId
        // Ajout d'un element de type product
        uneNouvelleListe = _trackingHelper.TrackingHelper.addRegisterVisitContentToList(1906349, 5106, "product",
        // pas d'id on peut mettre le nom du type
        uneNouvelleListe);
        // Ajout d'un element de type logo
        uneNouvelleListe = _trackingHelper.TrackingHelper.addRegisterVisitContentToList(2100553, 5106, _constants.ELEMENT_TYPE.logo, uneNouvelleListe);
        // Envoi du tracking
        this.props.getViewedPageId({
          pageTypeId: this.pageTypeId,
          elementList: uneNouvelleListe
        });

        /** ***************************************************************** */
        /** ** Tracking d'un liste      mongo                                 */
        /** ***************************************************************** */
        var uneListeAvecDunePageResultat = this.mockList();
        // Envoie du tracking
        this.props.doTracking(uneListeAvecDunePageResultat, this.props.viewedPageId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var TrackingElement = this.props.TrackingElement;
      /** mock d'un produit */
      var mockItem = {
        id: 159410,
        name: "un nom",
        entityType: "PRODUCT",
        entityId: 2003900,
        comments: "un com ",
        companyId: 53709,
        date: null,
        requestTypes: null,
        requestTokenId: null,
        requestUrl: null,
        productDTO: {
          imageUrl: "https://img.archiexpo.fr/images_ae/photo-m2/58370-2063467.jpg",
          linkUrl: "http://www.archiexpo.fr/prod/nordlux/product-53709-2003900.html",
          company: null,
          newProduct: false,
          innovation: null,
          productPrice: null,
          hasVideo: null,
          shortName: "lampe de table",
          brand: "VONDOM ",
          name: "TABLE CONTEMPORAINE / EN POLYÉTHYLÈNE / RECTANGULAIRE / DE JARDIN ",
          id: 2003900
        },
        pdfDTO: null,
        pdfDetailsDTO: null,
        projectDTO: null
      };

      /** Creation de mocks de tracking Element */
      /**
       * un element view
       */
      var trackingItem = {
        id: 123546,
        entityId: 123,
        companyId: 3251,
        campaignId: 4587,
        elementTypeId: 1,
        displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
        placementId: 3,
        pushed: false,
        eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_VIEW,
        context: this.context
      };
      var trackingElement = new TrackingElement(trackingItem);

      /**
       * un element click pushed
       */
      trackingItem = {
        id: 123546,
        entityId: 123,
        companyId: 3251,
        campaignId: 4587,
        elementTypeId: 1,
        displayMode: _constants.TRACKING_EVENTS.MODE_THUMBNAILS,
        placementId: 3,
        pushed: true,
        // pushed
        eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
        context: this.context
      };
      var trackingElementPushed = new this.props.TrackingElement(trackingItem);

      /**
       * un element view natural
       */
      trackingItem.pushed = false; // natural
      trackingItem.pushed = "view"; // view
      trackingItem.context = context;
      var trackingElementNatural = new this.props.TrackingElement(trackingItem);

      /**
       * une liste tracké natural
       */
      var uneListe = [{
        elementTypeId: "4",
        elementId: "2180685",
        companyId: "5106",
        displayMode: "thumbnail",
        placementId: "0"
      }, {
        elementTypeId: "4",
        elementId: "2087473",
        companyId: "5220",
        displayMode: "thumbnail",
        placementId: "0"
      }, {
        elementTypeId: "4",
        elementId: "2087473",
        companyId: "5220",
        displayMode: "thumbnail",
        placementId: "9"
      }];
      var trackingElementList = new TrackingElement({
        elementList: uneListe,
        pageTypeId: 150
      });

      /**
       * un element view hover
       */

      trackingItem = {
        id: 123546,
        entityId: 123,
        companyId: 3251,
        campaignId: 4587,
        elementTypeId: 1,
        displayMode: _constants.TRACKING_EVENTS.MODE_HOVER,
        placementId: 3,
        pushed: false,
        // natural
        eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_VIEW,
        // view
        context: this.context
      };
      var trackingElementHover = new this.props.TrackingElement(trackingItem);

      /**
       * un element tracké survey
       */

      trackingItem = {
        eventType: _constants.TRACKING_EVENTS.EVENT_TYPE_CLICK,
        survey: true,
        rating: 5,
        context: this.context
      };

      // sans reasonId
      var trackingElementSurveyNoReasonID = new this.props.TrackingElement(trackingItem);
      // avec reasonId
      trackingItem.reasonId = 2;
      var trackingElementSurvey = new this.props.TrackingElement(trackingItem);

      /** /Creation de mocks de tracking Element */

      var viewedPageId = this.props.viewedPageId;
      var breadCrumbList = [{
        anchor: "Mobilier",
        link: "https://www.archiexpo.fr/"
      }, {
        anchor: "Canapé",
        link: "https://www.archiexpo.fr/cat/canapes-H.html"
      }, {
        anchor: "Canapés lien ici juste un titre pour tester",
        link: null
      }, {
        anchor: "Canapés",
        link: null
      }];
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], null, /*#__PURE__*/_react["default"].createElement(_breadcrumbs["default"], {
        breadcrumbs: breadCrumbList
      }), "Page test", /*#__PURE__*/_react["default"].createElement("br", null), " ", /*#__PURE__*/_react["default"].createElement("br", null), " ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Group, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        fluid: true,
        color: "red",
        header: "Un lien pushed",
        onClick: function onClick() {
          _this2.props.doTracking(trackingElementPushed, viewedPageId);
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        fluid: true,
        color: "orange",
        header: "Un lien Natural",
        onClick: function onClick() {
          _this2.props.doTracking(trackingElementNatural, viewedPageId);
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        fluid: true,
        color: "blue",
        header: "Une liste natural",
        onClick: function onClick() {
          _this2.props.doTracking(trackingElementList, viewedPageId);
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        fluid: true,
        color: "yellow",
        header: "Survey",
        onClick: function onClick() {
          _this2.props.doTracking(trackingElementSurveyNoReasonID, viewedPageId);
        }
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        fluid: true,
        color: "green",
        header: "Survey avec reasonId",
        onClick: function onClick() {
          _this2.props.doTracking(trackingElementSurvey, viewedPageId);
        }
      }), /*#__PURE__*/_react["default"].createElement(WrapperCard, {
        className: "ui centered cards"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card, {
        onClick: function onClick() {
          _this2.props.doTracking(trackingElementHover.addEventType("CLICK").addDisplayMode("hover"), viewedPageId);
        },
        onMouseOver: function onMouseOver() {
          setTimeout(function () {
            _this2.props.doTracking(trackingElementHover.addEventType("view").addDisplayMode("hover"), viewedPageId);
            var myslEltList = _trackingHelper.TrackingHelper.addRegisterVisitContentToList(mockItem.id, mockItem.companyId, "product");
            _this2.props.doTrackingMysql({
              pageTypeId: _this2.pageTypeId,
              elementList: myslEltList
            }, viewedPageId);
          }, 2000);
        }
      }, /*#__PURE__*/_react["default"].createElement(Image, {
        alt: "Test du tracking sur le hover",
        src: mockItem.productDTO.imageUrl,
        wrapped: true,
        ui: false
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Header, null, mockItem.name, /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Meta, null, " ", mockItem.productDTO.brand), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Description, null, " Test du tracking sur le hover")), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Card.Content, {
        extra: true
      }, /*#__PURE__*/_react["default"].createElement("span", {
        title: "go",
        alt: "go",
        onClick: function onClick() {
          _this2.props.doTracking(trackingElement, viewedPageId);
          window.open("https://www.archiexpo.fr/");
        }
      }, "Description (Velink Track)"))))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: "#",
        title: "go",
        alt: "go",
        track: trackingElement
      }, "Un simple lien Track\xE9"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: "#",
        title: "go",
        alt: "go",
        track: trackingElement,
        external: true
      }, "Un simple lien external Track\xE9"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        to: "http://google.com",
        title: "go",
        alt: "go",
        track: trackingElement,
        external: true,
        encrypt: true
      }, "Un simple lien external encrypt\xE9 Track\xE9"));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withTracking.WithTracking)(EmptyPage);