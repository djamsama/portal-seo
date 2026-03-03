"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
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
var _react = _interopRequireDefault(require("react"));
var _breadcrumbs = require("./styles/breadcrumbs");
var _constants = require("../../commons/constants");
var _contextComponent = require("../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Icon = function Icon(props) {
  var name = props.name;
  return /*#__PURE__*/_react["default"].createElement("i", {
    className: name
  });
};
/**
 *  Affichage du Breadcrumbs cf https://developers.google.com/search/docs/data-types/breadcrumb
 *  Outil de test de google https://search.google.com/structured-data/testing-tool?hl=fr
 */
var VeBreadcrumbs = /*#__PURE__*/function (_ContextComponent) {
  function VeBreadcrumbs(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, VeBreadcrumbs);
    _this = _callSuper(this, VeBreadcrumbs, [props, context]);
    _this.schemaUrl = props.schemaUrl ? props.schemaUrl : _constants.SCHEMA_URL;
    return _this;
  }
  (0, _inherits2["default"])(VeBreadcrumbs, _ContextComponent);
  return (0, _createClass2["default"])(VeBreadcrumbs, [{
    key: "render",
    value: function render() {
      // On récupère la liste des éléments du fil d'ariane des props.
      var _this$props = this.props,
        breadcrumbs = _this$props.breadcrumbs,
        useIcon = _this$props.useIcon;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : false;

      // On clone la liste pour pouvoir la manipuler.
      var breadcrumbsCloned = breadcrumbs ? (0, _toConsumableArray2["default"])(breadcrumbs) : [];

      // On extrait le dernier élément sans lien.
      var lastElement = breadcrumbsCloned[breadcrumbsCloned.length - 1];
      var lastIndex = breadcrumbsCloned.length;

      // On supprime le dernier élément de la liste.
      breadcrumbsCloned.splice(-1, 1);
      return /*#__PURE__*/_react["default"].createElement(_breadcrumbs.BreadcrumbsContainerWrapper, null, /*#__PURE__*/_react["default"].createElement(_breadcrumbs.BreadcrumbsContainer, {
        isMobile: isMobile
      }, /*#__PURE__*/_react["default"].createElement(_breadcrumbs.OlBreadcrumbs, {
        vocab: this.schemaUrl,
        "typeof": "BreadcrumbList"
      }, breadcrumbsCloned.map(function (breadcrumb, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          _react["default"].createElement("li", {
            key: "breadcrumbs".concat(breadcrumb.anchor).concat(index),
            property: "itemListElement",
            "typeof": "ListItem"
          }, /*#__PURE__*/_react["default"].createElement("a", {
            property: "item",
            "typeof": "WebPage",
            href: breadcrumb.link
          }, useIcon && index === 0 && /*#__PURE__*/_react["default"].createElement(Icon, {
            name: "fa fa-home breadcrumb-margin-right"
          }), /*#__PURE__*/_react["default"].createElement("span", {
            property: "name"
          }, breadcrumb.anchor)), /*#__PURE__*/_react["default"].createElement("meta", {
            property: "position",
            content: index + 1
          }))
        );
      }), lastElement && /*#__PURE__*/_react["default"].createElement("li", {
        key: lastElement.anchor,
        property: "itemListElement",
        "typeof": "ListItem"
      }, /*#__PURE__*/_react["default"].createElement(_breadcrumbs.BreadcrumbsCurrent, {
        property: "name"
      }, lastElement.anchor), /*#__PURE__*/_react["default"].createElement("meta", {
        property: "position",
        content: lastIndex
      })))));
    }
  }]);
}(_contextComponent.ContextComponent);
VeBreadcrumbs.defaultProps = {
  schemaUrl: _constants.SCHEMA_URL,
  useIcon: true
};
var _default = exports["default"] = VeBreadcrumbs;