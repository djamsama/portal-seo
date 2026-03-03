"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _styledComponents = require("styled-components");
var _contextComponent = require("../../../../../../../../components/contextComponent");
var _responsive = _interopRequireDefault(require("../../../../../../../../components/styles/responsive"));
var _tile = _interopRequireDefault(require("../../../../../../../../components/tile/tile"));
var _notificationsSubscriptionMySpaceHelper = _interopRequireDefault(require("../../../../helpers/notificationsSubscriptionMySpaceHelper"));
var _myspaceTile = require("./styles/myspaceTile");
var _templateObject, _templateObject2, _templateObject3;
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var media = _responsive["default"].media();
var MEDIATYPE_EMAG = "EMAG";
var MyspaceTile = /*#__PURE__*/function (_ContextComponent) {
  function MyspaceTile(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MyspaceTile);
    _this = _callSuper(this, MyspaceTile, [props, context]);
    _this.state = {
      imageHeight: props.imageHeight
    };
    _this.refImage = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  /**
   * On recupere la gestion du responsive
   */
  (0, _inherits2["default"])(MyspaceTile, _ContextComponent);
  return (0, _createClass2["default"])(MyspaceTile, [{
    key: "getMediaTemplates",
    value: function getMediaTemplates() {
      return this.props.isLarge ? (0, _styledComponents.css)([""]) : (0, _styledComponents.css)(["width:calc(100% / 4);max-height:240px;padding-bottom:5px;", " ", ";", ";"], media.screenSmMin(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n      width: calc(100% / 3);\n  "]))), media.screenXsMin(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      width: calc(100% / 2);\n  "]))), media.screenMdMin(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      max-height: 230px;\n  "]))));
    }

    /**
     *  Souscription demandée
     *
     * @param {*} item
     * @param {*} onSubscriptionSubmit
     */
  }, {
    key: "handleClick",
    value: function handleClick(item) {
      item.subscribed = !item.subscribed;
      this.textInput.checked = item ? item.subscribed : false;
      var intl = this.props.intl;
      var _this$context$config$ = this.context.config.portal,
        locale = _this$context$config$.locale,
        baseUrl = _this$context$config$.baseUrl;

      // Init msg de notification
      var nmshInstance = new _notificationsSubscriptionMySpaceHelper["default"](intl);
      var notificationsOpsType = item.mediaType === MEDIATYPE_EMAG ? nmshInstance.notificationOps().emag : nmshInstance.notificationOps()["default"];
      var notificationsOps = item.subscribed ? notificationsOpsType.subscribe : notificationsOpsType.unsubscribe;
      this.props.onSubscriptionSubmit(locale, baseUrl, notificationsOps, item.mediaType, item.subscribed, item.universe ? item.universe.id : false, false);
    }

    /**
     * Test l'etat d'un item lorsqu'une subscription a été effectuée
     *
     * @param {*} item
     */
  }, {
    key: "checkItem",
    value: function checkItem(item) {
      var _ref = this.props.subscriptions ? this.props.subscriptions : {
          subscriptionResult: null
        },
        subscriptionResult = _ref.subscriptionResult;
      if (subscriptionResult && item) {
        var id = item.universe ? item.mediaType + item.universe.id : item.mediaType;
        if (id === subscriptionResult.id && !subscriptionResult.success) {
          item.subscribed = !item.subscribed; // Une requete a été lancé mais a échouée on remet dans l'état initial
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var item = this.props.item;
      this.checkItem(item);
      return /*#__PURE__*/_react["default"].createElement(_tile["default"], {
        mediaTemplates: this.getMediaTemplates(),
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_myspaceTile.WrapperDivTile, null, /*#__PURE__*/_react["default"].createElement(_myspaceTile.WrapperDivImage, {
            ref: _this2.refImage,
            height: _this2.state.imageHeight
          }, /*#__PURE__*/_react["default"].createElement(_myspaceTile.TileDivImage, {
            src: item.imageUrl,
            alt: item.name,
            onClick: function onClick() {
              _this2.handleClick(item);
            }
          }), /*#__PURE__*/_react["default"].createElement(_myspaceTile.WrapperCheck, null, /*#__PURE__*/_react["default"].createElement("input", {
            ref: function ref($checkbox) {
              return _this2.textInput = $checkbox;
            },
            id: "check".concat(item.name),
            type: "checkbox",
            checked: item.subscribed,
            readOnly: true,
            onClick: function onClick() {
              _this2.handleClick(item);
            },
            style: {
              cursor: "pointer"
            }
          }))), !_this2.props.isLarge && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_myspaceTile.WrapperTileText, null, /*#__PURE__*/_react["default"].createElement(_myspaceTile.WrapperProjectLinkMyspace, null, /*#__PURE__*/_react["default"].createElement(_myspaceTile.LinkDivTile, {
            href: "#",
            title: item.name,
            onClick: function onClick() {
              _this2.handleClick(item);
            }
          }, /*#__PURE__*/_react["default"].createElement(_myspaceTile.ShortName, null, item.name)))), /*#__PURE__*/_react["default"].createElement(_myspaceTile.WrapperMarginBottom, null)));
        }
      });
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MyspaceTile);
MyspaceTile.propTypes = {
  /**
   *  produit affiché dans la tuile
   *
   */
  item: _propTypes["default"].object,
  /**
   *  Si true c'est une tuile large (100% du container)
   */
  isLarge: _propTypes["default"].bool,
  /**
   * height de l'image
   */
  imageHeight: _propTypes["default"].string,
  /**
   * Fonction passée par Redux
   */
  onSubscriptionSubmit: _propTypes["default"].func
};
// $FlowFixMe
MyspaceTile.defaultProps = {
  imageHeight: "auto"
};