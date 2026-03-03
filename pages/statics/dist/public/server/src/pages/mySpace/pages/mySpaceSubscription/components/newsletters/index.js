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
var _reactIntl = require("react-intl");
var _contextComponent = require("../../../../../../components/contextComponent");
var _subscriptionTiles = _interopRequireDefault(require("../subscriptionTiles"));
var _section = _interopRequireDefault(require("../section"));
var _checkAll = _interopRequireDefault(require("../checkAll"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MEDIATYPE_NEWSLETTER = "NEWSLETTER";
var MySpaceNewsletter = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceNewsletter(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceNewsletter);
    _this = _callSuper(this, MySpaceNewsletter, [props, context]);
    _this.initData.bind(_this);
    _this.initData();
    return _this;
  }

  /**
   * Récupération des subscriptions
   */
  (0, _inherits2["default"])(MySpaceNewsletter, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceNewsletter, [{
    key: "initData",
    value: function initData() {
      var _this$context$initDat = this.context.initData,
        newslettersSubscription = _this$context$initDat.newslettersSubscription,
        thematicSubscription = _this$context$initDat.thematicSubscription;
      // Liste des subscription de type NEWSLETTER/THEMATIC a afficher
      var subscriptions = newslettersSubscription.slice(0).filter(function (item) {
        return item.mediaType === MEDIATYPE_NEWSLETTER;
      }); // Récupération des subscriptions de type NEWSLETTER

      var subscriptionResult = null;
      if (this.props.subscriptions) {
        subscriptionResult = this.props.subscriptions.subscriptionResult;
      }
      var suscribeAll = false;
      if (subscriptionResult && subscriptionResult.all && subscriptionResult.success) {
        suscribeAll = true; // tout sélectionner est cliqué
      }
      if (thematicSubscription && !subscriptionResult) {
        // Il y a des subscriptions de type THEMATIC
        var intl = this.props.intl;
        var thematicName = intl.formatMessage({
          id: "foj_myspace_subscription_newsletter_event_title"
        });
        thematicSubscription.name = thematicName; // Maj du name
        subscriptions.push(thematicSubscription); // Récupération des subscriptions de type THEMATIC
      }
      if (thematicSubscription && suscribeAll) {
        thematicSubscription.subscribed = true; // tout sélectionner est cliqué
      }
      subscriptions.map(function (item) {
        if (item.universe) {
          item.name = item.universe["label"]; // Maj du name
        }
        if (suscribeAll) {
          item.subscribed = true; // tout sélectionner est cliqué
        }
      });
      this.subscriptions = subscriptions;
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = this.props.subscriptions ? this.props.subscriptions : {
          subscriptionResult: null,
          subscriptions: null
        },
        subscriptionResult = _ref.subscriptionResult;
      if (subscriptionResult) {
        // Maj des newsletters apres une action
        this.initData();
      }
      return /*#__PURE__*/_react["default"].createElement(_section["default"], {
        titleKey: "foj_subscribe_mail_newsletter_form_title",
        h2Key: "foj_subscribe_mail_newsletter_form_details"
      }, /*#__PURE__*/_react["default"].createElement(_checkAll["default"], {
        onHandleCheckAll: this.props.onHandleCheckAll
      }), /*#__PURE__*/_react["default"].createElement(_subscriptionTiles["default"], {
        data: this.subscriptions
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceNewsletter);