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
var _pageLayout = _interopRequireDefault(require("../../layouts/pageLayout"));
var _contextComponent = require("../../components/contextComponent");
var _hero = _interopRequireDefault(require("./components/hero"));
var _section = _interopRequireDefault(require("./components/section"));
var _card = _interopRequireDefault(require("./components/card"));
var _iconList = _interopRequireDefault(require("./components/iconList"));
var _miniGrid = _interopRequireDefault(require("./components/miniGrid"));
var _toc = _interopRequireDefault(require("./components/toc"));
var _buyingGuide = require("./styles/buyingGuide");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var BuyingGuidePageComponent = /*#__PURE__*/function (_ContextComponent) {
  function BuyingGuidePageComponent() {
    (0, _classCallCheck2["default"])(this, BuyingGuidePageComponent);
    return _callSuper(this, BuyingGuidePageComponent, arguments);
  }
  (0, _inherits2["default"])(BuyingGuidePageComponent, _ContextComponent);
  return (0, _createClass2["default"])(BuyingGuidePageComponent, [{
    key: "render",
    value: function render() {
      var _this$context$initDat = this.context.initData,
        kwrefLabel = _this$context$initDat.kwrefLabel,
        buyingGuide = _this$context$initDat.buyingGuide;
      var contentBlocks = buyingGuide && buyingGuide.contentBlocks || [];
      var author = buyingGuide && buyingGuide.metadata && buyingGuide.metadata.author;
      var guideTitle = buyingGuide && buyingGuide.title;
      var guideSubtitle = buyingGuide && buyingGuide.subtitle;
      var getBlockById = function getBlockById(externalId) {
        return contentBlocks.find(function (block) {
          return block.externalBlockId === externalId;
        });
      };
      var getBlockItems = function getBlockItems(block) {
        return block && block.payload && block.payload.items || [];
      };
      var getPictureUrl = function getPictureUrl(block, variant) {
        if (!block || !block.pictures) {
          return undefined;
        }
        var picture = block.pictures.find(function (p) {
          return p.variant === variant;
        }) || block.pictures[0];
        return picture ? picture.name : undefined;
      };
      var selectionBlock = getBlockById("selection-criteria");
      var techBlock = getBlockById("technologies-families");
      var techIllustration = getBlockById("technologies-illustration");
      var procurementBlock = getBlockById("procurement-advice");
      var innovationsBlock = getBlockById("innovations-trends");
      var heroBlock = getBlockById("hero-picture");
      var tocItems = [selectionBlock ? {
        id: "selection-criteria",
        label: selectionBlock.title
      } : null, techBlock ? {
        id: "tech-families",
        label: techBlock.title
      } : null, procurementBlock ? {
        id: "procurement-advice",
        label: procurementBlock.title
      } : null, innovationsBlock ? {
        id: "innovations-trends",
        label: innovationsBlock.title
      } : null].filter(Boolean);
      console.log(kwrefLabel);
      return /*#__PURE__*/_react["default"].createElement(_pageLayout["default"], {
        brands: false,
        bannerEnabled: false
      }, /*#__PURE__*/_react["default"].createElement(_buyingGuide.BuyingGuideWrapper, null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.Layout, null, /*#__PURE__*/_react["default"].createElement(_toc["default"], {
        title: "Table of contents",
        items: tocItems,
        author: author && author.name,
        role: author && author.role
      }), /*#__PURE__*/_react["default"].createElement(_buyingGuide.ContentColumn, null, /*#__PURE__*/_react["default"].createElement(_hero["default"], {
        title: guideTitle,
        subtitle: guideSubtitle,
        heroImage: getPictureUrl(heroBlock, "desktop")
      }), /*#__PURE__*/_react["default"].createElement(_section["default"], {
        id: "selection-criteria",
        title: selectionBlock && selectionBlock.title
      }, /*#__PURE__*/_react["default"].createElement(_buyingGuide.CardGrid, null, getBlockItems(selectionBlock).map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_card["default"], {
          key: item.title,
          title: item.title,
          text: item.text
        });
      }))), /*#__PURE__*/_react["default"].createElement(_section["default"], {
        id: "tech-families",
        title: techBlock && techBlock.title,
        variant: "muted"
      }, /*#__PURE__*/_react["default"].createElement(_miniGrid["default"], {
        items: getBlockItems(techBlock),
        variant: "default"
      }), /*#__PURE__*/_react["default"].createElement(_buyingGuide.Illustration, null, /*#__PURE__*/_react["default"].createElement("img", {
        src: getPictureUrl(techIllustration, "desktop"),
        alt: ""
      }))), /*#__PURE__*/_react["default"].createElement(_section["default"], {
        id: "procurement-advice",
        title: procurementBlock && procurementBlock.title
      }, /*#__PURE__*/_react["default"].createElement(_iconList["default"], {
        items: getBlockItems(procurementBlock),
        showNumbers: true
      })), /*#__PURE__*/_react["default"].createElement(_section["default"], {
        id: "innovations-trends",
        title: innovationsBlock && innovationsBlock.title,
        variant: "light"
      }, /*#__PURE__*/_react["default"].createElement(_miniGrid["default"], {
        items: getBlockItems(innovationsBlock),
        variant: "light"
      }))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = BuyingGuidePageComponent;